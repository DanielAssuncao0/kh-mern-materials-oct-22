let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

// connecting to the database & storing in the db
mongoClient.connect(url, {useNewUrlParser: true})
.then((client) => {
    let db = client.db("mydb");
    let cursor = db.collection("employee").find();
    cursor.forEach((document) => console.log(document))
    .finally(() => client.close());
})
.catch((error) => console.log(error));

