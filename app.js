const express =  require("express")
const collection =  require("./mongo");
const cors =  require("cors");


const app = express();
app.use(express.json)
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.post('/',async(req,res)=>{
    const {name,email,phone,message} = req.body;

    const data = {
        name:name,
        email:email,
        phone:phone,
        message:message
    }

    await collection.insertMany([data])
    console.log("Success..");
})

app.listen(3002,()=>{
    console.log("Listening at port 3002");
})