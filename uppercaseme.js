// uppercaseme.js
"use strict"
var fs = require('fs');
var request = require('request');

var myfile = "myfile.txt";

if (fs.existsSync(myfile)) {
    console.info("Begin Programme");
    var content = fs.readFileSync(myfile, 'utf8');
    //fs.writeFileSync(myfile, content.toUpperCase());
    fs.writeFile(myfile, content.toUpperCase(), function() {
        console.info("End to Upper Case File");
    })
    console.info("End Programme");
} else {
    console.log("File does not exist - " + myfile);
}

request("https://baconipsum.com/api/?callback=?", function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
})