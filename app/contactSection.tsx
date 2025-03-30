"use client";

import React, { useState } from "react";
import { IconMail, IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";
import { Section } from "@/components/section";
import { SlideIn } from "@/components/motion";
import { Button } from "@/components/button";
import { ImageRotation } from "../components/image-rotation";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const isFormValid = formData.name.trim() !== "" && 
                     formData.email.trim() !== "" && 
                     formData.message.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    
    const { name, email, message } = formData;
    const mailtoLink = `mailto:worthingtravis@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${email}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Have a project in mind or want to discuss opportunities? I'd love to hear from you!"
    >
      <div className="space-y-16">
        {/* Top Section: Image and Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <SlideIn delay={0.1}>
            <ImageRotation
              frontImage={{
                src: "/not-spill.png",
                alt: "Travis Worthing - Clean Coffee"
              }}
              backImage={{
                src: "/spill.png",
                alt: "Travis Worthing - Spilled Coffee"
              }}
              rotationFactor={2}
              transitionDuration={500}
              gradientColor="from-cyan-500/20"
            />
          </SlideIn>

          {/* Contact Information */}
          <SlideIn delay={0.2}>
            <div className="space-y-10 text-center md:text-left">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Contact Information</h3>
                  <p className="text-lg text-gray-200 mb-8">
                    Feel free to reach out through the form or via email for any inquiries or collaboration opportunities.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 md:justify-start justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/10">
                        <IconMail className="text-cyan-400 w-6 h-6" aria-hidden={true} />
                      </div>
                      <a 
                        href="mailto:worthingtravis@gmail.com" 
                        className="text-lg text-cyan-100 hover:text-cyan-300 transition-colors"
                        aria-label="Email: worthingtravis@gmail.com"
                      >
                        worthingtravis@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">Connect With Me</h3>
                  <div className="flex space-x-6 md:justify-start justify-center">
                    <a
                      href="https://github.com/worthingtravis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-100 hover:text-cyan-300 transition-colors transform hover:scale-110 duration-200"
                      aria-label="GitHub Profile"
                    >
                      <IconBrandGithub className="w-7 h-7" aria-hidden={true} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/travis-worthing-3676a2166/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-100 hover:text-cyan-300 transition-colors transform hover:scale-110 duration-200"
                      aria-label="LinkedIn Profile"
                    >
                      <IconBrandLinkedin className="w-7 h-7" aria-hidden={true} />
                    </a>
                    <a
                      href="https://twitter.com/laughing_whales"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-100 hover:text-cyan-300 transition-colors transform hover:scale-110 duration-200"
                      aria-label="Twitter Profile"
                    >
                      <IconBrandTwitter className="w-7 h-7" aria-hidden={true} />
                    </a>
                    <a
                      href="mailto:worthingtravis@gmail.com"
                      className="text-cyan-100 hover:text-cyan-300 transition-colors transform hover:scale-110 duration-200"
                      aria-label="Email"
                    >
                      <IconMail className="w-7 h-7" aria-hidden={true} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SlideIn>
        </div>

        {/* Contact Form */}
        <SlideIn>
          <form className="space-y-8 max-w-2xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-cyan-100 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 shadow-inner"
                placeholder="Your name"
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-cyan-100 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 shadow-inner"
                placeholder="your@email.com"
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-cyan-100 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 resize-none shadow-inner"
                placeholder="Your message"
                aria-required="true"
              />
            </div>

            <Button 
              type="submit" 
              fullWidth 
              disabled={!isFormValid}
              className={`bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300 ${
                !isFormValid ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Send Message
            </Button>
          </form>
        </SlideIn>
      </div>
    </Section>
  );
};
