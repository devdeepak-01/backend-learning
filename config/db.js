const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/myDatabase").then(()=>{
    console.log("Connection Successful");
    
}).catch((e)=>{
console.log(`Error Occurred ${e}`)
})
module.exports=mongoose;