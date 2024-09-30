require('dotenv').config()
const express = require('express');
const { connectDB } = require('./db/index.js');
const app = express();
// ifi function

connectDB();




/*(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`/`${DB_NAME}`);
        app.on('error',(error)=>{
            console.log('error',error);
        })
        app.listen(process.env.PORT,()=>{
            console.log(`listining to this ${process.env.PORT} port`);
        })
    } catch (error) {
        console.log(`error${error}`);
    }
})();*/
