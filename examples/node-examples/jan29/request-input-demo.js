let express = require("express");
let app = express();
let PORT_NO = 9090;
app.listen(PORT_NO, () => console.log(`Server running at ${PORT_NO}`));
app.get('/api/:id', (request, response) => {
    let userId = request.params.id;
    if(userId > 100 & userId < 200) {
        response.status(200).json({message:`User with an id ${userId} found`})
    } else {
        response.status(404).json({message:`User with an id ${userId} not found`});
    }
});
app.post('/api/:id/:name', (request, response) => {
    let userId = request.params.id;
    let username = request.params.name;
    
    response.status(201).json({message:`User ${username} is created and id is ${userId}`});
});
app.get('/api/search/:laptop', (request, response) => {
    let laptop = request.params.laptop;
    let ram = request.query['ram'];
    let processor = request.query['processor'];
    response.status(200)
    .json({description:`You are searching ${laptop} with ${ram} GB RAM and ${processor} Processor.`})
});