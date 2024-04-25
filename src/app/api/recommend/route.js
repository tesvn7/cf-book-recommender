import {NextResponse}  from "next/server";


export async function GET(req) {
  return NextResponse.json({ message: "welcome to our api endpoint." }, { status: 200 });
}