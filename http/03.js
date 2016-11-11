var http = require('http');
//Complete url to get the random numbers : 'http://www.w3resource.com/php/function-reference/srand-example.php'
var options = {
    host: 'www.w3resource.com',
    path: '/php/function-reference/srand-example.php'
};
callback = function (response) {
    var str = '';
    // chunk of data has been recieved and  append it to `str`
    response.on('data', function (chunk) {
        str += chunk;
    });
    //the whole response has been recieved, now print it out here
    response.on('end', function () {
        console.log(str);
    });
}
http.request(options, callback).end();