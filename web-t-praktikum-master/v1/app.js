const express = require("express");
const app = express();
const router = require("./routes/routes");

app.use(express.static("../v0"));
app.use(express.static("public"));
app.use(express.urlencoded(
    {extended:false}));

app.set("views engine","ejs");
app.set("views","views");

app.use(router);
app.listen(8020);