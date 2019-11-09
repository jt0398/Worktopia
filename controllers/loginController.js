const db = require("../models");

// Defining methods for the booksController
module.exports = {
  checkLogIn : function(req, res) {
    console.log("Validating login");
    db.User.findOne({
      where: {
        user_name: req.body.user_name,
        user_password: req.body.user_password
      }
    })

  }
};
