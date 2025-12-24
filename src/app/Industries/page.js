import React from 'react'
import ServicePageLayout from "@/components/layout/ServicePageLayout";

export default function IndustriesPage() {
  return (
     <ServicePageLayout 
               title=" Industries"
                description="Transform your ideas into production-ready applications. Elysyal combines cutting-edge AI with intuitive tools to accelerate your development workflow."
                heroImage="/As_1.webp"
                primaryButton={{ text: "Start Your Project", href: "#" }}
                secondaryButton={{ text: "Book a Demo", href: "#" }}
              
              />    
  )
}

