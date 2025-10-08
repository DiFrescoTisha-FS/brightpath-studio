// src/hooks/useFetchPhaseCards.ts

import { useState, useEffect } from 'react';
import { fetcher } from '../utils/fetcher';

interface ListItem {
  list_item_text: string;
}

export interface PhaseCard {
  id: number;
  acf: {
    phase_number: string;
    blurb_title: string;
    card_content: string;
    list_items: ListItem[];
    background_image: string;
    hover_background_image: string;
    card_icon: string;
  };
}

export const useFetchPhaseCards = (url: string) => {
  const [data, setData] = useState<PhaseCard[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetcher<PhaseCard[]>(url);
        setData(fetchedData);
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};