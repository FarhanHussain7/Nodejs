const express = require('express');
const app = express();
app.use(express.json());

const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017'); // ✅ Corrected

async function connectToDB() {
    try {
        await client.connect();
        console.log("✅ Connected Successfully to MongoDB");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error);
    }
}

connectToDB(); // ✅ Actually call the function

app.get('/employee', async (req, res) => {
    try {
        const employee = await client.db('O9MongoDB').collection('employee').find({}).toArray();
        res.json(employee);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching employees");
    }
});

app.get('/employee/:id', async (req, res) => {
    const employeeId = +req.params.id;
    try {
        const employee = await client.db('O9MongoDB').collection('employee').findOne({ eId: employeeId });
        res.json(employee || {});
    } catch (error) {
        console.error(error);
        res.status(500).send("Error fetching employee");
    }
});

app.post('/employee', async (req, res) => {
    const payload = req.body;
    try {
        await client.db('O9MongoDB').collection('employee').insertOne(payload);
        res.send("✅ Employee added successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error adding employee");
    }
});

app.patch('/employee/:id', async (req, res) => {
    const employeeId = +req.params.id;
    const payload = req.body;
    try {
        await client.db('O9MongoDB').collection('employee').updateOne(
            { eId: employeeId },
            { $set: payload },
            { upsert: true }
        );
        res.send("✅ Employee updated successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error updating employee");
    }
});

app.delete('/employee/:id', async (req, res) => {
    const employeeId = +req.params.id;
    try {
        await client.db('O9MongoDB').collection('employee').deleteOne({ eId: employeeId });
        res.send("✅ Employee deleted successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error deleting employee");
    }
});

app.listen(5000, () => {
    console.log('🚀 Server running at http://localhost:5000');
});