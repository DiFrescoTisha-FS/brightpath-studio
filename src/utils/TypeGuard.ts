// src/utils/TypeGuard.ts

/**
 * A type guard to check if a value is an array of PhaseCard objects.
 * This is a stricter, more robust way to ensure type safety.
 */
import { PhaseCard } from '../hooks/useFetchPhaseCards';

export function isPhaseCardArray(data: unknown): data is PhaseCard[] {
  // A simple check to ensure it's an array and has at least one element
  // with a valid 'acf' property. This prevents runtime errors.
  return Array.isArray(data) && data.length > 0 && 'acf' in data[0];
}