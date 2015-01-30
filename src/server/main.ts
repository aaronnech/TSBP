import express = require("express");

var server = express();
server.configure(function(){
	server.use(express.static(__dirname + '../client/static'));
});

server.listen(1337);