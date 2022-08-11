const path = require('path');
const express = require("express");
const PORT = process.env.PORT || 3232;
const app = express();
// MongoDB
const { MongoClient } = require('mongodb');
async function main() {
  const uri = "mongodb+srv://jeppe:jeppe@cluster0.bymt5hj.mongodb.net/?retryWrites=true&w=majority"

  const client = new MongoClient(uri);
  try {
    await client.connect();

    await listDatabases(client);

  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

main().catch(console.error);


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Jeg er en besked, der har rejst fra serveren. Her kunne f.eks. data fra MongoDB rejse i stedet for." });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});