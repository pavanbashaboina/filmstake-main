import { NextResponse } from 'next/server';

export function middleware(request) {
    const token = request.cookies.get('tokenid'); // Get the authentication token from cookies
    const { pathname } = request.nextUrl;



    // If user is logged in and tries to access signin/signup, redirect to homepage or another route
    if (token && (pathname.startsWith('/signin'))) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next|static|favicon.ico).*)'],
};



