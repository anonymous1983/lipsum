// uppercaseme.js
"use strict"
var fs = require('fs');
var lorem = require('./lib/lorem.js');
var regTagIpsum = /(<ipsum)([A-Za-z0-9>< ="'-]*)(<\/ipsum>)/gi;
var myfile = "myfile.txt";
var myfileHtml = "test.html";
var content = "";


if (fs.existsSync(myfileHtml)) {
    console.info("Begin lipsum");
    var content = fs.readFileSync(myfileHtml, 'utf8');
    content = content.replace(regTagIpsum, function(){
        var _lorem = new lorem();
        _lorem.query = '2p';
        return _lorem.createLorem();
    });
    fs.writeFileSync(myfileHtml, content);
    console.info("End lipsum");
} else {
    console.log("File does not exist - " + myfileHtml);
}