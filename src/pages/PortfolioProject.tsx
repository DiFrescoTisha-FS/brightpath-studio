import React from 'react';
import useTheme from '../hooks/useTheme'; // <--- 🌟 FIX: Import the theme hook 🌟

/**
 * PortfolioProject Component
 * Renders the detailed page for a single portfolio case study, based on a Divi-inspired layout.
 */
const PortfolioProject: React.FC = () => {
  
  // 🌟 FIX: Call the theme hook internally to access the 'theme' state 🌟
  const { theme } = useTheme(); 
    
  // Mentorship Note: Define static content here. For a real site, this content (Title, Goal, etc.) 
  // would typically be loaded via an API endpoint or Headless CMS (like WordPress/ACF Pro per the ASK project).
  const projectData = {
    title: 'Organic Flower Farm Website Design',
    headerText: 'Curabitur non bibendum ligula. In non pulvinar purus. Curabitur nisi odio, blandit et elit at, suscipit pharetra elit. Fusce ut mauris quam. Quisque lacinia quam eu commodo mollis. Praesent nisl massa, ultrices vitae ornare sit amet, ultricies eget orci. Sed vitae nulla et justo pellentesque congue nec eu risus. Morbi ac feugiat ante.',
    liveUrl: '#', 
    
    // Key Sections Data
    goals: {
        heading: 'Goal',
        text: 'Et massa a, sem lacus, tincidunt porta. Nisl velit ac sit volutpat nunc non nec. Odio leo eu, suspendisse orci, est amet pellentesque massa. Id velit hac tortor quis cras faucibus tristique in orci. Diam quam nisi morbi ullamcorper sodales libero aliquam, nunc.'
    },
    approach: {
        heading: 'Approach',
        text: 'Tortor rhoncus in lacus tempor libero vitae vitae. Volutpat vehicula enim nunc, feugiat. Non placerat a amet in fusce purus id nisl viverra. At tempus magna sed nibh id diam nisi, dignissim facilisi. Elementum mollis amet, mollis vitae facilisis commodo quam. Sit dui quisque elit purus laoreet.'
    },
    results: {
        heading: 'Results',
        text: 'Suspendisse sagittis lorem accumsan convallis pharetra. Praesent ex ante, placerat quis purus a, tempor consectetur lorem. Integer accumsan pharetra orci nec tempor. Quisque mollis vel enim a facilisis. Aliquam ornare nunc nibh, sit amet porta diam pretium in. Cras et velit faucibus, dignissim tellus at.'
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      {/* 1. Website Design Header Section (Screenshot 2.44.11 PM) */}
      <section className="container mx-auto px-8 pt-20 pb-16 max-w-6xl">
        
        {/* H1 with Gradient Text on "Design" - Corrected to use theme variable */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-24 font-poppins">
          Website <span 
              // Uses the correct contrasting gradient class based on the theme
              className={theme === 'dark' ? 'gradient-text-light' : 'gradient-text-dark'}
          >
              Design
          </span>
        </h1>
        
        <p className="text-xl leading-relaxed mb-10 font-lato max-w-4xl">
          {projectData.headerText}
        </p>
        <a 
          href={projectData.liveUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-gray-900 text-white font-bold py-3 px-8 rounded-md text-base tracking-wider hover:bg-gray-700 transition-colors"
        >
          LIVE WEBSITE
        </a>
      </section>

      {/* 2. Main Visual Mockup (Placeholder for the layered image) */}
      <section className="py-10">
        <div className="container mx-auto">
            {/* Image of the complex layered website mockup */}
        </div>
      </section>

      {/* 3. Goal, Approach, Results Section (Screenshot 2.44.46 PM) */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-8 max-w-5xl space-y-12">
            
            {/* Goal Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <h2 className="text-xl font-bold font-poppins md:col-span-1">{projectData.goals.heading}</h2>
                <p className="font-lato leading-relaxed md:col-span-3">{projectData.goals.text}</p>
            </div>

            {/* Separator */}
            <hr className="border-gray-200" />

            {/* Approach Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <h2 className="text-xl font-bold font-poppins md:col-span-1">{projectData.approach.heading}</h2>
                <p className="font-lato leading-relaxed md:col-span-3">{projectData.approach.text}</p>
            </div>

            {/* Separator */}
            <hr className="border-gray-200" />

            {/* Results Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <h2 className="text-xl font-bold font-poppins md:col-span-1">{projectData.results.heading}</h2>
                <p className="font-lato leading-relaxed md:col-span-3">{projectData.results.text}</p>
            </div>
        </div>
      </section>

      {/* 4. Arched Image Gallery Section (Screenshot 2.45.01 PM) */}
      <section className="py-20">
        <div className="container mx-auto px-8 max-w-6xl">
            {/* Placeholder Text above the gallery */}
            <p className="text-lg font-lato leading-relaxed text-center mb-16">
                Etiam quis blandit erat. Donec laoreet libero non metus volutpat consequat in vel metus. Sed non augue id
            </p>
            
            {/* Gallery Grid: Assuming a responsive 3-column layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Gallery Item 1 */}
                <div className="text-center">
                    {/* Placeholder for the arched image. */}
                    <div className="overflow-hidden mb-4">
                        <img 
                            src="/images/placeholder_plant_holder.jpg" 
                            alt="Air Plant Holder" 
                            className="w-full object-cover rounded-t-full shadow-lg"
                        />
                    </div>
                    <p className="font-poppins font-semibold">Air Plant Holder</p>
                    <p className="text-sm text-gray-500">$16.00</p>
                </div>

                {/* Gallery Item 2 */}
                <div className="text-center">
                    <div className="overflow-hidden mb-4">
                        <img 
                            src="/images/placeholder_animal_pillow.jpg" 
                            alt="Animal Pillow" 
                            className="w-full object-cover rounded-t-full shadow-lg"
                        />
                    </div>
                    <p className="font-poppins font-semibold">Animal Pillow</p>
                    <p className="text-sm text-gray-500">$28.00</p>
                </div>

                {/* Gallery Item 3 */}
                <div className="text-center">
                    <div className="overflow-hidden mb-4">
                        <img 
                            src="/images/placeholder_bookshelf.jpg" 
                            alt="Book Shelf" 
                            className="w-full object-cover rounded-t-full shadow-lg"
                        />
                    </div>
                    <p className="font-poppins font-semibold">Book Shelf</p>
                    <p className="text-sm text-gray-500">$99.00</p>
                </div>
            </div>
        </div>
      </section>

      {/* 5. Full Width Image Section (Screenshot 2.45.15 PM) */}
      <section className="bg-gray-900 py-20">
          <div className="container mx-auto px-8 max-w-6xl">
            <p className="text-lg font-lato leading-relaxed text-white text-center mb-10">
                Etiam quis blandit erat. Donec laoreet libero non metus volutpat consequat in vel metus. Sed non augue id
            </p>
            {/* Full-width image placeholder */}
            <div className="max-w-full overflow-hidden">
                <img 
                    src="/images/placeholder_orange_flowers.jpg" 
                    alt="Orange Flowers" 
                    className="w-full h-auto object-cover"
                />
            </div>
            <p className="text-lg font-lato leading-relaxed text-white text-center mt-10">
                Etiam quis blandit erat. Donec laoreet libero non metus volutpat consequat in vel metus. Sed non augue id
            </p>
          </div>
      </section>
    </div>
  );
};

export default PortfolioProject;