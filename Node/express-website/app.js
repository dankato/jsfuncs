var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var nodemailer = require("nodemailer");

var app = express();

// jade to use views folder
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
  res.render("index", { title: "Welcome" });
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/contact", function(req, res) {
  res.render("contact");
});

app.post("/contact/send", function(req, res) {
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "email@gmail.com",
      pass: "pass"
    }
    // https://myaccount.google.com/lesssecureapps
  });
  var mailOptions = {
    from: "FirstName LastName <email@gmail.com>",
    to: "email@example.com",
    subject: "Website Form Submission",
    text: "You have a new submission!",
    html: "<p>This is a paragraph</p>"
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.redirect("/");
    } else {
      console.log("message sent");
      res.redirect("/");
    }
  });
});

app.listen(3000);
console.log("server is running on port 3000");
