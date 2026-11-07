"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedSection } from "@/components/ui/animated-section";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, Award } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    info: "+91 7800074443",
    action: "tel:+917800074443",
    description: "Mon-Sat 9AM-7PM"
  },
  {
    icon: Mail,
    title: "Email Us",
    info: "info@estarra.in",
    action: "mailto:info@estarra.in",
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
    window.open(`https://wa.me/917800074443?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-white text-gray-900 relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection animation="slideUp" className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-primary-50 text-primary-700 border border-primary-200 px-4 py-2 rounded-full text-sm font-semibold">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Let&apos;s Build Your <span className="text-primary-600">Dream</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your construction journey? Contact us for a free consultation and personalized quote.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Form */}
          <AnimatedSection animation="slideLeft" className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Name *</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-primary-600 focus:ring-1 focus:ring-primary-600 h-11"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Email *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-primary-600 focus:ring-1 focus:ring-primary-600 h-11"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Phone</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-primary-600 focus:ring-1 focus:ring-primary-600 h-11"
                      placeholder="+91 78000 74443"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Project Type</label>
                    <select
                      value={formData.project}
                      onChange={(e) => setFormData({...formData, project: e.target.value})}
                      className="w-full h-11 px-3 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:bg-white focus:border-primary-600 focus:ring-1 focus:ring-primary-600 focus:outline-none text-sm"
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential Construction</option>
                      <option value="commercial">Commercial Building</option>
                      <option value="turnkey">Turnkey Project</option>
                      <option value="renovation">Renovation</option>
                      <option value="interior">Interior Design</option>
                      <option value="consulting">Project Management</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Budget Range</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full h-11 px-3 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:bg-white focus:border-primary-600 focus:ring-1 focus:ring-primary-600 focus:outline-none text-sm"
                  >
                    <option value="">Select budget range</option>
                    <option value="5-10lakhs">₹5-10 Lakhs</option>
                    <option value="10-25lakhs">₹10-25 Lakhs</option>
                    <option value="25-50lakhs">₹25-50 Lakhs</option>
                    <option value="50lakhs+">₹50+ Lakhs</option>
                    <option value="custom">Custom Quote</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-2">Message *</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-gray-50 border-gray-300 text-gray-900 placeholder:text-gray-400 focus:bg-white focus:border-primary-600 focus:ring-1 focus:ring-primary-600 min-h-32 text-sm"
                    placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                    required
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3.5 px-8 rounded-full shadow-lg shadow-primary-600/30 hover:scale-105 transition-all flex items-center justify-center gap-2"
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
                    className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-8 rounded-full shadow-lg shadow-green-600/20 transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    WhatsApp Us
                  </Button>
                </div>
              </form>
            </div>
          </AnimatedSection>

          {/* Contact Info & Details */}
          <AnimatedSection animation="slideRight" className="space-y-6">
            {/* Contact Cards */}
            <div className="space-y-3.5">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform duration-300 shrink-0">
                      <contact.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-gray-900 font-bold text-sm mb-0.5">{contact.title}</h4>
                      <a 
                        href={contact.action}
                        className="text-primary-600 hover:text-primary-700 transition-colors text-sm font-semibold block"
                      >
                        {contact.info}
                      </a>
                      <p className="text-gray-500 text-xs mt-0.5">{contact.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
              <h4 className="text-gray-900 font-bold text-lg">Why Choose Estarra?</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">On-time project delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">15+ years of excellence</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">24/7 customer support</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Final CTA Banner */}
        <AnimatedSection animation="fadeIn" delay={300} className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 via-luxury-50 to-primary-50 rounded-3xl p-8 sm:p-10 border border-primary-100 shadow-sm">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto text-sm sm:text-base">
              Join over 150+ satisfied clients who trusted us with their dream projects in Lucknow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-primary-600/20 hover:scale-105 transition-all"
              >
                Get Free Quote
              </Button>
              <Button 
                onClick={handleWhatsApp}
                variant="outline" 
                className="bg-white hover:bg-gray-50 border-gray-300 text-gray-800 font-bold px-8 py-3.5 rounded-full shadow-sm hover:scale-105 transition-all"
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
