import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model.Todos || mongoose.model("Todos", todoSchema);

export default Todo;
