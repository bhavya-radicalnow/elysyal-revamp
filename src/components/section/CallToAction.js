import React from 'react'

function CallToAction() {
  return (
    <section className="bg-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Headline */}
        <h2 className="font-bold text-gray-900 text-4xl sm:text-5xl lg:text-5xl leading-tight mb-6 tracking-tight">
          Ready to <span className="text-[#6391F4]">Transform Your Business</span> <br className="hidden sm:block" />
          with <span className="text-[#c084fc]">Next-Gen Technology</span>?
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-lg sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Join 500+ companies that trust ELYSYAL to deliver innovative AI, blockchain, 
          and custom software solutions. Lets build the future together.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          
          {/* Primary Button */}
          <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#6391F4] to-[#937DC0] text-white rounded-full text-base font-semibold hover:opacity-95 transition-all shadow-lg shadow-blue-500/25 w-full sm:w-auto">
            Start Your Project
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
            </svg>
          </button>

          {/* Secondary Button */}
          <button className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border border-gray-100/50 text-gray-700 rounded-full text-base font-medium hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md w-full sm:w-auto">
            Book a Demo
            <div className="w-6 h-6 rounded-full border border-blue-200 flex items-center justify-center">
                <svg className="w-3 h-3 text-blue-500 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
            </div>
          </button>
        </div>

        {/* Trust/Response Text */}
        <p className="text-gray-900 font-bold text-sm">
          Quick response within 24 hours
        </p>

      </div>
    </section>
  )
}

export default CallToAction