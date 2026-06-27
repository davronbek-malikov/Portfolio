import { auth } from "./auth";

export const proxy = auth;

export const config = {
  matcher: ["/api/cards/:path*"],
};
