var http = require("http");

var port = 8080;
// appt number

function handleRequest(request, response) {
    response.end("It works! Path Hit: " + request.url);

}

var server = http.createServer(handleRequest);

server.listen(port, function () {
    console.log("Server is listening on http://local host:" + port);

});