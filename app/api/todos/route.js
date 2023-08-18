import connectMongoDB from "@/lib/mongodb";
import Todo from "@/models/todo";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Todo.create({ title, description });
  return NextResponse.json({ message: "Todo created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const todos = await Todo.find();
  return NextResponse.json({ todos });
}

export async function DELETE(request) {
  const id = request.searchParams.get("id");
  console.log(id);
  await connectMongoDB();
  await Todo.findByIdAndDelete(id);
  return NextResponse.json({ message: "Todo deleted" }, { status: 200 });
}
