// require("dotenv").config();
//  var google = process.env.GOOGLE_KEY;
// console.log(google);
$.get("/api/map", function(data) {
  console.log(data);
  $("#apiCall").attr(
    "src",
    "https://www.google.com/maps/embed/v1/place?key=AIzaSyDA7yGe9xdaHgiQbrY2YmxmTh1yz1C09jI&q=" +
      data.label
  );
});
