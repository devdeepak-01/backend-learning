
//get all tasks controller
const getAllTasks=(req,res)=>{
    res.send('all tasks') 
}
//Create one task
const createTask=(req,res)=>{
    res.json(req.body)
}
//get one task
const getTask=(req,res)=>{
    res.json({id:req.params.id})
}
//update the task
const updateTask=(req,res)=>{
    res.send("update tasks") 
}
//Delete one task
const deleteTask=(req,res)=>{
    res.json('Delete Tasks')
}

module.exports={
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}