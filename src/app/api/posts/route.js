import Post from "@/models/Post";
import { NextResponse } from "next/server";
import connect from "@/utils/db";

export async function GET(req) {
  try {
    await connect();
    const posts = await Post.find();
    return new NextResponse(posts, { status: 200 });
  } catch (err) {
    return new NextResponse("Database error", { status: 500 });
  }
}
