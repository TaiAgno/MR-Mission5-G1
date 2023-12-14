const app = require('./app');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

const dbURI = process.env.MONGO_URI || "mongodb://localhost:27017/mongo";

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 5000
}).then(() => {
    console.log("Connected to database");
}).catch((err) => console.log(err));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});