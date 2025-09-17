import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-midnight text-white">
      {/* Header Section */}
      <div className="text-center pt-16 pb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-4">
          Contact Us
        </h1>
        <p className="text-lg font-lato text-stone max-w-2xl mx-auto">
          Ready to illuminate your digital presence? Let's start a conversation about bringing your vision to life.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="bg-midnight/50 p-8 rounded-lg border border-stone/20">
              <h2 className="text-2xl font-poppins font-semibold text-gold mb-6">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                {/* Business Name */}
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 mt-1 flex-shrink-0">
                    <div className="w-full h-full bg-gold rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-white text-lg">
                      BrightPath Web Studio, LLC
                    </h3>
                    <p className="font-lato text-stone">
                      Your beacon in the digital landscape
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-poppins font-semibold text-white mb-1">
                      Address
                    </h3>
                    <p className="font-lato text-stone">
                      129 Maybin Rd.<br />
                      Zirconia, NC 28790
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-poppins font-semibold text-white mb-1">
                      Phone
                    </h3>
                    <p className="font-lato text-stone">
                      (704) 453-3973
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-poppins font-semibold text-white mb-1">
                      Email
                    </h3>
                    <p className="font-lato text-stone">
                      tishdifresco@brightpathstudio.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Box */}
            <div className="bg-gold/10 p-6 rounded-lg border border-gold/20">
              <h3 className="font-poppins font-semibold text-gold mb-3">
                Why Choose BrightPath?
              </h3>
              <p className="font-lato text-stone text-sm leading-relaxed">
                We're not just another web agency. We're your strategic partner in navigating the digital landscape, 
                providing clear direction and brilliant solutions that help your business shine bright online.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-midnight/50 p-8 rounded-lg border border-stone/20">
            <h2 className="text-2xl font-poppins font-semibold text-gold mb-6">
              Send Us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block font-lato font-semibold text-white mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-midnight border border-stone/30 rounded-lg text-white font-lato placeholder-stone/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block font-lato font-semibold text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-midnight border border-stone/30 rounded-lg text-white font-lato placeholder-stone/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-lato font-semibold text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-midnight border border-stone/30 rounded-lg text-white font-lato placeholder-stone/60 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-vertical"
                  placeholder="Tell us about your project and how we can help illuminate your path to success..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gold text-midnight font-lato font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>

            {/* Form Footer */}
            <div className="mt-6 pt-6 border-t border-stone/20">
              <p className="text-stone font-lato text-sm text-center">
                We typically respond within 24 hours. Let's start building something brilliant together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;