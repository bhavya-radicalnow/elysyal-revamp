import { stories } from "../../../components/data/stories";
import { notFound } from "next/navigation";
import CallToAction from "@/components/section/CallToAction";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const story = stories[slug];

  if (!story) {
    return { title: 'Story Not Found | ELYSYAL' };
  }

  return {
    title: `${story.title} | ELYSYAL Success Stories`,
    description: story.description,
    openGraph: {
      title: story.title,
      description: story.description,
      type: 'article',
      url: `https://elysyal.com/success-stories/${slug}`,
      // images: [{ url: `/projects/${slug}/og-image.webp` }], // Uncomment when you have images
    },
    twitter: {
      card: 'summary_large_image',
      title: story.title,
      description: story.description,
    }
  };
}

// params is an object containing the dynamic route segments
export default function StoryPage({ params }) {
  const { slug } = params;
  const story = stories[slug];

  // If the slug doesn't exist in our data object, trigger Next.js 404
  if (!story) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": story.title,
    "description": story.description,
    "author": {
      "@type": "Organization",
      "name": "ELYSYAL"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ELYSYAL",
      "logo": {
        "@type": "ImageObject",
        "url": "https://elysyal.com/logo.webp"
      }
    },
    "keywords": story.techStack.join(", "),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://elysyal.com/success-stories/${slug}`
    }
  };



  return (
    <main className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#FAFAFA] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
            {story.badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#111827] mt-6 mb-8 max-w-4xl leading-tight">
            {story.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            {story.description}
          </p>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="-mt-10 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {story.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-gray-100 flex flex-col items-center text-center"
              >
                <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">
                  {metric.label}
                </p>
                <h2 className="text-5xl font-black text-black">
                  {metric.value}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Content */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Story Text */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg prose-slate max-w-none">
                {story.content.map((paragraph, index) => (
                  <p key={index} className="text-black text-lg md:text-xl leading-[1.8] font-medium mb-10 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Sidebar Stats */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-black rounded-[2.5rem] p-10 text-white">
                  <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-2 h-8 bg-blue-500 rounded-full inline-block" />
                    Core Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {story.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-xl text-sm font-semibold border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-10 rounded-[2.5rem] border-2 border-dashed border-gray-200">
                  <h4 className="font-bold text-black mb-4">Want to see the architecture?</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    We can walk you through the specific distributed patterns we used for this project during a demo.
                  </p>
                  <Link
                    href="https://calendly.com/bhavya-elysyal/30min"
                    target="_blank"
                    className="text-blue-600 font-bold text-sm hover:underline inline-block"
                  >
                    Book a Technical Deep-Dive →
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CallToAction
        title="Your Business, Our Engineering."
        description="Every project is a partnership. Let's discuss how we can solve your unique technical challenges."
        primaryButton={{ text: "Start Your Project", href: "#" }}
        secondaryButton={{ text: "Book Demo", href: "#" }}
      />
    </main>
  );
}