require("./models/db");
const express = require("express");

const employeeController = require("./controllers/employeeController");
const path = require("path");
const exphbs = require("express-handlebars");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.set("views", path.join(__dirname, "/views/"));
app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    defaultLayout: "mainLayout",
    layoutsDir: __dirname + "/views/layouts/"
  })
);
app.set("view engine", "hbs");
// app.get("/", (req, res) => {});

app.listen(3000, () => console.log("Express is running in 3000"));

app.use("/employee", employeeController);
