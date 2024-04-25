import {NextResponse}  from "next/server";

export async function GET(_, res) {
  try {
    const book_name = res.params.book;
    const apiUrl = process.env.API_URL
    const apiQuery = apiUrl + "/recommend/?book_name=" + book_name;
    const response = await fetch(apiQuery, { method: "POST" });
    if (!response.ok) {
      // throw an error if response status is not ok
      return NextResponse.json({ message:response.statusText }, {status: 400,});
    }
    const data = await response.json();
    return NextResponse.json(data, { status: 200});

  } catch (error) {
    // return error response
    return NextResponse.json({ message: error.message },{status: 500});
  }
}