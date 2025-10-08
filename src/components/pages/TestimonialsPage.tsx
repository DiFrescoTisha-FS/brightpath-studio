import ReviewsList from "../ui/ReviewsList";
import PhaseCards from "../ui/PhaseCards";

const TestimonialsPage = () => {
  return (
    <div className="relative min-h-screen">
      {/* The Parallax Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* The definitive fix: Use a positioned image tag for the background */}
        <img
          src="/images/parallax-bg.png"
          alt="Parallax Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* The semi-transparent overlay is on top of the image for readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* The Content Layer */}
      <div className="relative z-10">
        <div>
          <h1>Our Project Phases</h1>
          <p>Here's a breakdown of our step-by-step process.</p>
          <PhaseCards />
        </div>

        <div className="py-12">
          <ReviewsList />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
