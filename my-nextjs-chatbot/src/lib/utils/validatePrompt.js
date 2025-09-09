import { AppError } from './errors.js';

export function validatePrompt(prompt) {
  if (typeof prompt !== 'string' || prompt.trim().length === 0) {
    throw new AppError('Prompt cannot be null or blank.', 400);
  }

  if (prompt.length > 50) {
    throw new AppError('Prompt cannot exceed 50 characters.', 400);
  }
}