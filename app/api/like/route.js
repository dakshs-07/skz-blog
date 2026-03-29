import { NextResponse } from "next/server";

export async function POST(req){
    const {id} = await req.json();
    const res = await fetch(`http://localhost:1337/api/blogs/${id}`, {
        method:"PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            data: {
                likes: {$increment: 1}
            }
        })
    })

    return NextResponse.json({success:true})
}