import { NextResponse } from 'next/server';

const PRIMARY_HOST = 'hotellanghemonferrato.com';
const LEGACY_HOSTS = new Set([
  'hotel-langhe-monferrato.vercel.app',
  'www.hotel-langhe-monferrato.vercel.app',
]);

export function middleware(request) {
  const host = request.headers.get('host')?.toLowerCase();

  if (host && LEGACY_HOSTS.has(host)) {
    const url = request.nextUrl.clone();
    url.protocol = 'https:';
    url.host = PRIMARY_HOST;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
