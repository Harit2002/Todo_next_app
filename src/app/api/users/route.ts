import { connectDB } from "@/helper/db";
import { NextResponse } from "next/server";
import User from "@/models/userModel";


connectDB();

export async function GET() {
  try {
    const users = await User.find();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(error);
  }
}
