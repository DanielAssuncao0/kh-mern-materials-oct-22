// importing express and creating express object
let express = require("express");
let app = express();
let PORT_NO = 9090;
// start the server
app.listen(PORT_NO, () => console.log(`Express running in ${PORT_NO}`));
// get request
app.get('/api', (request, response) => {
    response.status(200).json({title: "This is a get request"})
});
// post request
app.post('/api', (request, response) => {
    response.status(200).json({title: "This is a post request"});
});
// put request
app.put('/api', (request, response) => {
    response.status(200).json({title: "This is a put request"});
});
// delete request
app.delete('/api', (request, response) => {
    response.status(200).json({title: "This is a delete request"});
});