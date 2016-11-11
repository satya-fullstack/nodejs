var http = require('http');
http.get("http://www.duckduckgo.com", function(res) {
    console.log("Got response: " + res.statusCode);
}).on('error', function(e) {
    console.log("Got error: " + e.message);
});
var http = require('http');