let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

// connecting to the database & storing in the db
mongoClient.connect(url, {useNewUrlParser: true})
.then((client) => {
    let db = client.db("mydb");
    let doc = {_id: 2, name : "Bruce", salary:45000};
    db.collection("employee").insertOne(doc)
    .then(() => console.log("Stored successfully"))
    .catch(() => console.log("Sorry failed to store"))
    .finally(() => client.close()) 
})
.catch((error) => console.log(error));

