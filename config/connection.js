const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://midhunaradhakrishnan31:idMnKyOFd2lMfcPn@cluster0.wg0fa.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB connected...");
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;

module.exports = connectDB;


