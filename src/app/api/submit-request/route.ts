// For Next.js 13+ with App Router
import { NextResponse } from 'next/server';

let requests: any[] = []; // In-memory storage, replace with DB in production

export async function POST(req: Request) {
  const body = await req.json();
  requests.push(body);
  return NextResponse.json({ message: 'Request submitted', data: body });
}

export async function GET() {
  return NextResponse.json({ requests });
}
