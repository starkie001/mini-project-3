import { NextResponse } from 'next/server';
import GeminiController from '../../../lib/controllers/geminiController';
import { handleApiError } from '../../../lib/middleware/errorHandler';

const controller = new GeminiController();

export async function POST(request) {
  try {
    const body = await request.json();
    const result = await controller.generateContent(body.prompt);
    return NextResponse.json({ content: result });
  } catch (error) {
     return handleApiError(error);
  }
}