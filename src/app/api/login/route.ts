import { connectDB } from "@/helper/db";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import jwt from "jsonwebtoken"

connectDB();

export async function POST(req : NextRequest) {

}