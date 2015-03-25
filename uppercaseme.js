// uppercaseme.js
"use strict"
var fs = require('fs');
var request = require('request');
var myfile = "myfile.txt";
var content = "";

if (fs.existsSync(myfile)) {
    console.info("Begin Programme");
    request("https://baconipsum.com/api/?callback=?", function(error, response, body) {
            if (!error && response.statusCode == 200) {
                if (baconGoodness && baconGoodness.length > 0) {
                    for (var i = 0; i < baconGoodness.length; i++) {
                        //Check if the rendering should be with or without tags
                        if (settings.no_tags)
                            content += baconGoodness[i];
                        else
                            content += '<p>' + baconGoodness[i] + '</p>'
                    }
                }
                fs.writeFile(myfile, content, function() {
                    console.info("End to Upper Case File");
                })
            }else{
                console.log(error);
            }
        })
        /*var content = fs.readFileSync(myfile, 'utf8');
        //fs.writeFileSync(myfile, content.toUpperCase());
        fs.writeFile(myfile, content.toUpperCase(), function() {
            console.info("End to Upper Case File");
        })*/
    console.info("End Programme");
} else {
    console.log("File does not exist - " + myfile);
}