const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const https = require("https");

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");

var items = [];

app.get("/", function(req, res) {


  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var today  = new Date();
  var todayFormat= today.toLocaleDateString("es", options);

  function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
  var todayCapitalized = capitalizeFirstLetter(todayFormat);

  res.render('index', {dayOfWeek: todayCapitalized, newItems: items});
})

app.post("/", function(req, res){
  console.log(req.body.nextItem);
  var newItem = req.body.nextItem;
  items.push(newItem);

})




app.listen(3000, function() {
  console.log("Server started on port 3000");
})
