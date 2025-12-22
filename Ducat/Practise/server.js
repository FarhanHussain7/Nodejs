const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

const users = [];
const JWT_SECRET = "MY_SECRET_KEY";

// Root route
app.get('/', (req, res) => {
  res.send("Server is running smoothly");
});

// Register new user
app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    users.push({ username, email, password: hashPassword });
    res.status(200).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Login user
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    if (!user || !password || !user.password) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ username: user.username, email: user.email }, JWT_SECRET, {
      expiresIn: 60
    });
    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get profile using token
app.get('/profile', async (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Missing token' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const userData = users.find(u => u.email === decoded.email);
    if (!userData) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ username: userData.username, email: userData.email });
  } catch (err) {
    res.status(403).json({ message: 'Invalid token' });
  }
});

// Get all users
app.get('/users', (req, res) => {
  res.send(users);
});

// Update user (full update)
app.put('/users/:username', async (req, res) => {
  const { username } = req.params;
  const { email, password } = req.body;
  const userIndex = users.findIndex(u => u.username === username);
  if (userIndex === -1) return res.status(404).json({ message: "User not found" });

  const hashPassword = await bcrypt.hash(password, 10);
  users[userIndex] = { username, email, password: hashPassword };
  res.json({ message: "User updated successfully" });
});

// Update user (partial update)
app.patch('/users/:username', async (req, res) => {
  const { username } = req.params;
  const user = users.find(u => u.username === username);
  if (!user) return res.status(404).json({ message: "User not found" });

  const { email, password } = req.body;
  if (email) user.email = email;
  if (password) user.password = await bcrypt.hash(password, 10);

  res.json({ message: "User partially updated" });
});

// Delete user
app.delete('/users/:username', (req, res) => {
  const { username } = req.params;
  const index = users.findIndex(u => u.username === username);
  if (index === -1) return res.status(404).json({ message: "User not found" });

  users.splice(index, 1);
  res.json({ message: "User deleted successfully" });
});

app.listen(5000, () => {
  console.log(`Server is running at http://localhost:5000`);
});