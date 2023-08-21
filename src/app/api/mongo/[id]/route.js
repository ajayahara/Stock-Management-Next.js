import { MongoClient, ObjectId } from "mongodb";
import { NextResponse } from "next/server";

const uri = "mongodb+srv://abak00350:qZDcgITY1FgUZTQa@cluster0.ku7xlmy.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri);
export async function GET(req,{params}) {
  try {
    const db = client.db("stocks");
    const collection = db.collection("cloth");
    const clothe = await collection.findOne({_id:new ObjectId(params.id)})
    return NextResponse.json(clothe)
  } catch (err) {
    console.log(err)
  }
}
export async function PATCH(req,{params}) {
  const body=await req.json();
  try {
    const db = client.db("stocks");
    const collection = db.collection("cloth");
    const clothe = await collection.updateOne({_id:new ObjectId(params.id)},{$set:body})
    return NextResponse.json(clothe)
  } catch (err) {
    console.log(err)
  }
}
export async function DELETE(req,{params}) {
  try {
    const db = client.db("stocks");
    const collection = db.collection("cloth");
    const clothe = await collection.findOneAndDelete({_id:new ObjectId(params.id)})
    return NextResponse.json(clothe)
  } catch (err) {
    console.log(err)
  }
}