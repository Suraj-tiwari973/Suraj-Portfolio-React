const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Suraj")
.then(()=>{
    console.log("Database connection done..");
})
.catch(()=>{
    console.log("Database connection failed..");
})

// mogodb schema..

const newShema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})


const collection = mongoose.model("Usermessage",newShema);

module.exports = collection;