let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

// connecting to the database
mongoClient.connect(url, {useNewUrlParser: true})
.then((client) => {
    let db = client.db("mydb");
    let doc = {_id: 1, name : "Alex", salary:35000};
    db.collection("employee").insertOne(doc)
    .then(() => console.log("Stored successfully"))
    .catch(() => console.log("Sorry failed to store"))
    .finally(() => client.close()) 
})
.catch(() => console.log('failed to connect'))
