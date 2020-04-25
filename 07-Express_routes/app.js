const express = require("express");
const bodyParsor = require("body-parser");
const path = require('path');

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

const app = express();

app.use(bodyParsor.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname , 'public')));

// Filterinng the routs only /admin/* will reach this request
app.use('/admin',adminRoute);
app.use(shopRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname , 'views' , '404.html'));
});

app.listen(3000);
