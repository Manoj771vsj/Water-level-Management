const express = require("express");
const bodyParser = require("body-parser");
var mysql = require("mysql");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home.ejs");
});

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "wlmmd",
});

connection.connect(function (err) {
  // if (err) throw err;
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected to MySql");
});

app.post("/", function (req, res) {
  // console.log(req.body.d1);
  // var relation = req.body.d1;
  var buttonName = req.body.button;
  switch (buttonName) {
    case "d1":
      connection.query(
        "select* from dam where Did = ?",
        [req.body.dam],
        function (err, rows, fields) {
          if (err) throw err;

          res.render("dam", { items: rows });
        }
      );
      // console.log("it is dam "+req.body.dam);

      break;

    case "d2":
      connection.query(
        "select* from hydropwer where Did = ?",
        [req.body.hydropower],
        function (err, rows, fields) {
          if (err) throw err;

          res.render("Hydropower", { items: rows });
        }
      );
      // console.log("it is dam "+req.body.dam);

      break;

    case "d3":
      connection.query(
        "select* from irrigation where Did = ?",
        [req.body.irrigation],
        function (err, rows, fields) {
          if (err) throw err;

          res.render("irrigation", { items: rows });
        }
      );
      // console.log("it is dam "+req.body.dam);

      break;

    case "d5":
      connection.query(
        "select* from dam",

        function (err, rows, fields) {
          if (err) throw err;

          res.render("dam", { items: rows });
        }
      );
      // console.log("it is dam "+req.body.dam);

      break;

    case "h1":
      connection.query(
        "select* from hydropwer where Hid = ?",
        [req.body.hydropower],
        function (err, rows, fields) {
          if (err) throw err;

          res.render("hydropower", { items: rows });
        }
      );
      break;

    case "h2":
      connection.query(
        "select* from industry where Hid = ?",
        [req.body.industry],
        function (err, rows, fields) {
          if (err) throw err;

          res.render("Industry", { items: rows });
        }
      );
      break;

    case "h3":
      connection.query(
        "select* from dam where Did = ?",
        [req.body.dam],
        function (err, rows, fields) {
          if (err) throw err;

          res.render("dam", { items: rows });
        }
      );
      break;

    case "h5":
      connection.query(
        "select* from hydropwer",

        function (err, rows, fields) {
          if (err) throw err;

          res.render("hydropower", { items: rows });
        }
      );
      // console.log("it is dam "+req.body.dam);

      break;

    case "i1":
      connection.query(
        "select* from industry where Iid = ?",
        [req.body.industry],
        function (err, rows, fields) {
          if (err) throw err;

          res.render("Industry", { items: rows });
        }
      );
      break;

    case "i2":
      connection.query(
        "select* from dam where Did = ?",
        [req.body.dam],
        function (err, rows, fields) {
          if (err) throw err;

          res.render("dam", { items: rows });
        }
      );
      break;

    case "i5":
      connection.query(
        "select* from industry",

        function (err, rows, fields) {
          if (err) throw err;

          res.render("industry", { items: rows });
        }
      );
      // console.log("it is dam "+req.body.dam);

      break;

    case "i3":
      connection.query(
        "select* from irrigation where Irid = ?",
        [req.body.irrigation],
        function (err, rows, fields) {
          if (err) throw err;

          res.render("irrigation", { items: rows });
        }
      );
      break;
    case "i4":
      connection.query(
        "select* from agri_schemes where Aid = ?",
        [req.body.agriculture],
        function (err, rows, fields) {
          if (err) throw err;

          res.render("agriculture", { items: rows });
        }
      );
      break;

    case "i6":
      connection.query(
        "select* from irrigation",

        function (err, rows, fields) {
          if (err) throw err;

          res.render("irrigation", { items: rows });
        }
      );
      // console.log("it is dam "+req.body.dam);

      break;

    case "a1":
      connection.query(
        "select* from agri_schemes where Aid = ?",
        [req.body.agri],
        function (err, rows, fields) {
          if (err) throw err;

          res.render("agriculture", { items: rows });
        }
      );
      break;
    case "a5":
      connection.query(
        "select* from agri_schemes",

        function (err, rows, fields) {
          if (err) throw err;

          res.render("agriculture", { items: rows });
        }
      );
      // console.log("it is dam "+req.body.dam);

      break;
  }
});
app.get("/back", function (req, res) {
  res.render("home");
});
app.listen(3000, function () {
  console.log("server is running on port 3000");
});
