const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", true);

const dbURI = process.env.DB_CONNECTION;
mongoose.connect(dbURI, {useNewUrlParser: true});

mongoose.connection.on("connected", () => {
    console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on("error", err => {
    console.log("Mongoose connection error: ", err);
});

mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected");
});
