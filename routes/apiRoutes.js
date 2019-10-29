var db = require("../models");
const axios = require("axios");
module.exports = function(app) {
  //post route that listens for click
  //then grabs the info
  //.then() res.json and put the call inside the function istelf instead of handlebars
  var tripname;

  app.post("/api/all", function(req, res) {
    tripname = req.body[0];
    console.log(req.body[1]);
    for (var i = 1; i < req.body.length; i++) {
      getInfo(req.body[i], tripname, res);
    }
  });
  app.get("/api/map", function(req, res) {
    db.Destinations.findOne({
      where: {
        id: 1
      }
    }).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });
  });
};
function getInfo(location, tname, res) {
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
      text: location
    }
  }).then(response => {
    console.log(response);
    db.Destinations.create({
      name: tname,
      city: response.data[0].name,
      state: response.data[0].region,
      label: response.data[0].label
    }).then(function(results) {
      res.end();
    });
  });
}
