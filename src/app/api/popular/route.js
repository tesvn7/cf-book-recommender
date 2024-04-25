import {NextResponse}  from "next/server";

export async function GET() {
  try {
    const apiUrl = process.env.API_URL
    const apiQuery = apiUrl + "/popular";
    const response = await fetch(apiQuery, { method: "GET" });
    if (!response.ok) {
      // throw an error if response status is not 2xx
      return NextResponse.json({ message:response.statusText }, {status: 400,});
    }
    const data = await response.json();
    return NextResponse.json(data, { status: 200 });

  } catch (error) {
    // return error response
    return NextResponse.json({ message: error.message },{status: 500});
  }
}