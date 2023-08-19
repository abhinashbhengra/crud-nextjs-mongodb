import connectDb from "@/lib/mongodb";
import Todo from "@/models/todo";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDb(); // Connect to the MongoDB database

    const todos = await Todo.find({});

    // res.json(todos);

    return NextResponse.json({ todos });
  } catch (e) {
    console.error(e);
  }
}

export async function POST(req) {
  try {
    const { title, description } = await req.json();
    await connectDb();
    await Todo.create({ title, description });
    return NextResponse.json({ message: "Todo created" }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}

// export async function DELETE(req) {
//   try {
//     const id = request.searchParams.get("id");
//     await connectDb();
//     await Todo.findByIdAndDelete(id);
//     return NextResponse.json({ message: "Todo deleted" });
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function DELETE(request) {
//   const id = request.searchParams.get("id");
//   console.log(id);
//   await connectMongoDB();
//   await Todo.findByIdAndDelete(id);
//   return NextResponse.json({ message: "Todo deleted" }, { status: 200 });
// }
