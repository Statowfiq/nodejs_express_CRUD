const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://statowfiq:ng8dNuTNj1YXJFHW@devcluster-vatml.azure.mongodb.net/EmployeesDB",
  { useUnifiedTopology: true },
  err => {
    if (!err) console.log("Mongoose connection succeeded.");
    else console.log("Error in DB connection", err);
  }
);

require("./employees.model");
