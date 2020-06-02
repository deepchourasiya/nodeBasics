const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine' , 'ejs');
app.set('views' , 'view');

app.use(bodyParser.urlencoded({extended:false}));

app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  next();
});

app.use((req, res, next) => {
  const UserName = req.body.username || "Unknown User";
  res.render('index' , {
      user : UserName
  });
});

app.listen(5000);
