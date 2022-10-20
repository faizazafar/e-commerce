import { NextResponse } from "next/server";

export async function middleware(req: any){
    const res = await (await fetch("https://fakestoreapi.com/products")).json()
    // console.log("Middleware" , req.nextUrl)
    return  NextResponse.next(res)
    console.log("Middleware" , req.nextUrl)
}

export const config={
    matcher :["/" ]
}