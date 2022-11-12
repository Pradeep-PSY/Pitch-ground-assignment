const { Schema, model } = require("mongoose");

const todoSchema = Schema({
  task_name: { type: String, required: true },

  task_completed: { type: Boolean, required: true },
});

const TodoModel = model("todolist", todoSchema);

module.exports = TodoModel;
