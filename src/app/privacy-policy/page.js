import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy - ELYSYAL",
  description: "Privacy Policy for ELYSYAL services and website.",
};

export default function PrivacyPolicyPage() {
  const sections = [
    { title: "Overview", id: "overview" },
    { title: "Information Handling", id: "information-handling" },
    { title: "Use of Website Technologies", id: "use-of-website-technologies" },
    { title: "Third-Party Links", id: "third-party-links" },
    { title: "Information Security", id: "information-security" },
    { title: "Policy Updates", id: "policy-updates" },
    { title: "Contact Information", id: "contact-information" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow container mx-auto px-8 md:px-12 py-36 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">

          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-16">

            {/* Page Title */}
            <h1 className="text-5xl md:text-6xl font-bold mb-16">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500">
                Privacy Policy
              </span>
            </h1>

            {/* Sections */}
            <div className="space-y-12">

              <section id="overview" className="scroll-mt-32">
                <div className="flex gap-4">
                  <div className="w-1.5 bg-pink-200 h-8 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-medium mb-4">Overview</h2>
                    <p className="text-black leading-relaxed text-lg">
                      The ELYSYAL website is intended to provide general information about our services,
                      capabilities, and business offerings. Visitors may browse the site without providing
                      personal information.
                    </p>
                  </div>
                </div>
              </section>

              <section id="information-handling" className="scroll-mt-32">
                <div className="flex gap-4">
                  <div className="w-1.5 bg-pink-200 h-8 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-medium mb-4">Information Handling</h2>
                    <p className="text-black leading-relaxed text-lg">
                      Any information voluntarily shared with ELYSYAL through direct communication channels
                      (such as email or business inquiries) is used solely for professional correspondence,
                      service discussions, or responding to requests. Such information is not used for unsolicited
                      communication.
                    </p>
                  </div>
                </div>
              </section>

              <section id="use-of-website-technologies" className="scroll-mt-32">
                <div className="flex gap-4">
                  <div className="w-1.5 bg-pink-200 h-8 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-medium mb-4">Use of Website Technologies</h2>
                    <p className="text-black leading-relaxed text-lg">
                      The website may use basic technical mechanisms necessary for secure and reliable
                      operation. These are used only to ensure proper functionality and performance of the
                      site.
                    </p>
                  </div>
                </div>
              </section>

              <section id="third-party-links" className="scroll-mt-32">
                <div className="flex gap-4">
                  <div className="w-1.5 bg-pink-200 h-8 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-medium mb-4">Third-Party Links</h2>
                    <p className="text-black leading-relaxed text-lg">
                      Our website may include links to third-party websites for reference or convenience.
                      ELYSYAL does not control and is not responsible for the content, security, or privacy
                      practices of external sites.
                    </p>
                  </div>
                </div>
              </section>

              <section id="information-security" className="scroll-mt-32">
                <div className="flex gap-4">
                  <div className="w-1.5 bg-pink-200 h-8 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-medium mb-4">Information Security</h2>
                    <p className="text-black leading-relaxed text-lg">
                      We take reasonable measures to ensure that any information shared with us through
                      legitimate business communication is handled responsibly and protected against
                      unauthorized access.
                    </p>
                  </div>
                </div>
              </section>

              <section id="policy-updates" className="scroll-mt-32">
                <div className="flex gap-4">
                  <div className="w-1.5 bg-pink-200 h-8 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-medium mb-4">Policy Updates</h2>
                    <p className="text-black leading-relaxed text-lg">
                      This Privacy Policy may be updated periodically to reflect changes in legal requirements
                      or business practices. Updates will be reflected on this page with a revised effective date.
                    </p>
                  </div>
                </div>
              </section>

              <section id="contact-information" className="scroll-mt-32">
                <div className="flex gap-4">
                  <div className="w-1.5 bg-pink-200 h-8 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-medium mb-4">Contact Information</h2>
                    <p className="text-black leading-relaxed text-lg mb-2">
                      For questions or concerns related to privacy, please contact:
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
                          className="text-black hover:text-blue-600 transition-colors block text-base"
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
