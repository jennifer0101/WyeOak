var db = require("../models");
const axios = require("axios");

module.exports = function(app) {
  app.post("/api/all", function(req, res) {
    //console.log(req.body.a);
    /*
    for (var i = 0; i < req.body.)
    var addressStart = req.body[0].city + ", " + req.body[0].state;
    var addressFirst = req.body[1].city + ", " + req.body[1].state;
    var addressSecond = req.body[2].city + ", " + req.body[2].state;
    var addressStart = req.body[3].city + ", " + req.body[3].state;
    var addressStart = req.body[4].city + ", " + req.body[4].state;


     */
    //console.log(address);
    axios({
      method: "GET",
      url: "https://apidojo-booking-v1.p.rapidapi.com/locations/auto-complete",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "apidojo-booking-v1.p.rapidapi.com",
        "x-rapidapi-key": "d4b7b82a1fmshf554c1d06b69e08p16af5ejsneb8e4a16b5e3"
      },
      params: {
        languagecode: "en-us",
        text: req.body.a
      }
    })
      .then(response => {
        console.log(response.data[0].name); //response)
        var mapLabel = response.data[0].label;
        /*for (var i = 0; i < mapLabel.length; i++) {
          mapLabel = mapLabel.replace(" ", "+");
          mapLabel = mapLabel.replace(",", "");
        }
         */

        db.Destinations.create({
          name: 1,
          city: response.data[0].name,
          state: response.data[0].region,
          label: mapLabel
        }).then(function(results) {
          res.end();
        });
        /*
                 for (var i = 0; i < 5; i++)
                 {
                      db.Destination.create({
                          city: req.body[i].city,
                          state: req.body[i].state,
                      }).then(function(results) {
                          res.end();
                      });
                  }

                  */
      })
      .catch(error => {
        console.log(error);
      });
    /*
        Destinations.create({
            author: req.body.author,
            body: req.body.body,
            created_at: req.body.created_at,
        }).then(function(results) {
            // `results` here would be the newly created chirp
            res.end();
        });

 */
  });
  app.get("/api/maps", function(req, res) {
    db.Destinations.findOne({
      where: {
        name: 1
      }
    }).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });
  });
};
