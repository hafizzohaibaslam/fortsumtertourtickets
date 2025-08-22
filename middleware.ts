import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ONE_YEAR = 31536000;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Favicon files that should be cached
  const faviconFiles = [
    "/favicon.ico",
    "/favicon-48x48.png",
    "/favicon-96x96.png",
    "/favicon.svg",
    "/apple-touch-icon.png",
    "/web-app-manifest-192x192.png",
    "/web-app-manifest-512x512.png",
    "/site.webmanifest",
  ];

  // Check if the request is for a favicon file
  if (faviconFiles.includes(pathname)) {
    const response = NextResponse.next();

    // Set caching headers for favicon files
    response.headers.set(
      "Cache-Control",
      `public, max-age=${ONE_YEAR}, immutable`
    );
    response.headers.set("ETag", 'W/"favicon-v1"');

    // Set content type for web manifest
    if (pathname === "/site.webmanifest") {
      response.headers.set("Content-Type", "application/manifest+json");
    }

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/favicon.ico",
    "/favicon-48x48.png",
    "/favicon-96x96.png",
    "/favicon.svg",
    "/apple-touch-icon.png",
    "/web-app-manifest-192x192.png",
    "/web-app-manifest-512x512.png",
    "/site.webmanifest",
  ],
};
