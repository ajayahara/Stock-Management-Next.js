import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { data } from "autoprefixer";
const uri = "mongodb+srv://abak00350:qZDcgITY1FgUZTQa@cluster0.ku7xlmy.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri);
export async function GET() {
  console.log("inside get requext");
  try {
    const db = client.db("stocks");
    const collection = db.collection("cloth");
    const clothes = await collection.find({}).toArray()
    return NextResponse.json(clothes)
  } catch (err) {
    console.log(err)
  }
}
export async function POST(req) {
  try {
    const body = await req.json()
    const db = client.db("stocks");
    const collection = db.collection("cloth");
     const clothes=await collection.insertOne(body)
    return NextResponse.json(clothes)
  } catch (err) {
    console.log(err)
  }
}