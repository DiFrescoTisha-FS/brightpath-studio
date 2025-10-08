// src/utils/fetcher.ts

import { isPhaseCardArray } from './TypeGuard';

export const fetcher = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  if (isPhaseCardArray(data)) {
    return data as T;
  } else {
    throw new Error('Fetched data does not match the expected type.');
  }
};