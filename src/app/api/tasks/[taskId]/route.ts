import { NextRequest, NextResponse } from "next/server";
import Task from "@/models/taskModel";
import { connectDB } from "@/helper/db";

connectDB();

export async function GET(
  req: NextRequest,
  { params }: { params: { taskId: String } }
) {
  try {
    const task = await Task.findOne({ _id: params.taskId });

    if (!task)
      return NextResponse.json({ msg: "No task found", success: false });

    return NextResponse.json({
      task,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error, success: false });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { taskId: string } }
) {
  try {
    const task = await Task.findOneAndDelete({ _id: params.taskId });
    
    if (!task)
      return NextResponse.json({ msg: "No task found", success: false });

    return NextResponse.json({
      task,
      msg: "User deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error, success: false });
  }
}



export async function PUT(
  req: NextRequest,
  { params }: { params: { taskId: string } }
) {
  try {
    const {title, content, status} = await req.json();
    const task = await Task.findOne({ _id: params.taskId });

    if (!task)
      return NextResponse.json({ msg: "No task found", success: false });

    task.title = title;
    task.content = content;
    task.status = status;

    await task.save();

    return NextResponse.json({
      task,
      msg: "User deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error, success: false });
  }
}

{

let a=10;

  { 
    let a = 12;
    console.log
  }
}