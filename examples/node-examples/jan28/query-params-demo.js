let http = require("http");
let url = require("url");
let PORT_NO = 9090;
let server = http.createServer( (request, response) => {
    let urlText = request.url;
    if(urlText != '/favicon.ico') {
        let urlObject = url.parse(urlText, true);
        let params = urlObject.query;
        let name = params.name;
        let age = params.age;
        let content = `
        <h2>Repsonse form the App</h2>
        <h3>Name = ${name}, Age = ${age}</h3>
        `;
        response.writeHead(200, {'content-type':'text/html'});
        response.write(content);
    }
    
    response.end();
});
server.listen(PORT_NO, () => console.log(`Server running in ${PORT_NO}`))