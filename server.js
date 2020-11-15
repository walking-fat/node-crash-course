const http = require('http');

const server = http.createServer((req, res) => {
    // console.log('request made');
    console.log(req.url, req.method);

    // set header content type
    // res.setHeader('Content-Type', 'text/plain');
    // res.write('Hello');

    res.setHeader('Content-Type', 'text/html');


    res.write('<head><link rel="stylesheet" href="#"></head>')

    res.write("<p>Hello MOFO, WHAT'S MY NAME?</p>");

    res.end();
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});