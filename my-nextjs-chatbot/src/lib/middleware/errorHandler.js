import { NextResponse } from 'next/server';
import { AppError } from '../utils/errors.js';

export function handleApiError(err) {
  if (err instanceof AppError) {
    return NextResponse.json({ error: err.message }, { status: err.statusCode });
  } else {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}