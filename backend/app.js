var createError = require("http-errors");
var express = require("express");
var path = require("path");
// import sdk from "@api/virustotal";
require("./database/db");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const userRoutes = require("./routes/userRoutes");
const fileRoutes = require("./routes/fileRoutes");
const axios = require("axios");

var app = express();

// sdk
//   .analysis({
//     id: "OWQwYzgyOTI5YWYyNWY5MWMxOTVhNjQ1YWQzMTdkMGI6MTcxNDAyNDMzNg==",
//     "x-apikey":
//       "b0d14d7d823d56f629df95e84bc78f75062bb1ee782bc358ee1e9ff08bcaf43e",
//   })
//   .then(({ data }) => console.log(data))
//   .catch((err) => console.error(err));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.get("/api/v1/files/:id", async (req, res) => {
  const id = req.params.id;
  const apiUrl = `https://www.virustotal.com/api/v3/analyses/${id}`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        accept: "application/json",
        "x-apikey":
          "b0d14d7d823d56f629df95e84bc78f75062bb1ee782bc358ee1e9ff08bcaf43e",
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data from Virustotal API");
  }
});

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/userApi", userRoutes);
app.use("/fileApi", fileRoutes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
