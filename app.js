// See 
// https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
// http://blog.modulus.io/build-your-first-http-server-in-nodejs
//
const http = require('http');
const PORT = 8080;

function requestHandler(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Freds-Special': 'data'
    });
    response.write('<!DOCTYPE "html">\n');
    response.write('<html>\n');
    response.write('<head>\n');
    response.write('<title>Hello World Page</title>\n');
    response.write('</head>\n');
    response.write('<body>\n');
    response.write('Hello World!\n');
    response.write('It works!!! Path hit: ' + request.url + '\n');
    response.write('</body>\n');
    response.write('</html>\n');
    response.end();
}

var server = http.createServer(requestHandler);

server.listen(PORT, function() {
    // Callback triggered when server is successfully listening.
    console.log('Running on http://localhost:' + PORT);
});
