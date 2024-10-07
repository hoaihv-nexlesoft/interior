import { NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-decode';

export async function middleware(req: any) {
  const token = req.cookies.get('token');
  const user = req.cookies.get('user_data');
 
  if (!token || !user) {
    return redirectToLogin(req);
  }

  try {
    const decoded: any = jwtDecode(token?.value);

    console.log("Cookie user_data:", user);
    console.log("Decoded userId:", decoded?.userId);
    
    if (Number(user?.value) === Number(decoded?.userId)) {
      return NextResponse.next();
    } else {
      return redirectToLogin(req);
    }
  } catch (error) {
    return redirectToLogin(req);
  }
}

function redirectToLogin(req: any) {
  const loginUrl = new URL('/login', req.url);
  loginUrl.searchParams.set('redirect', req.nextUrl.pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ['/admin'],
};
