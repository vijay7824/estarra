"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { FloatingElements } from "@/components/ui/floating-elements";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, CheckCircle, Star, Target } from "lucide-react";

const achievements = [
  { icon: Award, title: "Award-Winning", description: "Multiple industry recognitions" },
  { icon: Users, title: "Expert Team", description: "50+ skilled professionals" },
  { icon: Clock, title: "15+ Years", description: "Proven track record" },
  { icon: CheckCircle, title: "Quality First", description: "Uncompromising standards" }
];

const values = [
  {
    icon: Star,
    title: "Excellence",
    description: "We strive for perfection in every detail, ensuring the highest quality standards in all our projects."
  },
  {
    icon: Target,
    title: "Innovation",
    description: "Embracing cutting-edge technology and sustainable practices to deliver future-ready solutions."
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Your vision is our mission. We work closely with clients to exceed expectations every time."
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
  {/* No floating elements or colored backgrounds */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection animation="slideUp" className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold">
              About Estarra
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-black mb-6">
            Building <span className="font-black">Dreams</span> Since 2010
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            With over 15 years of excellence in construction and engineering, we transform visions into reality.
          </p>
        </AnimatedSection>

        {/* Main Content Grid */}
  <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
          {/* Left Side - Content */}
          <AnimatedSection animation="slideLeft">
            <div className="space-y-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black">Estarra Group</h3>
                <p className="text-black font-semibold">Powered by Ishtika Engineers</p>
              </div>
              <div className="prose prose-lg">
                <p className="text-black leading-relaxed mb-6">
                  Estarra stands as a beacon of excellence in the construction industry, combining traditional craftsmanship with modern innovation. Based in Lucknow, we've been transforming the architectural landscape with our comprehensive range of services.
                </p>
                <p className="text-black leading-relaxed mb-6">
                  Our commitment to quality, sustainability, and client satisfaction has made us the preferred choice for residential, commercial, and industrial projects across the region.
                </p>
              </div>
              <div className="rounded-2xl p-8 bg-white text-black border border-black">
                <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
                <p className="leading-relaxed">
                  "To create exceptional spaces that enhance lives and communities through innovative design, sustainable practices, and uncompromising quality."
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-16 h-1 bg-black rounded-full"></div>
                  <span className="text-black font-bold text-lg">Shine Higher</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side - Image & Stats */}
          <AnimatedSection animation="slideRight">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src="/WhatsApp Image 2025-08-03 at 2.49.47 PM_1754243821976.jpeg"
                  alt="Estarra Team"
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Floating Achievement Cards */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-black">
                <div className="text-3xl font-black text-black">150+</div>
                <div className="text-sm text-black font-semibold">Projects Done</div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-black">
                <div className="text-3xl font-black text-black">98%</div>
                <div className="text-sm text-black font-semibold">Happy Clients</div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Achievements Grid */}
        <AnimatedSection animation="fadeIn" delay={400}>
          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {achievements.map((achievement, index) => (
              <div key={index} 
                className="group text-center p-6 rounded-2xl bg-white border border-black hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-black mb-2">{achievement.title}</h4>
                <p className="text-black text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Values Section */}
        <AnimatedSection animation="slideUp" delay={600}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">Our Core Values</h3>
            <p className="text-black max-w-2xl mx-auto">
              The principles that guide every decision and shape every project we undertake.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} 
                className="group text-center p-8 rounded-3xl bg-white border border-black hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
              >
                <div className="w-20 h-20 bg-black rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-black mb-4">
                  {value.title}
                </h4>
                <p className="text-black leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection animation="fadeIn" delay={800} className="text-center mt-20">
          <div className="bg-white rounded-3xl p-12 text-black relative overflow-hidden border border-black">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h3>
              <p className="mb-8 max-w-2xl mx-auto">
                Let's discuss your vision and create something extraordinary together. Our team is ready to bring your dreams to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-black text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Your Project
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-black text-black font-bold px-8 py-4 rounded-full hover:bg-black hover:text-white"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}