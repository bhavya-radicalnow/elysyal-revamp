import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Terms of Service - ELYSYAL",
  description: "Terms of Service for using the ELYSYAL website.",
};

export default function TermsOfServicePage() {
  const sections = [
    { title: "Acceptance of Terms", id: "acceptance-of-terms" },
    { title: "Website Use", id: "website-use" },
    { title: "Services & Engagement", id: "services-engagement" },
    { title: "Intellectual Property", id: "intellectual-property" },
    { title: "Limitation of Liability", id: "limitation-of-liability" },
    { title: "Modifications", id: "modifications" },
    { title: "Governing Law", id: "governing-law" },
    { title: "Contact Information", id: "contact-information" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow container mx-auto px-8 md:px-12 py-48 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Page Title */}
            <h1 className="text-5xl md:text-6xl font-bold mb-16">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500">
                Terms of Service
              </span>
            </h1>

            {/* Sections */}
            <div className="space-y-12">
              
              <section id="acceptance-of-terms" className="scroll-mt-32">
                <div className="flex gap-4">
                  <div className="w-1.5 bg-pink-200 h-8 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-medium mb-4">Acceptance of Terms</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      By accessing or using this website, you agree to comply with these Terms. If you do not
                      agree, please discontinue use of the site.
                    </p>
                  </div>
                </div>
              </section>

              <section id="website-use" className="scroll-mt-32">
                <div className="flex gap-4">
                  <div className="w-1.5 bg-pink-200 h-8 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-medium mb-4">Website Use</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      The website is provided for informational purposes only. Content on this site does not
                      constitute professional, technical, or legal advice, nor does it represent a binding offer of
                      services.
                    </p>
                  </div>
                </div>
              </section>

              <section id="services-engagement" className="scroll-mt-32">
                <div className="flex gap-4">
                  <div className="w-1.5 bg-pink-200 h-8 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-medium mb-4">Services & Engagement</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      All services offered by ELYSYAL—including AI, blockchain, and custom software
                      development—are delivered only under a separate written agreement. Website content is
                      illustrative and subject to change.
                    </p>
                  </div>
                </div>
              </section>

              <section id="intellectual-property" className="scroll-mt-32">
                <div className="flex gap-4">
                  <div className="w-1.5 bg-pink-200 h-8 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-medium mb-4">Intellectual Property</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      All materials displayed on this website, including text, graphics, logos, and design
                      elements, are the intellectual property of ELYSYAL unless otherwise stated. Unauthorized
                      use, reproduction, or distribution is prohibited.
                    </p>
                  </div>
                </div>
              </section>

              <section id="limitation-of-liability" className="scroll-mt-32">
                <div className="flex gap-4">
                  <div className="w-1.5 bg-pink-200 h-8 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-medium mb-4">Limitation of Liability</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      ELYSYAL shall not be liable for any loss or damage arising from reliance on information
                      presented on this website or from its use. The website is provided "as is" without
                      warranties of any kind.
                    </p>
                  </div>
                </div>
              </section>

              <section id="modifications" className="scroll-mt-32">
                <div className="flex gap-4">
                  <div className="w-1.5 bg-pink-200 h-8 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-medium mb-4">Modifications</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      We reserve the right to modify or discontinue any part of the website or these Terms at
                      any time without prior notice. Continued use constitutes acceptance of updated terms.
                    </p>
                  </div>
                </div>
              </section>

              <section id="governing-law" className="scroll-mt-32">
                <div className="flex gap-4">
                  <div className="w-1.5 bg-pink-200 h-8 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-medium mb-4">Governing Law</h2>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      These Terms are governed by applicable local laws. Any disputes arising from use of the
                      website shall be subject to the jurisdiction of the appropriate courts.
                    </p>
                  </div>
                </div>
              </section>

              <section id="contact-information" className="scroll-mt-32">
                <div className="flex gap-4">
                  <div className="w-1.5 bg-pink-200 h-8 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-medium mb-4">Contact Us</h2>
                    <p className="text-gray-600 leading-relaxed text-lg mb-2">
                       For questions regarding these Terms, contact:
                    </p>
                    <a href="mailto:hello@elysyal.com" className="text-lg font-medium hover:text-blue-600 transition-colors">
                      hello@elysyal.com
                    </a>
                  </div>
                </div>
              </section>

            </div>
          </div>

          {/* Sidebar / Table of Contents */}
          <div className="lg:col-span-4 relative hidden lg:block">
            <div className="sticky top-32">
              <div className="bg-[#F8F9FF] p-8 rounded-lg mb-12">
                <h3 className="text-xl font-bold mb-6">Table of contents</h3>
                <nav>
                  <ul className="space-y-4">
                    {sections.map((section, index) => (
                      <li key={section.id}>
                        <a 
                          href={`#${section.id}`}
                          className="text-gray-800 hover:text-blue-600 transition-colors block text-base"
                        >
                          {index + 1}. {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
