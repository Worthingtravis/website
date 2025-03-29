"use client";

import React from "react";
import { IconMail, IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";
import { Section } from "@/components/section";
import { SlideIn } from "@/components/motion";
import { Button } from "@/components/button";

export const ContactSection = () => {
  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Have a project in mind or want to discuss opportunities? I'd love to hear from you!"
    >
      <div className="grid grid-cols-1 gap-12">
        {/* Contact Form */}
        <SlideIn>
          <form className="space-y-6 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
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

        {/* Contact Information */}
        <SlideIn delay={0.2}>
          <div className="space-y-8 max-w-xl mx-auto text-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-gray-300 mb-6">
                Feel free to reach out through the form or via email for any inquiries or collaboration opportunities.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-center gap-3">
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
              <div className="flex justify-center space-x-4">
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
    </Section>
  );
};
