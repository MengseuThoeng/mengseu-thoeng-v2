"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/site";
import { BackgroundBeams } from "@/components/ui/background-beams";

export function ContactNew() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/myzynpbr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-neutral-950 relative overflow-hidden">
      <BackgroundBeams />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Touch</span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's talk about everything!
              </h3>
              <p className="text-neutral-400">
                Don't hesitate to reach out. I'm always open to discussing new projects,
                creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-neutral-300">
                <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Email</p>
                  <p className="font-medium">{siteConfig.social.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-neutral-300">
                <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Location</p>
                  <p className="font-medium">Phnom Penh, Cambodia</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-neutral-300">
                <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Availability</p>
                  <p className="font-medium">Open for opportunities</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500 focus:border-purple-500"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500 focus:border-purple-500"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Your Message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-neutral-900 border-neutral-800 text-white placeholder:text-neutral-500 focus:border-purple-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-6"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : status === "success" ? (
                  "Message Sent!"
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message <Send className="w-4 h-4" />
                  </span>
                )}
              </Button>

              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
