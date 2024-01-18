"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const [disabled, setDisabled] = useState(true);

  function handleAdd() {
    axios
      .post("/api/tasks", { title, content, status })
      .catch((err) => console.log(err));

      toast.success("Task added successfully");

    setTitle("");
    setContent("");
    setStatus("null");
    setDisabled(true);
  }

  useEffect(() => {
    if (title != "" && content != "" && status != "") {
      setDisabled(false);
    }
  }, [title, content, status]);

  return (
    <div className="flex justify-center">
      <div className="text-black border border-blue-400 rounded-md mt-2 px-8 py-4 flex flex-col gap-2 w-[450px]">
        <h1 className="flex justify-center text-2xl">Add Task</h1>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium leading-6"
          >
            Title
          </label>
          <input
            type="text"
            className="rounded-lg text-sm w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1"
            placeholder="Enter Task title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium leading-6"
          >
            Content
          </label>
          <textarea
            className="rounded-lg text-sm w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1"
            minLength={9}
            rows={5}
            placeholder="Enter Task title"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium leading-6"
          >
            Status
          </label>
          <select
            className="rounded-lg text-sm w-full mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1"
            placeholder="Enter Task title"
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            <option value="">Select Status</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <div className="mt-3">
          <button
            onClick={handleAdd}
            className={`text-sm bg-blue-400 ${
              !disabled && "hover:bg-blue-600"
            } focus:bg-blue-600 text-white font-semibold px-4 py-2 rounded`}
            disabled={disabled}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}
