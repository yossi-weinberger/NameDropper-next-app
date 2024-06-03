import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req });
  const isAuth = !!token;
  const loginUrl = new URL("/auth/login", req.url);

  if (req.nextUrl.pathname.startsWith("/new-category") && !isAuth) {
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/new-category"],
};

// export { default } from "next-auth/middleware";

// export const config = {
//   matcher: ["/new-category"],
// };
