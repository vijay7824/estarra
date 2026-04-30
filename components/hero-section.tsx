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

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-primary-50 to-luxury-50 flex items-center pt-24">
      <FloatingElements variant="hero" />
      
      {/* Background Video/Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white/50 to-luxury-50/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)] py-12">
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Removed 15+ Years of Excellence badge */}
            
            <AnimatedSection animation="slideUp" delay={200} className="flex flex-col gap-4">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-black text-primary-800 leading-tight font-serif">
                Building Your <span className="text-gradient">Dreams</span> Higher
              </h1>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-fit bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-700 transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Get Quote
              </button>
            </AnimatedSection>
            
            <AnimatedSection animation="slideUp" delay={400}>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Transform your vision into reality with Estarra's premium construction services. From residential homes to commercial complexes, we deliver excellence that lasts.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="slideUp" delay={600}>
              <div className="flex flex-wrap gap-6 text-gray-700">
                <div className="flex items-center gap-2">
                  <Building className="w-5 h-5 text-primary-600" />
                  <span className="font-semibold">150+ Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary-600" />
                  <span className="font-semibold">98% Satisfaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary-600" />
                  <span className="font-semibold">Award Winning</span>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slideUp" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-primary-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-primary-500/50 hover:scale-105 transition-all duration-300 group"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={handleWhatsApp}
                  className="border-2 border-luxury-600 text-luxury-700 hover:bg-luxury-600 hover:text-white font-bold text-lg px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  <Play className="w-5 h-5 mr-2" />
                  WhatsApp Consultation
                </Button>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeIn" delay={1000}>
              <div className="flex items-center gap-4 pt-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-primary-600 border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                      {i === 1 ? '5' : i === 2 ? '★' : i === 3 ? '4.9' : '✓'}
                    </div>
                  ))}
                </div>
                <div className="text-gray-700">
                  <div className="font-semibold">Trusted by 150+ clients</div>
                  <div className="text-sm text-gray-500">4.9/5 average rating</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Right Side - Visual Content */}
          <AnimatedSection animation="slideRight" delay={400} className="relative">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=1000"
                  alt="Modern Construction"
                  className="w-full h-96 lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent"></div>
                {/* Floating Stats Cards */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-primary-200 shadow-lg">
                  <div className="text-2xl font-black text-primary-700">15+</div>
                  <div className="text-primary-600 text-sm font-semibold">Years Experience</div>
                </div>
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-primary-200 shadow-lg">
                  <div className="text-2xl font-black text-primary-700">150+</div>
                  <div className="text-primary-600 text-sm font-semibold">Projects Completed</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-xl animate-float">
                <Award className="w-10 h-10 text-primary-600" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-xl animate-pulse-slow">
                <Building className="w-8 h-8 text-luxury-600" />
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        {/* Scroll Indicator */}
        <AnimatedSection animation="fadeIn" delay={1200} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-primary-600/80 animate-bounce">
            <span className="text-sm font-semibold">Explore Our Work</span>
            <div className="w-6 h-10 border-2 border-primary-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary-600 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}