var db = require("../models");

module.exports = function(app) {
  //post route that listens for click
  //then grabs the info
  //.then() res.json and put the call inside the function istelf instead of handlebars
  app.post("/api/results", function(req, res) {
    db.wyeoak
      .create({
        city: req.body.city,
        statae: req.body.state
      })
      .then(function(dbwyeoak) {
        res.json(dbwyeoak);
      });
  });
};
