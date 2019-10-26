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

  app.post("/api/results/:name", function(req, res) {
    db.wyeoak
      .findOne({
        where: {
          name: req.params.name
        },
        attributes: ["city", "state"]
      })
      .then(function(results) {
        var googleCall =
          "https://www.google.com/maps/embed/v1/place?key={{google}}&q=res.json(results)";
      });
  });
};
