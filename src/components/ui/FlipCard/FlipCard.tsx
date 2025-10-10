// src/components/ui/FlipCard/FlipCard.tsx

import React from 'react';
import './FlipCard.css';

interface FlipCardProps {
  mainHeading: string;
  subheading: string;
  backCardTitle: string;
  backCardButtonText: string;
  iconUrl: string;
  iconAlt: string;
  bulletPoints: any[];
  frontCardDescription: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  mainHeading,
  subheading,
  backCardTitle,
  backCardButtonText,
  iconUrl,
  iconAlt,
  bulletPoints,
  frontCardDescription,
}) => {
  // Add this line to see the data
  console.log('FlipCard props received:', { mainHeading, subheading, iconUrl, iconAlt });

  return (
    <div className="flip-card-container w-64 h-[28rem] perspective mx-auto">
      <div className="flip-card relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">

        {/* FRONT SIDE OF CARD */}
        <div className="flip-card-front absolute w-full h-full backface-hidden rounded-xl shadow-lg p-8 flex flex-col items-center justify-center text-white bg-[linear-gradient(to_right,#243B55,#141E30)]">
          {/* Icon */}
          <div className="mb-6">
            <img
              src={iconUrl}
              alt={iconAlt}
              className="w-16 h-16 object-contain"
            />
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-2 text-white">
              {mainHeading}
            </h3>
            <p className="text-lg text-blue-100 text-center">
              {subheading}
            </p>
            {frontCardDescription && (
              <p className="mt-2 text-sm text-gray-200 text-center">{frontCardDescription}</p>
            )}
          </div>
        </div>

        {/* BACK SIDE OF CARD */}
        <div className="flip-card-back absolute w-full h-full backface-hidden bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl shadow-lg p-8 flex flex-col justify-center text-black rotate-y-180">
          <h3 className="text-xl font-bold text-center mb-4 text-black">
            {backCardTitle}
          </h3>
          <ul className="space-y-3 list-disc list-inside text-black">
            {bulletPoints.map((point, index) => (
              <li key={index} className="text-sm leading-relaxed">{point.list_item_text}</li>
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