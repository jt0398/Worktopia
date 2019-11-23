// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  console.log(
    "-------User logged in? " + req.user,
    +" " + JSON.stringify(req.session)
  );

  if (req.user) {
    return next();
  }

  //Send empty object if the user is not logged in
  res.json({});
  //This doesn't work with react client javascript
  // If the user isn't logged in, redirect them to the login page
  //return res.redirect("/login");
};
