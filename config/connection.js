const mongoose = require('mongoose');


const connectDB = () =>{
    return mongoose.connect('mongodb+srv://midhunaradhakrishnan31:idMnKyOFd2lMfcPn@cluster0.wg0fa.mongodb.net/')
    .then(() =>{
        console.log("mongodb connected");
    })
    .catch((err) =>{
        console.log("monogodb connection error:", err);
    })
}

module.exports = connectDB;


