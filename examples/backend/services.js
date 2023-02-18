let app = require("express")();// express object
let mongoClient = require("mongodb").MongoClient;// mongodb client
let cors = require("cors");// cors
let parser = require("body-parser");// parser
let PORT = 8080;// port for express
let DB_URL = "mongodb://localhost:27017";// db url
app.use(parser.json());// add cors & body paraser to the express
app.use(cors()); // enabling cors
app.listen(PORT, () => console.log(`Server started at ${PORT}`)); 
// fetch all documents from the mongodb
app.get("/employees", (request, response) => { 
    mongoClient.connect(DB_URL, {useNewUrlParser:true})
    .then((client) => {
        let employees = [];
        let db = client.db("mydb");
        let cursor = db.collection("employee").find();
        cursor.forEach(document => employees.push(document))
        .then(() => response.json(employees))
        .finally(() => client.close())
    })
    .catch(() => response.status(404).json({"error": "DB_ERR"}))
});
// fetch a document from the mongodb by passing id from the client request
// you must handle all these URLs employees/1, employees/2, if id is found return document else error in json format
app.get("/employees/:id", (request, response) => {
    let id = parseInt(request.params.id);
    mongoClient.connect(DB_URL, {useNewUrlParser:true})
    .then((client) => {
        let db = client.db("mydb");
        let document = db.collection("employee").findOne({_id: id});
        document
        .then((doc) => {
            if(doc == null) throw err; 
            response.json(doc);
        }).catch(() => response.json({"error":`Sorry ${id} not found`}))
        .finally(() => client.close())
    })
    .catch(() => response.status(404).json({"error": "DB_ERR"}));
    
});