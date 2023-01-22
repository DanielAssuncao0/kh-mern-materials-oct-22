// we must import http module
let http = require('http');

let server = http.createServer( (req, res) => {
    res.write('Hello web app'); // content part of the response
    res.end(); // ends content in the response
});
// server starts when you mention the port
server.listen(8080, () => console.log('Server is started....'));

// use http://localhost:8080 on your browser to see the output
