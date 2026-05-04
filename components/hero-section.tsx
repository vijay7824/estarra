"use client";

import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { FloatingElements } from "@/components/ui/floating-elements";
import { ArrowRight, Play, Award, Users, Building } from "lucide-react";

export default function HeroSection() {
  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in Estarra's construction services. I'd like to discuss my project requirements.`;
    window.open(`https://wa.me/917800074443?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleVideoError = () => {
    console.error("Video failed to load");
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-end pt-64 pb-32">
      <FloatingElements variant="hero" />
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        onError={handleVideoError}
      >
        <source src="/assets/video11.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-end min-h-[calc(100vh-10rem)]">
          {/* Left Side - Content */}
          <div className="space-y-6 lg:pl-0 xl:pl-8">
            <AnimatedSection animation="slideUp" delay={200}>
              <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-5xl font-black text-white leading-tight font-serif mb-4">
                Building Your Dreams Higher
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="slideUp" delay={300}>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl mb-6">
                Transform your vision into reality with Estarra's premium construction services. From residential homes to commercial complexes, we deliver excellence that lasts.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="slideUp" delay={400}>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Building className="w-4 h-4 text-primary-400" />
                  <span className="font-semibold text-sm">150+ Projects</span>
                </div>
                <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Users className="w-4 h-4 text-primary-400" />
                  <span className="font-semibold text-sm">98% Satisfaction</span>
                </div>
                <div className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Award className="w-4 h-4 text-primary-400" />
                  <span className="font-semibold text-sm">Award Winning</span>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slideUp" delay={500}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-primary-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-2xl 
                  hover:bg-primary-700 hover:text-white 
                  hover:shadow-primary-500/50 hover:scale-105 
                  transition-all duration-300 group"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button 
                  size="lg"
                  variant="outline"
                  onClick={handleWhatsApp}
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-700 
                  font-bold text-lg px-8 py-4 rounded-full backdrop-blur-sm 
                  transition-all duration-300 hover:scale-105"
                >
                  <Play className="w-5 h-5 mr-2" />
                  WhatsApp Consultation
                </Button>
              </div>
            </AnimatedSection>

            {/* <AnimatedSection animation="fadeIn" delay={600}>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-primary-600 border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                      {i === 1 ? '5' : i === 2 ? '★' : i === 3 ? '4.9' : '✓'}
                    </div>
                  ))}
                </div>
                <div className="text-white text-left">
                  <div className="font-semibold text-sm">Trusted by 150+ clients</div>
                  <div className="text-xs text-white/80">4.9/5 average rating</div>
                </div>
              </div>
            </AnimatedSection> */}
          </div>
          
          {/* Right Side - Empty for video visibility */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}

