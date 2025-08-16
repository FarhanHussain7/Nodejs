const express = require("express");

const app = express();
const port = 80;
app.get(
  "/",
  (req, res) => {
    res.send("this is my first app with express");
  }
);
 app.post(
  "/C:/Users/hp/Desktop/New Folder/Nodejs/SEVEN_Custom_backende/Home.html",
  (req, res) => {
     res.send("this is my Post app with express");
   }
 );
app.get(
  "/C:/Users/hp/Desktop/New Folder/Nodejs/SEVEN_Custom_backende/Home.html",
  (req, res) => {
    res.status(200).send("this is my status app with express");
  }
);
// app.get(
//   "/C:/Users/hp/Desktop/New Folder/Nodejs/SEVEN_Custom_backende/Home.html",
//   (req, res) => {
//     res.send("this is my first app with express");
//   }
// );

app.listen(port, () => {
  console.log(
    `the application will strat on this port http://localhost:${port}`
  );
});
