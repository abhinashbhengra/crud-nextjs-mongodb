import connectDb from "@/lib/mongodb";
import Todo from "@/models/todo";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await connectDb();
    await Todo.findByIdAndDelete(id);
    return NextResponse.json({ message: "Todo deleted" });
  } catch (error) {
    console.log(error);
  }
  //   const { id } = headers;
  //   console.log("###", params);
}
