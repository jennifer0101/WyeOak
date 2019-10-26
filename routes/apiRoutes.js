var db = require("../models");

module.exports = function(app) {
  //post route that listens for click
  //then grabs the info
  //.then() res.json and put the call inside the function istelf instead of handlebars
  app.post("/api/results", function(req, res) {
    db.wyeoak
      .findone({
        where: {
          address: $("#startLocation")
            .val()
            .trim()
        },
        attributes: ["address"]
      })
      .then(function(res) {
        res.status(200).json();
        var address = $(this).data("wyeoak");
      });
  });
};
