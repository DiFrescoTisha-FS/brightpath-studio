import React from 'react';
import './FlipCard.css';

interface FlipCardProps {
  mainHeading: string;
  subheading: string;
  backCardTitle: string;
  backCardButtonText: string;
  iconUrl: string;
  iconAlt: string;
  bulletPoints: string[];
}

const FlipCard: React.FC<FlipCardProps> = ({
  mainHeading,
  subheading,
  backCardTitle,
  backCardButtonText,
  iconUrl,
  iconAlt,
  bulletPoints,
}) => {
  return (
    <div className="flip-card-container w-full h-80 perspective">
      {/*
        The flip-card wrapper handles the 3D transformation
        - group: Tailwind's way to handle parent hover states
        - relative: Positions children absolutely within this container
        - preserve-3d: Maintains 3D space for child elements
      */}
      <div className="flip-card relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">

        {/* FRONT SIDE OF CARD */}
        <div className="flip-card-front absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-8 flex flex-col items-center justify-center text-white">
          {/* Icon */}
          <div className="mb-6">
            <img
              src={iconUrl}
              alt={iconAlt}
              className="w-16 h-16 object-contain filter brightness-0 invert"
            />
          </div>

          {/* Main Heading (e.g., "Phase 1") */}
          <h3 className="text-3xl font-bold mb-2">
            {mainHeading}
          </h3>

          {/* Subheading (e.g., "Research & Planning") */}
          <p className="text-lg text-blue-100 text-center">
            {subheading}
          </p>
        </div>

        {/* BACK SIDE OF CARD */}
{/* BACK SIDE OF CARD */}
<div className="flip-card-back absolute w-full h-full backface-hidden bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl shadow-lg p-8 flex flex-col justify-center text-black rotate-y-180">
  <h3 className="text-xl font-bold text-center mb-4">{backCardTitle}</h3>
  {/* Display the bullet points as an unordered list */}
  <ul className="space-y-3 list-disc list-inside">
    {bulletPoints.map((point, index) => (
      <li key={index} className="text-sm leading-relaxed">{point}</li>
    ))}
  </ul>
  <div className="mt-8 text-center">
    <button className="bg-white text-black font-bold py-2 px-6 rounded-full transition-all duration-300 ease-in-out hover:bg-slate-200">
      {backCardButtonText}
    </button>
  </div>
</div>
      </div>
    </div>
  );
};

export default FlipCard;

/**
 * EDUCATIONAL NOTES ON THE FLIP ANIMATION:
 *
 * The 3D flip effect is achieved through several CSS techniques:
 *
 * 1. Perspective: Creates a 3D space (defined in the custom CSS)
 * 2. transform-style-3d: Preserves 3D transformations for child elements
 * 3. backface-hidden: Hides the back of elements when rotated
 * 4. rotate-y-180: Rotates the element 180 degrees on the Y axis
 *
 * The flow:
 * - Initially, the front face is visible (rotate-y-0)
 * - The back face is rotated 180° and hidden due to backface-hidden
 * - On hover, the parent rotates 180°
 * - Now the back face appears front-facing, and the front face is hidden
 *
 * This creates a smooth, realistic card flip animation!
 */
