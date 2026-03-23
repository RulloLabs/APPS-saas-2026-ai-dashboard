import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: NextRequest) {
    try {
          const { prompt } = await req.json();

      // AI Edge logic here
      console.log(`Processing prompt on the edge: ${prompt}`);

      return NextResponse.json({ 
                                     success: true, 
              insight: "This is an AI-generated insight from the edge.",
              timestamp: new Date().toISOString()
      });
    } catch (error) {
          return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({ status: "AI Edge endpoint active" });
}
