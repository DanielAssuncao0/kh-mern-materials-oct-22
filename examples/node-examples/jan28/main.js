let http = require("http");
let PORT_NO = 9090;
let server = http.createServer( (request, response) => {
    let content = `
        <h1>Web app running in ${PORT_NO}</h1>
        <h2>This is second heading</h2>
    `;
    response.writeHead(200, {'content-type': 'text/html'});
    response.write(content);
    response.end();
});
server.listen(PORT_NO, () => console.log(`App started in ${PORT_NO}`))