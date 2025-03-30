"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IconMail, IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";
import { Section } from "@/components/section";
import { SlideIn } from "@/components/motion";
import { Button } from "@/components/button";

export const ContactSection = () => {
  const [rotation, setRotation] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      
      const rect = imageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate the center point of the element
      const elementCenter = rect.top + (rect.height / 2);
      const windowCenter = windowHeight / 2;
      
      // Calculate distance from center of viewport
      const distanceFromCenter = elementCenter - windowCenter;
      
      // Calculate rotation based on distance from center
      // Max rotation of 180 degrees when element is at center
      const maxRotation = 180;
      const rotationFactor = 0.5; // Adjust this to control rotation speed
      const newRotation = Math.min(
        Math.max(
          (distanceFromCenter / windowHeight) * maxRotation * rotationFactor,
          -maxRotation
        ),
        maxRotation
      );
      
      setRotation(newRotation);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Have a project in mind or want to discuss opportunities? I'd love to hear from you!"
    >
      <div className="space-y-12">
        {/* Top Section: Image and Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Profile Image */}
          <SlideIn delay={0.1}>
            <div 
              ref={imageRef}
              className="relative aspect-square w-full max-w-md mx-auto"
            >
              <div 
                className="relative w-full h-full transition-transform duration-300 ease-out"
                style={{ 
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${rotation}deg)`
                }}
              >
                {/* Front */}
                <div 
                  className="absolute inset-0"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-transparent rounded-2xl" />
                  <Image
                    src="/contactme-flip.png"
                    alt="Travis Worthing"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-2xl"
                    priority
                  />
                </div>
                {/* Back */}
                <div 
                  className="absolute inset-0"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-transparent rounded-2xl" />
                  <Image
                    src="/contactme2.png"
                    alt="Travis Worthing - Back"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </SlideIn>

          {/* Contact Information */}
          <SlideIn delay={0.2}>
            <div className="flex flex-col space-y-8 text-center md:text-left">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
                <p className="text-gray-300 mb-6">
                  Feel free to reach out through the form or via email for any inquiries or collaboration opportunities.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 md:justify-start justify-center">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center">
                      <IconMail className="text-cyan-400" aria-hidden={true} />
                    </div>
                    <a 
                      href="mailto:worthingtravis@gmail.com" 
                      className="text-cyan-400 hover:underline"
                      aria-label="Email: worthingtravis@gmail.com"
                    >
                      worthingtravis@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Connect With Me</h3>
                <div className="flex space-x-4 md:justify-start justify-center">
                  <a
                    href="https://github.com/worthingtravis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-500 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <IconBrandGithub className="w-6 h-6" aria-hidden={true} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/travis-worthing-3676a2166/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-500 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <IconBrandLinkedin className="w-6 h-6" aria-hidden={true} />
                  </a>
                  <a
                    href="https://twitter.com/laughing_whales"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-500 transition-colors"
                    aria-label="Twitter Profile"
                  >
                    <IconBrandTwitter className="w-6 h-6" aria-hidden={true} />
                  </a>
                  <a
                    href="mailto:worthingtravis@gmail.com"
                    className="text-gray-400 hover:text-cyan-500 transition-colors"
                    aria-label="Email"
                  >
                    <IconMail className="w-6 h-6" aria-hidden={true} />
                  </a>
                </div>
              </div>
            </div>
          </SlideIn>
        </div>

        {/* Contact Form */}
        <SlideIn>
          <form className="space-y-6 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                placeholder="Your name"
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                placeholder="your@email.com"
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white resize-none"
                placeholder="Your message"
                aria-required="true"
              />
            </div>

            <Button type="submit" fullWidth>
              Send Message
            </Button>
          </form>
        </SlideIn>
      </div>
    </Section>
  );
};
