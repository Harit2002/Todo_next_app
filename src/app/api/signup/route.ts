import { connectDB } from "@/helper/db";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connectDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, password } = reqBody;

    console.log(reqBody);

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hash = bcryptjs.hashSync(password, 10);

    console.log(hash)

    const user1 = new User({ name, email, password: hash });

    await user1.save();
    return NextResponse.json({user1});
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
