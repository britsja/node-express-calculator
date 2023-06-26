const express = require('express');
const bodyParses = require('body-parser')
const app = express();
app.use(bodyParses.urlencoded({extended: true}));

app.listen(3000, function() {
    console.log("Listening on port 3000");
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
  var result = parseInt(req.body.num1) + parseInt(req.body.num2);
  res.send(`Your calculated total is: ${result}`);
})