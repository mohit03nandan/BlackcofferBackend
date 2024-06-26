const mongoose = require('mongoose');

const dotenv = require('dotenv');

function connection(){
    dotenv.config();

    const mongoUrl = process.env.MONGODB_URI;
    
    mongoose.set('strictQuery', false);
    
    mongoose
        .connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Database Connected Successfully");
        })
        .catch((err) => {
            console.log("Database Not Connected Successfully : " + err);
        });
}

module.exports = connection;