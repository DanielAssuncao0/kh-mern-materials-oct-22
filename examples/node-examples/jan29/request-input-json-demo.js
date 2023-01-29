let app = require("express")(); // let express = required("express"); let app = express();
let parser = require("body-parser"); // parser to convert json to js object
let PORT_NO = 9090;

app.listen(PORT_NO, () => console.log(`Express is running at ${PORT_NO}`));

app.use(parser.json()); // middleware that converts JSON to JS Object

let products = []; // empty array that can store javascript object

app.get('/api/products', (request, response) => {
    response.status(200).json(products); 
});
// extract the body having products
app.post('/api/products', (request, response) => { // USE post and json data 
    let product = request.body;
    products.push(product); // product will have id, name & price in javascript & json
    response.status(200).json({"message":`${product.id} is added`});
});
