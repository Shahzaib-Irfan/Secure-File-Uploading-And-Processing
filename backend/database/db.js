// const mongoose = require("mongoose");

// mongoose.set("strictQuery", false);
// mongoose.connect(
//   "mongodb+srv://shahzaibirfan1012:SPY5NChnBcc2NiDq@project.97kyhnz.mongodb.net/",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// var db = mongoose.connection;
// db.on("error", () => console.log("error"));
// db.once("open", () => console.log("Database Connected"));

// module.exports = { db };

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

mongoose.connect(
  "mongodb+srv://shahzaibirfan1012:SPY5NChnBcc2NiDq@cluster0.tep58oc.mongodb.net/",
  {
    useNewUrlParser: true,
  }
);

const db = mongoose.connection;

db.on("error", (err) => {
  console.log("Failed to connect with db");
});

db.once("open", () => {
  console.log("Connected with db");
});
