// Import required modules
const express = require("express"); // Express framework for building the server
const cors = require("cors"); // Middleware to enable Cross-Origin Resource Sharing (CORS)
const { createHandler } = require("graphql-http/lib/use/express"); // GraphQL HTTP handler for Express
const { buildSchema } = require("graphql"); // Utility to define GraphQL schema
const { ruruHTML } = require("ruru/server"); // Lightweight GraphQL IDE served in the browser

// Create an Express application
const app = express();

// Enable CORS so frontend apps (like HTML pages) can access this server from other origins
app.use(cors()); // Without this, browser fetch requests from other ports will be blocked

// Define the GraphQL schema using schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);
// This schema defines one query: `hello`, which returns a String

// Define resolver functions for each field in the schema
const root = {
  hello: () => "Hello World" // When someone queries `hello`, this function runs and returns the string
};

// Attach the GraphQL handler to the `/graphql` endpoint
app.all("/graphql", createHandler({ schema, rootValue: root }));
// This allows both GET and POST requests to be handled by GraphQL

// Serve the Ruru GraphQL IDE at the root URL `/`
app.get("/", (req, res) => {
  res.type("html"); // Set response type to HTML
  res.end(ruruHTML({ endpoint: "/graphql" })); // Serve the IDE pointing to the `/graphql` endpoint
});

// Start the server on port 4000
app.listen(4000, () => {
  console.log("Running a GraphQL API server at http://localhost:4000/graphql");
});
// Once running, you can visit http://localhost:4000/ to test queries in the browser