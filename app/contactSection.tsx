"use client";

import React, { useState, useRef } from "react";
import { IconMail, IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconCopy, IconCheck, IconSend, IconSparkles } from "@tabler/icons-react";
import { Section } from "@/components/section";
import { SlideIn } from "@/components/motion";
import { Button } from "@/components/button";
import { ImageRotation } from "../components/image-rotation";
import { FormField, FormSuccess, FormError } from "@/components/form";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  // Enhanced validation
  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isFormValid = formData.name.trim() !== "" && 
                     formData.email.trim() !== "" && 
                     formData.message.trim() !== "" &&
                     Object.keys(validationErrors).length === 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const { name, email, message } = formData;
      const mailtoLink = `mailto:worthingtravis@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${email}`;
      
      // Simulate processing time for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      window.location.href = mailtoLink;
      
      setSubmitSuccess(true);
      toast({
        title: "Message prepared!",
        description: "Your email client should open with the message ready to send.",
      });
      
      // Reset form after success
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setSubmitSuccess(false);
      }, 3000);
      
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("worthingtravis@gmail.com");
      setCopiedEmail(true);
      toast({
        title: "Email copied!",
        description: "Email address copied to clipboard",
      });
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (error) {
      toast({
        title: "Copy failed",
        description: "Please manually copy: worthingtravis@gmail.com",
        variant: "destructive"
      });
    }
  };

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Have a project in mind or want to discuss opportunities? I'd love to hear from you!"
    >
      <div className="space-y-20">
        {/* Top Section: Image and Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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

          {/* Enhanced Contact Information */}
          <SlideIn delay={0.2}>
            <div className="space-y-12 text-center lg:text-left">
              {/* Contact Information Card */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 lg:justify-start justify-center">
                    <IconSparkles className="text-cyan-400 w-6 h-6" />
                    <h3 className="text-2xl font-bold text-white">Let&apos;s Build Something Amazing</h3>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                    Whether you have a project in mind, want to collaborate, or just want to say hello, 
                    I&apos;m always excited to connect with fellow creators and innovators.
                  </p>
                </div>

                {/* Email with copy functionality */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/10">
                        <IconMail className="text-cyan-400 w-6 h-6" aria-hidden={true} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Email me directly</p>
                        <a 
                          href="mailto:worthingtravis@gmail.com" 
                          className="text-lg text-cyan-100 hover:text-cyan-300 transition-colors font-medium"
                          aria-label="Email: worthingtravis@gmail.com"
                        >
                          worthingtravis@gmail.com
                        </a>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={copyEmailToClipboard}
                      className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                      leftIcon={copiedEmail ? <IconCheck className="w-4 h-4" /> : <IconCopy className="w-4 h-4" />}
                    >
                      {copiedEmail ? "Copied!" : "Copy"}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-white lg:text-left text-center">Connect With Me</h4>
                <div className="flex gap-4 lg:justify-start justify-center">
                  {[
                    { icon: IconBrandGithub, href: "https://github.com/worthingtravis", label: "GitHub", color: "hover:text-purple-400" },
                    { icon: IconBrandLinkedin, href: "https://www.linkedin.com/in/travis-worthing-3676a2166/", label: "LinkedIn", color: "hover:text-blue-400" },
                    { icon: IconBrandTwitter, href: "https://twitter.com/laughing_whales", label: "Twitter", color: "hover:text-cyan-400" },
                    { icon: IconMail, href: "mailto:worthingtravis@gmail.com", label: "Email", color: "hover:text-green-400" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target={social.href.startsWith('mailto') ? undefined : "_blank"}
                      rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                      className={`group relative p-3 bg-gray-900/50 border border-white/10 rounded-xl text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 hover:border-current/50 hover:shadow-lg hover:shadow-current/20`}
                      aria-label={`${social.label} Profile`}
                    >
                      <social.icon className="w-6 h-6" aria-hidden={true} />
                      <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </SlideIn>
        </div>

        {/* Enhanced Contact Form */}
        <SlideIn delay={0.3}>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Send Me a Message</h3>
              <p className="text-gray-400 text-lg">I&apos;ll get back to you as soon as possible</p>
            </div>
            
            {submitSuccess && (
              <FormSuccess 
                message="Message prepared successfully! Your email client should open shortly."
                onDismiss={() => setSubmitSuccess(false)}
              />
            )}
            
            <form 
              ref={formRef}
              className="space-y-6 relative"
              onSubmit={handleSubmit}
            >
              
              <div className="space-y-8">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Name"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={validationErrors.name}
                    placeholder="Your full name"
                    className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 hover:bg-white/10"
                    required
                  />
                  
                  <FormField
                    label="Email"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={validationErrors.email}
                    placeholder="your@email.com"
                    className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 hover:bg-white/10"
                    required
                  />
                </div>

                {/* Message */}
                <FormField
                  label="Message"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={validationErrors.message}
                  placeholder="Tell me about your project, ideas, or just say hello..."
                  className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-200 min-h-[120px] hover:bg-white/10"
                  isTextArea
                  required
                />

                {/* Submit Button */}
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    fullWidth 
                    size="lg"
                    disabled={!isFormValid || isSubmitting}
                    isLoading={isSubmitting}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-[1.02] disabled:hover:scale-100 disabled:opacity-50"
                    leftIcon={!isSubmitting ? <IconSend className="w-5 h-5" /> : undefined}
                  >
                    {isSubmitting ? "Preparing Message..." : "Send Message"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </SlideIn>
      </div>
    </Section>
  );
};
