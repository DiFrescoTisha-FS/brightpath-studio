// src/components/ui/FlipCard/FlipCardContainer.tsx

import React from 'react';
import { FlipCard } from './index';
import { PhaseCard } from '../../../types/phaseCard';

interface FlipCardContainerProps {
  cards: PhaseCard[];
}

const FlipCardContainer: React.FC<FlipCardContainerProps> = ({ cards }) => {
  return (
    <>
      {cards.map(card => (
        <FlipCard
          key={card.id}
          mainHeading={card.acf.front_card_main_heading}
          subheading={card.acf.front_card_subheading}
          backCardTitle={card.acf.back_card_title}
          backCardButtonText={card.acf.back_card_button_text}
          // FIX: Pass the new prop to the component
          iconUrl={card.acf.front_card_icon}
          iconAlt={card.acf.front_card_icon_alt}
          bulletPoints={card.acf.back_card_bullet_points || []}
          frontCardDescription={card.acf.front_card_description}
        />
      ))}
    </>
  );
};

export default FlipCardContainer;