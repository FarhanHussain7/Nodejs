const express = require('express');
const cors = require('cors');
const { createHandler } = require("graphql-http/lib/use/express");
const { buildSchema } = require("graphql");
const { ruruHTML } = require("ruru/server");

// ✅ GraphQL Schema — fix type name casing
const courseSchema = buildSchema(`
  type Query {
    course(id: Int): Course
    courses: [Course]
  }

  type Course {
    id: Int
    title: String
    author: String
    description: String
    topic: String
    url: String
  }
`);

// ✅ Sample data
const courseData = [
  {
    id: 1,
    title: "Node.js Basics",
    author: "Farhan",
    description: "Learn the basics of Node.js",
    topic: "Node.js",
    url: "http://example.com/nodejs"
  },
  {
    id: 2,
    title: "GraphQL Intro",
    author: "Farhan",
    description: "Introduction to GraphQL",
    topic: "GraphQL",
    url: "http://example.com/graphql"
  }
];
// ✅ Resolvers
const getCourse = ({ id }) => courseData.find(course => course.id === id);
const getAllCourses = () => courseData;

const root = {
  course: getCourse,
  courses: getAllCourses
};

// ✅ Express setup
const app = express();
app.use(cors());

app.all("/courses", createHandler({ schema: courseSchema, rootValue: root }));

app.get("/", (req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/courses" }));
});

app.listen(5000, () => {
  console.log("Running a GraphQL API server at http://localhost:5000/courses");
});