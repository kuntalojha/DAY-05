const { MongoClient } = require("mongodb");
const url = "mongodb://0.0.0.0:27017/books";

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Database = client.db("books");
// you can use original table name
const collection = Database.collection("quotes");

const getQuotes = async (req, res) => {
  try {
    const alldata = await collection.find({}, { _id: 0 }).toArray();
    if (alldata.length == 0) {
      res.send("No record found!");
    } else if (alldata.length != 0) {
      res.send(alldata); // you also can yse res.json
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal server error.");
  }
};

// export default { getQuotes };
module.exports = { getQuotes };

// module.exports = { getQuotes };
