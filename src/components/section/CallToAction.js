import React from 'react';
import Button from '@/components/ui/Button';

function CallToAction({
  title = (
    <>
      Ready to <span className="text-[#6391F4]">Transform Your Business</span> <br className="hidden sm:block" />
      with <span className="text-[#B8759E]">Next-Gen Technology</span>?
    </>
  ),
  description = "Join 500+ companies that trust ELYSYAL to deliver innovative AI, blockchain, and custom software solutions. Lets build the future together.",
  primaryBtnText = "Start Your Project",
  primaryBtnLink = "#",
  secondaryBtnText = "Book a Demo",
  secondaryBtnLink = "#",
  style = {}
}) {
  return (
    <section className="bg-white py-20 lg:py-32 overflow-hidden" style={style}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Headline */}
        <h2 className="font-bold text-gray-900 text-4xl sm:text-5xl lg:text-5xl leading-tight mb-6 tracking-tight">
          {title}
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-lg sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          
          <Button 
            text={primaryBtnText} 
            href={primaryBtnLink} 
            variant="primary" 
            className="w-full sm:w-auto justify-center"
          />

          <Button 
            text={secondaryBtnText} 
            href={secondaryBtnLink} 
            variant="secondary" 
            className="w-full sm:w-auto justify-center"
          />

        </div>

        {/* Trust/Response Text */}
        <p className="text-gray-900 font-bold text-sm">
          Quick response within 24 hours
        </p>

      </div>
    </section>
  )
}

export default CallToAction;