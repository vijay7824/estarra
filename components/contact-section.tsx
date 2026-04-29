"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedSection } from "@/components/ui/animated-section";
import { FloatingElements } from "@/components/ui/floating-elements";
import { ElegantCard } from "@/components/ui/elegant-card";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, Award } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    info: "+91 7392861099",
    action: "tel:+917392861099",
    description: "Mon-Sat 9AM-7PM"
  },
  {
    icon: Mail,
    title: "Email Us",
    info: "estarragroup@gmail.com",
    action: "mailto:estarragroup@gmail.com",
    description: "We reply within 24hrs"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    info: "Lucknow, Uttar Pradesh",
    action: "#",
    description: "By appointment only"
  }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          project: "",
          budget: "",
          message: ""
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in Estarra's construction services. I'd like to discuss my project requirements.`;
    window.open(`https://wa.me/917392861099?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
      <FloatingElements variant="hero" />
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-600/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-radial from-purple-500/10 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection animation="slideUp" className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-white/10 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Let's Build Your <span className="text-gradient">Dream</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your construction journey? Contact us for a free consultation and personalized quote.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <AnimatedSection animation="slideLeft" className="lg:col-span-2">
            <ElegantCard className="bg-white/5 backdrop-blur-md border-white/10">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-semibold mb-2">Name *</label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-semibold mb-2">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-semibold mb-2">Phone</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400"
                        placeholder="+91 99999 99999"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-semibold mb-2">Project Type</label>
                      <select
                        value={formData.project}
                        onChange={(e) => setFormData({...formData, project: e.target.value})}
                        className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-purple-400 focus:outline-none"
                      >
                        <option value="" className="bg-gray-800">Select project type</option>
                        <option value="residential" className="bg-gray-800">Residential Construction</option>
                        <option value="commercial" className="bg-gray-800">Commercial Building</option>
                        <option value="turnkey" className="bg-gray-800">Turnkey Project</option>
                        <option value="renovation" className="bg-gray-800">Renovation</option>
                        <option value="interior" className="bg-gray-800">Interior Design</option>
                        <option value="consulting" className="bg-gray-800">Project Management</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-purple-400 focus:outline-none"
                    >
                      <option value="" className="bg-gray-800">Select budget range</option>
                      <option value="5-10lakhs" className="bg-gray-800">₹5-10 Lakhs</option>
                      <option value="10-25lakhs" className="bg-gray-800">₹10-25 Lakhs</option>
                      <option value="25-50lakhs" className="bg-gray-800">₹25-50 Lakhs</option>
                      <option value="50lakhs+" className="bg-gray-800">₹50+ Lakhs</option>
                      <option value="custom" className="bg-gray-800">Custom Quote</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">Message *</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 min-h-32"
                      placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                      required
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="estarra-gradient text-white font-bold py-4 px-8 rounded-full hover:scale-105 transition-all glow-effect shadow-xl hover:shadow-purple-500/50 flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                    
                    <Button
                      type="button"
                      onClick={handleWhatsApp}
                      className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105 flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp Us
                    </Button>
                  </div>
                </form>
              </div>
            </ElegantCard>
          </AnimatedSection>

          {/* Contact Info & Image */}
          <AnimatedSection animation="slideRight" className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <ElegantCard key={index} className="bg-white/5 backdrop-blur-md border-white/10 group cursor-pointer hover:bg-white/10">
                  <div className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 estarra-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold mb-1">{contact.title}</h4>
                        <a 
                          href={contact.action}
                          className="text-purple-300 hover:text-purple-200 transition-colors text-sm font-semibold"
                        >
                          {contact.info}
                        </a>
                        <p className="text-gray-400 text-xs mt-1">{contact.description}</p>
                      </div>
                    </div>
                  </div>
                </ElegantCard>
              ))}
            </div>



            {/* Why Choose Us */}
            <ElegantCard className="bg-white/5 backdrop-blur-md border-white/10">
              <div className="p-6">
                <h4 className="text-white font-bold text-lg mb-4">Why Choose Estarra?</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300 text-sm">On-time project delivery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300 text-sm">15+ years of excellence</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300 text-sm">24/7 customer support</span>
                  </div>
                </div>
              </div>
            </ElegantCard>
          </AnimatedSection>
        </div>

        {/* Final CTA */}
        <AnimatedSection animation="fadeIn" delay={800} className="text-center mt-20">
          <div className="glass-effect rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-6">
              Join over 150+ satisfied clients who trusted us with their dream projects.
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="estarra-gradient text-white font-bold px-6 py-3 rounded-full hover:scale-105 transition-all"
              >
                Get Free Quote
              </Button>
              <Button 
                onClick={handleWhatsApp}
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 font-bold px-6 py-3 rounded-full"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}