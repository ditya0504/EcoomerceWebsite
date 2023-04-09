const mongoose = require("mongoose");


// "mongodb://0.0.0.0:27017/Ecommercewebsite"
const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    })
    .then((data) => {
        console.log(`mongodb connected with server: ${data.connection.host}`);
    }).catch((err) => {
        console.log(err)

    })
}

mongoose.set('strictQuery', false);

module.exports = connectDatabase