// uppercaseme.js
"use strict"
var fs = require('fs');
var request = require('request');
var myfile = "myfile.txt";
var content = "";
var settings = {
      'type' : 'meat-and-filler',
      'start_with_lorem' : true,
      'paras' : 3,
      'sentences' : 0,
      //Added the no_tags options (Joel Lord joel@engrenage.com)
      'no_tags' : false      
    };

if (fs.existsSync(myfile)) {
    console.info("Begin Programme");
    request("https://baconipsum.com/api/?callback=?", function(error, response, body) {
            if (!error && response.statusCode == 200) {
                if (body && body.length > 0) {
                    for (var i = 0; i < body.length; i++) {
                        //Check if the rendering should be with or without tags
                        if (settings.no_tags)
                            content += body[i];
                        else
                            content += '<p>' + body[i] + '</p>'
                    }
                }
                fs.writeFile(myfile, content, function() {
                    console.info("End to Upper Case File");
                })
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


//http://cdn.baconipsum.com/api/jquery-BaconIpsum.js