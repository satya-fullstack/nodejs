var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
    host:'localhost',
    port: 1337
});

//start server
server.start(function(){
   console.log('Server Running at',server.info.uri);
});

