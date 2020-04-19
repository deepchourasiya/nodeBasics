const express = require("express");
const BodyParsor = require("body-parser");

const app = express();

app.use(BodyParsor.urlencoded({ extended: false }));

/** use method is use to allow middleware function */
app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Send</button></form>'
  );
  //   next(); // this allows the request to  continue to the next middleware in the line
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000);
