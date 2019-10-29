// require("dotenv").config();
//  var google = process.env.GOOGLE_KEY;
// console.log(google);
$.get("/results", function(data) {
  console.log(data);
  let jarf = $("#apiCall").attr("src");
  console.log(jarf);

  $("#apiCall").attr("src", jarf + "&q=" + data.label);
});
