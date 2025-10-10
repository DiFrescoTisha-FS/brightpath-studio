// src/types/phaseCard.ts

export interface PhaseCard {
  id: number;
  acf: {
    front_card_main_heading: string;
    front_card_subheading: string;
    back_card_title: string;
    back_card_button_text: string;
    // FIX: This field name was likely incorrect, so we corrected it to match the console log
    front_card_icon: string;
    back_card_bullet_points: string[];
    front_card_description: string;
    // FIX: This field name was also likely incorrect
    front_card_icon_alt: string;
  };
}