const Tasks = require("../models/Task");

// Get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find({});

    res.status(200).json({
      tasks,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};

// Create a new task
const createTask = async (req, res) => {
  try {
    const task = await Tasks.create(req.body);

    res.status(201).json({
      task,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};

// Get a single task
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const task = await Tasks.findById(taskID);

    if (!task) {
      return res.status(404).json({
        success: false,
        msg: `No task found with id ${taskID}`,
      });
    }

    res.status(200).json({
      task,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};

// Update a task
const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const task = await Tasks.findByIdAndUpdate(taskID, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({
        success: false,
        msg: `No task found with id ${taskID}`,
      });
    }

    res.status(200).json({
      task,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const task = await Tasks.findByIdAndDelete(taskID);

    if (!task) {
      return res.status(404).json({
        success: false,
        msg: `No task found with id ${taskID}`,
      });
    }

    res.status(200).json({
      task,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: error.message,
    });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};