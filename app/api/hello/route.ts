import { NextResponse } from 'next/server';

// This is a GET endpoint at /api/hello
export async function GET(request: Request) {
  return NextResponse.json({
    message: 'Hello from Next.js API!',
    timestamp: new Date().toISOString(),
    info: 'This endpoint is defined in app/api/hello/route.ts',
    tip: 'You can create POST, PUT, DELETE endpoints too!'
  });
}

// This is a POST endpoint at /api/hello
export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    message: 'Data received!',
    received: body,
    timestamp: new Date().toISOString()
  });
}
