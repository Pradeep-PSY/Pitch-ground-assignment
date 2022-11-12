const { Router } = require("express");
const TodoModel = require("../model/todoModel");

const todoController = Router();

todoController.post("/create", async (req, res) => {
  const { task_name, task_completed } = req.body;
  const new_todo = new TodoModel({ task_name, task_completed });
  await new_todo.save();
  res.send({ message: "Task created successfully", new_todo });
});

todoController.get("/list", async (req, res) => {
  const tasks = await TodoModel.find({});

  res.send(tasks);
});


todoController.patch("/update/:taskId", async (req, res) => {
    const { taskId } = req.params;
  
    const task = await TodoModel.findOneAndUpdate(
      { _id: taskId },
      req.body,
      { new: true }
    );
  
    return res.send({ message: "successfully updated", task });
  });

  
todoController.delete("/remove/:taskId", async (req, res) => {
    const { taskId } = req.params; 
  
    await TodoModel.findOneAndDelete({ _id: taskId });
    return res.send({ message: "successfully deleted" });
  });

  


module.exports = todoController;
