import { connectDB } from "@/helper/db";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const user = await User.findOne({ _id: params.userId });

    if (!user) {
      return NextResponse.json({ msg: "User not found" });
    }
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}

export function POST(request: Request) {
  const body = request.body;

  return NextResponse.json({ ...body, message: "Posting Users Data" });
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { userId: String } }
) {
  try {
    const user = await User.findOneAndDelete({ _id: params.userId });
    return NextResponse.json({ user, msg: "User Deleted successfully." });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const { name, about, password } = await req.json();
    const user = await User.findOne({ _id: params.userId });

    if (!user)
      return NextResponse.json({ msg: "No user found", success: false });

    user.name = name;
    user.about = about;
    user.password = password;

    await user.save();

    return NextResponse.json({
      user,
      msg: "User updated successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error, success: false });
  }
}
