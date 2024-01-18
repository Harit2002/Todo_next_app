import axios from "axios";
import { useEffect, useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

export default function Task({
  id,
  title,
  content,
  status,
  handleDelete,
}: {
  id: string;
  title: string;
  content: string;
  status: string;
  handleDelete: any;
}) {
  const [compelted, setCompleted] = useState(false);

  async function handleDeleteTask() {
    handleDelete(id);
  }

  async function handleCompleted() {
    setCompleted(true);
    await axios.put("/api/tasks/" + id, {
      id,
      title,
      content,
      status: "completed",
    });
  }

  useEffect(() => {
    if (status === "completed") {
      setCompleted(true);
    }
  }, []);

  return (
    <div
      className={`bg-blue text-black ${
        compelted && "bg-green-100"
      } border border-blue-400 rounded-md m-2 p-2`}
    >
      <div className="font-semibold">{title}</div>
      <div>{content}</div>
      <div>{status}</div>
      <div className="flex w-full gap-5 pt-4">
        <button
          onClick={handleDeleteTask}
          className="text-sm flex place-items-center gap-2 bg-red-500 hover:bg-red-700 focus:bg-red-600 text-white font-semibold px-2 py-2 rounded"
        >
          <RiDeleteBin5Fill size={16} />
          <h5>Delete</h5>
        </button>
        {!compelted && (
          <button
            onClick={handleCompleted}
            className="text-sm flex place-items-center gap-1 bg-green-500 hover:bg-green-00 focus:bg-green-600 text-white font-semibold px-2 py-2 rounded"
          >
            <TiTick size={20} />
            Mark as Completed
          </button>
        )}
      </div>
    </div>
  );
}
