const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");
const router = require("./routes/model1.routes");
const port = 5000;
app.use(cors());
const datas = async() =>{
    const resp = await axios.get("https://api.github.com/users/nikhilmore1");
    return resp.data;
}
const rowData = [
    {
        id:1,
        name:"Nikhil",
        age:22,
        city:"Indore",
        state:"Madhya Pradesh"
    },
    {
        id:2,
        name:"Mahesh",
        age:21,
        city:"Pune",
        state:"Maharashtra"
    },
    {
        id:3,
        name:"Rohit",
        age:22,
        city:"Indore",
        state:"Madhya Pradesh"
    },
    {
        id:4,
        name:"Hardik",
        age:22,
        city:"Indore",
        state:"Madhya Pradesh"
    },
    {
        id:5,
        name:"Shubham",
        age:22,
        city:"Indore",
        state:"Madhya Pradesh"
    },
    {
        id:6,
        name:"Rohit",
        age:22,
        city:"Indore",
        state:"Madhya Pradesh"
    }
]
datas();
app.get('/',(req,res)=>{
    res.send("Hello Nikhil in our home page");
    res.end;
});
app.get('/github',async(req,res)=>{
    const data =await datas();
    res.status(200).json(data);
})
app.get('/app',(req,res)=>{
    res.status(200).send("you are redirect to app header via express");
    res.end;
});
app.get('/api',(req,res)=>{
    res.send(rowData);
})

app.get('/module',(req,res)=>{
    res.send(router);
    res.end; 
});
app.listen(process.env.PORT,()=>{
    console.log("server started"+process.env.PORT);
})