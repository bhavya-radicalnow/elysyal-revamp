export const stories = {
  "healthcare-modernization": {
    badge: "Platform Modernization",
    title: "Healthcare Platform Modernization",
    description: "Modernized legacy healthcare systems to streamline patient workflows and security.",
    metrics: [
      { label: "Deployment Speed", value: "60% Faster" },
      { label: "Server Latency", value: "-400ms" },
      { label: "Compliance", value: "100%" }
    ],
    techStack: ["Golang", "PostgreSQL", "AWS Lambda", "Terraform"],
    content: [
      "The client operated a critical healthcare infrastructure that had grown incrementally over a decade. The resulting 'spaghetti' monolith was brittle, making it nearly impossible to implement new features without risking systemic downtime. In a sector where system availability is tied directly to patient outcomes, the high latency in data retrieval was no longer acceptable.",
      "The primary challenge was the state of the legacy database—a massive, over-indexed instance that caused frequent deadlocks. Additionally, the system had to be modernized without a single minute of service interruption, while simultaneously upgrading the security protocols to meet stringent new HIPAA and GDPR requirements for data at rest and in transit.",
      "We architected a phased migration to a Go-based microservices ecosystem on AWS. By implementing the 'Strangler Fig' pattern, we gradually replaced monolithic functions with high-performance services. We introduced AWS Lambda for event-driven processing and utilized Terraform to ensure the entire infrastructure was reproducible and auditable.",
      "The new system didn't just run faster; it was fundamentally more resilient. Deployment speed increased by 60% because teams could now deploy independent services without cross-service dependencies. With server latency dropping by 400ms, healthcare providers could access patient records in near real-time, significantly improving the quality of point-of-care decisions."
    ]
  },
  "fintech-app": {
    badge: "Product Engineering",
    title: "Fintech App Development",
    description: "Secure, high-performance mobile application for real-time transactions.",
    metrics: [
      { label: "Transaction Speed", value: "< 200ms" },
      { label: "Active Users", value: "50k+" },
      { label: "Security Incidents", value: "0" }
    ],
    techStack: ["Node.js", "Kafka", "Redis", "React Native"],
    content: [
      "In the hyper-competitive fintech space, user trust is built on speed and reliability. Our client needed a mobile-first platform that could handle complex financial instruments while providing the 'instant' feel users expect. The goal was to build a system that could scale from zero to millions of transactions without compromising data integrity.",
      "Financial systems face the 'Double Spend' problem and race conditions. During peak trading hours, thousands of users might attempt to access the same ledger simultaneously. Ensuring transactional atomicity across a distributed system—where the database, cache, and messaging queue must stay perfectly in sync—was the core engineering obstacle.",
      "We built an event-driven architecture using Node.js for its non-blocking I/O capabilities and Kafka as the central nervous system. Every transaction was treated as an immutable event, ensuring a perfect audit trail. We utilized Redis for lightning-fast session management and React Native to deliver a high-performance, consistent UI across both iOS and Android.",
      "The platform achieved a sub-200ms transaction speed, providing a seamless experience even during high-traffic surges. Since launch, the app has scaled to over 50,000 active users with zero security incidents or data mismatches. The event-sourced nature of the backend also allowed the client to implement real-time fraud detection much more easily than traditional architectures."
    ]
  },
  "ecommerce-transformation": {
    badge: "Digital Transformation",
    title: "Retail E-Commerce Transformation",
    description: "Reimagined retail platform for multi-channel growth and speed.",
    metrics: [
      { label: "Lighthouse Score", value: "98/100" },
      { label: "Conversion Rate", value: "+22%" },
      { label: "Load Time", value: "0.8s" }
    ],
    techStack: ["Next.js", "Shopify Hydrogen", "Vercel Edge", "Tailwind"],
    content: [
      "A established retail brand was losing significant revenue to modern competitors because their web presence was slow and unresponsive on mobile. Their legacy e-commerce engine was a bottleneck, struggling to handle the concurrent user load of seasonal flash sales, which led to frustrated customers and high cart abandonment rates.",
      "The client needed to maintain their existing backend inventory and ERP systems while completely overhauling the user experience. The challenge was to bridge the gap between a slow, 'heavy' legacy backend and a fast, modern frontend without a total 'rip-and-replace' of their core business logic.",
      "We implemented a 'Headless Commerce' architecture. We used Next.js to build a lightning-fast, SEO-optimized frontend that utilized Incremental Static Regeneration (ISR). By placing a distributed caching layer (using Vercel Edge) between the new frontend and the legacy ERP, we shielded the old systems from traffic spikes and ensured content was delivered from the closest edge node to the user.",
      "The transformation was immediate. The site’s Lighthouse performance score jumped to 98/100, and page load times were slashed to 0.8 seconds. This performance boost directly correlated to a 22% increase in conversion rates. The brand now has a future-proof platform that can scale horizontally to meet any promotional demand."
    ]
  },
  "logistics-platform": {
    badge: "System Optimization",
    title: "Logistics Operations Platform",
    description: "Centralized logistics system for real-time visibility and fleet efficiency.",
    metrics: [
      { label: "Delivery Accuracy", value: "94%" },
      { label: "Manual Reporting", value: "-80%" },
      { label: "Fleet Efficiency", value: "+15%" }
    ],
    techStack: ["Python", "Docker", "Kubernetes", "Google Maps API"],
    content: [
      "A regional logistics giant was flying blind. Data was siloed across different warehouses, and fleet coordinates were updated manually via phone calls and spreadsheets. This lack of transparency resulted in inefficient routing, wasted fuel, and—most importantly—unhappy customers receiving vague 'out for delivery' windows.",
      "The engineering team had to ingest and process massive streams of real-time IoT data from thousands of vehicles and warehouse sensors. Normalizing this fragmented data into a single source of truth that could provide predictive insights in real-time required a highly scalable data ingestion pipeline.",
      "We built a centralized operations hub using Python for data processing and Kubernetes for container orchestration. We integrated IoT sensor streams into a real-time dashboard and developed automated route-optimization algorithms that accounted for traffic, weather, and vehicle capacity.",
      "Operational visibility increased from 'periodic updates' to 'real-time precision.' Delivery accuracy hit a record 94%, and manual reporting requirements were reduced by 80%, allowing staff to focus on exceptions rather than routine tracking. The fleet now operates 15% more efficiently, significantly reducing the client's carbon footprint and operational costs."
    ]
  },
  "enterprise-automation": {
    badge: "Process Automation",
    title: "Enterprise Workflow Automation",
    description: "Custom automation to reduce manual processes and employee onboarding friction.",
    metrics: [
      { label: "Hours Saved/Mo", value: "120h" },
      { label: "Data Accuracy", value: "99.9%" },
      { label: "Onboarding Time", value: "-3 Days" }
    ],
    techStack: ["TypeScript", "NestJS", "PostgreSQL", "Azure AD"],
    content: [
      "An enterprise client with over 1,000 employees was losing hundreds of hours every month to 'digital busywork.' HR, Finance, and IT departments were manually copying data between systems for every new hire, promotion, or exit. This manual process was not only slow but prone to human error, leading to payroll discrepancies.",
      "The challenge lay in the diversity of the tech stack—the company used a mix of modern SaaS tools and older, on-premise SQL databases. We had to build a secure, reliable 'bridge' that could communicate with all these systems while ensuring that sensitive employee data remained encrypted and compliant with internal privacy policies.",
      "We developed a custom middleware engine using NestJS and TypeScript. This engine acted as a central webhook orchestrator; when an action occurred in HR, the middleware automatically triggered the necessary updates in the Payroll and IT systems. We implemented strict 'Retry' logic and Dead Letter Queues (DLQs) to ensure synchronization reliability.",
      "The automation suite saved the company 120 man-hours per month. Onboarding a new employee, which previously took three days of manual coordination, was reduced to a near-instant automated sequence. Data accuracy reached 99.9%, virtually eliminating the payroll errors that had previously plagued the finance department."
    ]
  }
};