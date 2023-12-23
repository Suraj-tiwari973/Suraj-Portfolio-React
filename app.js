const express =  require("express")
const collection =  require("./mongo");
const cors =  require("cors");


const corsOptions = {
    origin: 'http://127.0.0.1:3000', // Replace with the appropriate origin
  };
  

const app = express();
app.use(express.json)
app.use(express.urlencoded({extended:true}))
app.use(cors(corsOptions))


app.post('/contact',async(req,res)=>{
    const {name,email,phone,message} = req.body;

    try{
        const data = {
            name:name,
            email:email,
            phone:phone,
            message:message
        }
    
        await collection.insertOne(data)
        console.log("Success..");
        res.status(200).send({
            message:"Your Data saved succesfuly."
        })
    }
    catch(error){
        res.status(500).send({
            message:"Internal Server error."
        })
    }
})

app.listen(3002,()=>{
    console.log("Listening at port 3002");
})