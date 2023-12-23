const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Suraj")
.then(()=>{
    console.log("Database connection done..");
})
.catch(()=>{
    console.log("Database connection failed..");
})

// mogodb schema..

const newSchema = new mongoose.Schema({
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


const collection = mongoose.model("usermessage",newSchema);

module.exports = collection;