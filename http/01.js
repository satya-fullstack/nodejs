var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('<h1>Learning Node.js http module!</h1>');
});
server.listen(8089);
