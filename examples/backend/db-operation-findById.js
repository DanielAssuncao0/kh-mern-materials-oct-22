let read = require("readline-sync");
let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
let id = read.questionInt("Enter id: ");

// connecting to the database & storing in the db
mongoClient.connect(url, {useNewUrlParser: true})
.then((client) => {
    let db = client.db("mydb");
    let document = db.collection("employee").findOne({_id: id});
    document
    .then((doc) => {
        if(doc == null) throw err; 
        console.log(doc)
    }).catch(() => console.log(`Sorry document with an id ${id} not found`))
    .finally(() => client.close())
})
.catch((error) => console.log(error));