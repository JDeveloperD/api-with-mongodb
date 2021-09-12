const mongoose = require('mongoose');
const databaseURL = process.env.MDB_DATABASE_URL;

mongoose.connect(databaseURL)
    .then(() => {
        console.log("Mongodb is running")
    });

mongoose.connection.on('error', error => console.log(error))