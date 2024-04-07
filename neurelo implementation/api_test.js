"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var https = require("follow-redirects/http");
var options = {
    'method': 'POST',
    'hostname': 'us-east-2.aws.neurelo.com',
    'path': '/rest/poi/__one?select=%7B%22id%22:%20true%7D',
    'headers': {
        'Content-Type': 'application/json',
        'X-API-KEY': 'neurelo_9wKFBp874Z5xFw6ZCfvhXd/w9y5gCGya0vcRosG0+ZfNzmDp39N2GbkikCb6aDXtKC0wzoq+giwupk1xbS+HnbWh5pT61gJdKXfSlu3/A1oBS9Tr1VhtEb91of9u3RQ4rEcnc8RbWwee5irb6AUXV/by6NJ50ecXv4e1SuD3flLHZLXSSGWGU7k9L8e7y0wG_rmTVCKyIo/JfefNQ2KMv8hBzZJb1kHQd1bXw0E+ebtQ='
    },
    'maxRedirects': 20
};
var req = https.request(options, function (res) {
    var chunks = [];
    res.on("data", function (chunk) {
        chunks.push(chunk);
    });
    res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });
    res.on("error", function (error) {
        console.error(error);
    });
});
var postData = poi.toJson();
req.write(postData);
req.end();
/*const coords = new Coordinates(37.324,32.434);
const clues: Clue[] = [new Clue("This location holds the history and heritage of the Chinese residents of San Francisco, with thousands of their stories inside. "),
      new Clue("\"Perfect place to get some work done. Warm in winter and there's usually desks available. Great collection of DVDs, if you still have a player.\" Five stars."),
      new Clue("The building stands out as one of the few brick buildings in all of Chinatown.")
  ];
const poi = new POI("descriptor", "dante!", coords, clues);*/ 
