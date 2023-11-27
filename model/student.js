const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://devadarsh:devadarsh@cluster0.eesjbhp.mongodb.net/db1?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch(()=>{console.log(err)});

let sc=mongoose.Schema;
const studschema = new sc({
    Admno:String,
    Sname:String,
    Age:Number,
    Status:String
});
var studmodel =mongoose.model("Student",studschema)
module.exports=studmodel;