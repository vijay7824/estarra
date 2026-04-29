"use client";

import { CardContent } from "@/components/ui/card";
import { ElegantCard } from "@/components/ui/elegant-card";
import { AnimatedSection } from "@/components/ui/animated-section";
import { FloatingElements } from "@/components/ui/floating-elements";
import { ExternalLink, Star, Award, Clock } from "lucide-react";

const projects = [
  {
    title: "Luxury Residential Complex",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Premium residential development featuring modern architecture and sustainable design principles.",
    features: ["Energy Efficient", "Smart Home Ready", "Premium Finishes"],
    duration: "18 months",
    rating: 5.0
  },
  {
    title: "Corporate Office Tower",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=600",
    description: "State-of-the-art commercial building with cutting-edge technology and sustainable features.",
    features: ["LEED Certified", "Smart Building", "Modern Design"],
    duration: "24 months",
    rating: 4.9
  },
  {
    title: "Heritage Home Restoration",
    category: "Renovation",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Complete restoration of a century-old heritage property while preserving its historical charm.",
    features: ["Heritage Preservation", "Modern Amenities", "Structural Upgrade"],
    duration: "12 months",
    rating: 5.0
  },
  {
    title: "Modern Villa Design",
    category: "Turnkey",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Contemporary villa with luxury interiors and landscaped gardens from concept to completion.",
    features: ["Luxury Interiors", "Landscaped Gardens", "Premium Quality"],
    duration: "15 months",
    rating: 4.8
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
  {/* No floating elements or colored backgrounds */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="slideUp" className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold">
              Our Portfolio
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-black mb-6">
            Featured <span className="font-black">Projects</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Showcasing our commitment to excellence through innovative design and superior craftsmanship.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={index}
              animation={index % 2 === 0 ? "slideLeft" : "slideRight"}
              delay={index * 200}
            >
              <ElegantCard className="group overflow-hidden border bg-white h-full">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {project.title}
                  </h3>
                  <p className="text-black mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4 mb-6 text-sm text-black">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-black" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-black" />
                      <span>Premium Quality</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="bg-white text-black px-3 py-1 rounded-full text-sm border border-black"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <button className="flex items-center gap-2 text-black font-semibold">
                      <span>View Details</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <div className="h-px bg-black flex-1 ml-6"></div>
                  </div>
                </CardContent>
              </ElegantCard>
            </AnimatedSection>
          ))}
        </div>
        
        {/* Statistics */}
        <AnimatedSection animation="fadeIn" delay={800}>
          <div className="rounded-3xl p-8 border border-black bg-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-4xl font-black text-black mb-2">
                  150+
                </div>
                <div className="text-black font-semibold">Projects Completed</div>
              </div>
              <div className="group">
                <div className="text-4xl font-black text-black mb-2">
                  15+
                </div>
                <div className="text-black font-semibold">Years Experience</div>
              </div>
              <div className="group">
                <div className="text-4xl font-black text-black mb-2">
                  98%
                </div>
                <div className="text-black font-semibold">Client Satisfaction</div>
              </div>
              <div className="group">
                <div className="text-4xl font-black text-black mb-2">
                  50+
                </div>
                <div className="text-black font-semibold">Expert Team</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}