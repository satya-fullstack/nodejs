var http = require('http');
var options = {
    host: 'www.w3resource.com',
    path: '/html/ul/html-ul-tag-example.html',
    method: 'POST'
};
callback = function(response) {
    var str = ''
    response.on('data', function (chunk) {
        str += chunk;
    });
    response.on('end', function () {
        console.log(str);
    });
}
var req = http.request(options, callback);
//This is the data we are posting, it needs to be a string or a buffer
req.write("");
req.end();