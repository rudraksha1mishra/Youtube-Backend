const mongoose = require('mongoose');
const { DB_NAME }  =  require('../constants.js');
//require('dotenv').config({path : './env'});


const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n mongodb connected !! ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log(process.env.MONGOdb_URI);
        console.log("error in the mongodb : ",error.message);
        process.exit(1);
    }
}
module.exports = {connectDB};