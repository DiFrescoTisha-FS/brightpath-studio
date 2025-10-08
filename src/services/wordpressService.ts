// src/services/wordpressService.ts
import { WORDPRESS_API_URL } from '../config/api'; // Assuming you have a config file

// Mentorship:
// This is our data contract. By using TypeScript interfaces, we define the exact structure
// of the data we expect from the WordPress API. This prevents common bugs where a field
// name is mistyped or missing. It's a best practice for maintainable code.
export interface FlipCardDetails {
  subheading: string;
  main_heading: string;
  back_card_title: string;
  back_card_button_text: string;
  bullet_points: { point_text: string }[];
  icon: {
    url: string;
    alt: string;
  };
}

export interface ProcessPhase {
  id: number;
  title: {
    rendered: string;
  };
  acf: FlipCardDetails;
}

// Mentorship:
// This function fetches our custom post type. Notice how the URL uses 'phasecard' as the slug.
// This is because we identified "Phase Card" as the existing custom post type in the WordPress admin.
// We also use 'acf_format=standard' to get our custom fields in a clean object.
export async function fetchProcessPhases(): Promise<ProcessPhase[]> {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/phasecard?_embed&acf_format=standard`);

    if (!response.ok) {
      throw new Error(`WordPress API returned status ${response.status}`);
    }

    const data: ProcessPhase[] = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching process phases from WordPress:', error);
    return [];
  }
}