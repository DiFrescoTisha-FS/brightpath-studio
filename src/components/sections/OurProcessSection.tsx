import React, { useState, useEffect } from 'react';
import FlipCard from '../ui/FlipCard';
import { fetchProcessPhases, ProcessPhase } from '../../services/wordpressService';

const OurProcessSection: React.FC = () => {
  /**
   * React State Management:
   * - phases: Stores the array of ProcessPhase data from WordPress
   * - loading: Tracks whether we're currently fetching data
   * - error: Stores any error messages if the fetch fails
   */
  const [phases, setPhases] = useState<ProcessPhase[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * useEffect Hook:
   * Runs when the component first mounts (empty dependency array [])
   * This is where we fetch data from WordPress
   */
  useEffect(() => {
    const loadPhases = async () => {
      try {
        setLoading(true);
        const data = await fetchProcessPhases();
        setPhases(data);
        setError(null);
      } catch (err) {
        setError('Failed to load process phases. Please try again later.');
        console.error('Error loading phases:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPhases();
  }, []);

  /**
   * Render Loading State:
   * Shows a friendly loading message while data is being fetched
   */
  if (loading) {
    return (
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-slate-200 rounded w-1/3 mx-auto mb-4"></div>
            <div className="h-4 bg-slate-200 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  /**
   * Render Error State:
   * Displays an error message if something went wrong
   */
  if (error) {
    return (
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  /**
   * Main Render:
   * Displays the section title, description, and grid of flip cards
   */
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/*
          Responsive Grid Layout:
          - Mobile (default): Single column, everything stacks
          - Desktop (lg:): Two columns with gap
        */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

          {/* LEFT SIDE: Section Title and Description */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our Process
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We follow a proven methodology to transform your ideas into successful digital products.
              Each phase is designed to ensure quality, efficiency, and alignment with your goals.
            </p>
            <div className="mt-8 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 italic">
                Hover over each card to explore the details of our process.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Grid of Flip Cards */}
          <div className="lg:col-span-2">
            {phases.length === 0 ? (
              // Empty State: No phases found
              <div className="text-center py-12">
                <p className="text-slate-500">No process phases available yet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group">
                {phases.map((phase) => (
                  <div key={phase.id} className="group">
                    <FlipCard
                      mainHeading={phase.acf.main_heading}
                      subheading={phase.acf.subheading}
                      backCardTitle={phase.acf.back_card_title}
                      backCardButtonText={phase.acf.back_card_button_text} 
                      iconUrl={phase.acf.icon?.url || ''}
                      iconAlt={phase.acf.icon?.alt || phase.acf.subheading}
                      bulletPoints={phase.acf.bullet_points.map((point) => point.point_text)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcessSection;

/**
 * RESPONSIVE DESIGN BREAKDOWN:
 *
 * Mobile First (default):
 * - Single column layout
 * - Title and description appear first
 * - Cards stack vertically below
 * - Full width for easy touch interaction
 *
 * Tablet (md: 768px+):
 * - Cards display in 2-column grid
 * - Title still on top
 *
 * Desktop (lg: 1024px+):
 * - 3-column grid with 1 column for title, 2 for cards
 * - Side-by-side layout for better use of screen space
 * - Larger text sizes for improved readability
 *
 * This approach ensures a great experience on all devices!
 */
