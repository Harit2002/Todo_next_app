"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Task from "@/components/Task";
import toast from "react-hot-toast";

function createTask({
  _id,
  title,
  content,
  status,
  handleDelete,
}: {
  _id: string;
  title: string;
  content: string;
  status: string;
  handleDelete: any;
}) {
  return (
    <Task
      key={_id}
      id={_id}
      title={title}
      content={content}
      status={status}
      handleDelete={handleDelete}
    />
  );
}

export default function ShowTask() {
  const [tasks, setTasks] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("/api/tasks");

      const data = response.data.tasks;

      data.forEach(
        (el: {
          _id: string;
          title: string;
          content: string;
          status: string;
          handleDelete: any;
        }) => {
          el.handleDelete = handleDelete;
        }
      );
      console.log("initial data", data);
      if (data !== null) setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  async function handleDelete(id: string) {
    try {
      await axios.delete("/api/tasks/" + id);
      toast.error("Task deleted successfully");

      setTasks((prev) =>
        prev.filter(
          (el: {
            _id: string;
            title: string;
            content: string;
            status: string;
            handleDelete: any;
          }) => el._id != id
        )
      );
      console.log(tasks)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(tasks);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-2 overflow-auto h-[80vh] overflow-x-hidden w-[700px]">
        {tasks.map(createTask)}
      </div>
    </div>
  );
}
