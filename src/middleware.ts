import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    if (pathname.startsWith("/api")) {
        console.log("From api request");
        //ini adalah wadah untuk
    }
    const response = NextResponse.next()
    console.log("APO");

    return response
}
export const config = {
    matcher: '/api/:path*',
}