// src/components/ui/FlipCard/FlipCardContainer.tsx

import React from 'react';
import { FlipCard } from './index';
import PhaseCard from '../../../types/phaseCard';

interface FlipCardContainerProps {
  cards: PhaseCard[];
}

const FlipCardContainer: React.FC<FlipCardContainerProps> = ({ cards }) => {
  // Check the data right before mapping
  console.log('Final data before rendering:', cards);
  
  return (
    <>
      {cards.map(card => (
        <FlipCard
          key={card.id}
          mainHeading={card.acf.front_card_main_heading}
          subheading={card.acf.front_card_subheading}
          backCardTitle={card.acf.back_card_title}
          backCardButtonText={card.acf.back_card_button_text}
          // FIX: Use the direct URL from the console log to bypass caching
          iconUrl={'https://bskfporucm.wpdns.site/wp-content/uploads/2025/10/palette.png'}
          iconAlt={card.acf.front_card_icon_alt}
          bulletPoints={card.acf.back_card_bullet_points || []}
          frontCardDescription={card.acf.front_card_description}
        />
      ))}
    </>
  );
};

export default FlipCardContainer;