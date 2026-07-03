const express=require('express');
const app=express();  
const tasks=require('./routes/task');  
const port=3000;


//middleware
app.use(express.json())

//routes
app.get('/hello',(req,res)=>{
    res.send('task manager app')
})

app.use('/v1/api/tasks',tasks)



app.listen(port,console.log(`Server is listening on port number ${port}...`))
