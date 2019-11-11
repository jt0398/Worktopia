require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");

const cors = require("cors");

var db = require("./server/models");

const routes = require("./server/routes");
var session = require("express-session");
var passport = require("./server/config/passport");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    safeFileNames: true,
    preserveExtension: true,
    tempFileDir: `${__dirname}/public/files/temp`
  })
);
// Serve up static assets (usually on heroku)ß
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// We need to use sessions to keep track of our user's login status
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

var syncOptions = {};
syncOptions.force = process.env.SYNC_MODEL === "true" ? true : false;

// Starting the server, syncing our models ------------------------------------/
db.sequelizeConnection.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
