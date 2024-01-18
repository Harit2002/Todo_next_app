import mongoose, { Document, Schema } from "mongoose";

enum Status {
  Pending = "pending",
  Completed = "completed",
}

interface ITask extends Document {
  title: String;
  content: String;
  addedDate: String;
  status: Status;
}

const taskSchema = new Schema<ITask>(
  {
    title: { type: String, required: [true, "Please enter title."] },
    content: { type: String, required: [true, "Please enter details about title."] },
    addedDate: String,
    status: { type: String, default: Status.Pending },
  },
  { versionKey: false }
);

const Task = mongoose.models.task || mongoose.model<ITask>("task", taskSchema);

export default Task;
