const http = require('http');

// Create a server that sends HTML as the response
const server = http.createServer((req, res) => {
  // Define the HTML content
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Node.js HTML Example</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        h1 { color: blue; }
      </style>
    </head>
    <body>
      <h1>Welcome to Node.js</h1>
      <p>This is an example of serving HTML content using Node.js.</p>
    </body>
    </html>
  `;

  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Send the HTML content
  res.end(htmlContent);
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


