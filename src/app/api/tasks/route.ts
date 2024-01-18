import { NextRequest, NextResponse } from "next/server";
import Task from "@/models/taskModel";
import { connectDB } from "@/helper/db";

connectDB();

export async function GET() {
  try {
    const tasks = await Task.find();

    return NextResponse.json({
      tasks,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error, success: false });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { title, content, status } = await req.json();
    const task = new Task({
      title,
      content,
      addedDate: new Date().toUTCString(),
      status,
    });

    await task.save();

    return NextResponse.json({
      task,
      msg: "Task created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error, success: false });
  }
}
