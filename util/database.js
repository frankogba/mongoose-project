const mongoose = require("mongoose");
const connection = mongoose.createConnection("mongodb+srv://ebhodaghe:kOOcu23@cluster0.r6vqkne.mongodb.net/?retryWrites=true&w=majority");
module.exports = connection;



