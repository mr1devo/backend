const express=require("express");
const cors=require("cors")

const studmodel = require("./model/student");

const app=new express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

app.listen(3005,(request,response)=>{
        console.log("Port is running in 3005")
})

app.get('/',(request,response)=>{
        response.send("hi database")
})

//for saving student data

app.post('/snew',(request,response)=>{
    new studmodel(request.body).save();
    response.send("Record saved successfully")
})