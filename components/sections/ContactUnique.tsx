"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Loader2, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactUnique() {
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
      const response = await fetch(siteConfig.form_id, {
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
    <section id="contact" className="py-32 bg-white dark:bg-black relative overflow-hidden transition-colors font-sans">
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-400 text-black border-2 border-black font-mono font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
            <Mail className="w-4 h-4 text-black animate-pulse" />
            <span>LET'S TALK</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-black dark:text-white uppercase font-mono">
            Get In Touch
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-base sm:text-lg font-mono">
            Have an outstanding project in mind? Let's build something amazing together.
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            
            {/* Left Column: Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-6"
            >
              {/* Email Card */}
              <div className="group relative w-full">
                <span className="absolute inset-0 border-2 border-dashed border-black bg-white dark:border-white dark:bg-gray-900" />
                <div className="relative border-2 border-black bg-white p-6 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 dark:border-white dark:bg-zinc-900 text-black dark:text-white flex flex-col justify-between">
                  <div className="w-10 h-10 border-2 border-black dark:border-white bg-emerald-400 text-black flex items-center justify-center mb-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="font-mono font-bold text-base uppercase">EMAIL ME DIRECTLY</h3>
                  <a href={`mailto:${siteConfig.social.email}`} className="text-xs sm:text-sm font-mono text-emerald-600 dark:text-emerald-400 hover:underline mt-1 break-all">
                    {siteConfig.social.email}
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="group relative w-full">
                <span className="absolute inset-0 border-2 border-dashed border-black bg-white dark:border-white dark:bg-gray-900" />
                <div className="relative border-2 border-black bg-white p-6 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 dark:border-white dark:bg-zinc-900 text-black dark:text-white flex flex-col justify-between">
                  <div className="w-10 h-10 border-2 border-black dark:border-white bg-emerald-400 text-black flex items-center justify-center mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-mono font-bold text-base uppercase">OUR BASE OFFICE</h3>
                  <p className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400 mt-1">
                    Phnom Penh, Cambodia 🇰🇭
                  </p>
                </div>
              </div>

              {/* Connect Card */}
              <div className="group relative w-full">
                <span className="absolute inset-0 border-2 border-dashed border-black bg-white dark:border-white dark:bg-gray-900" />
                <div className="relative border-2 border-black bg-white p-6 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 dark:border-white dark:bg-zinc-900 text-black dark:text-white">
                  <h3 className="font-mono font-bold text-sm uppercase mb-4">SOCIAL CHANNELS</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {Object.entries(siteConfig.social)
                      .filter(([_, url]) => url)
                      .map(([key, url]) => (
                        <a
                          key={key}
                          href={key === "email" ? `mailto:${url}` : url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 border-2 border-black dark:border-white text-[10px] font-mono font-bold uppercase bg-white text-black hover:bg-emerald-400 dark:bg-zinc-800 dark:text-white dark:hover:bg-emerald-600 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-none"
                        >
                          {key}
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Form Container */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-3 group relative w-full"
            >
              {/* Dashed shadow underlay */}
              <span className="absolute inset-0 border-2 border-dashed border-black bg-white dark:border-white dark:bg-gray-900" />

              {/* Main Form Box */}
              <form 
                onSubmit={handleSubmit} 
                className="relative border-2 border-black bg-white p-8 space-y-6 group-hover:-translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300 dark:border-white dark:bg-zinc-900 text-black dark:text-white"
              >
                <div>
                  <h4 className="text-xl font-bold uppercase font-mono tracking-tight">
                    Send Me a Message
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono mt-1">
                    Fill out the form below and I'll get back to you promptly.
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase font-mono text-zinc-700 dark:text-zinc-300">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-2 border-black bg-white text-black p-3 font-mono text-xs focus:ring-2 focus:ring-emerald-400 focus:outline-none dark:border-white dark:bg-zinc-900 dark:text-white placeholder:text-zinc-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase font-mono text-zinc-700 dark:text-zinc-300">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border-2 border-black bg-white text-black p-3 font-mono text-xs focus:ring-2 focus:ring-emerald-400 focus:outline-none dark:border-white dark:bg-zinc-900 dark:text-white placeholder:text-zinc-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase font-mono text-zinc-700 dark:text-zinc-300">Message Description</label>
                  <textarea
                    placeholder="Tell me about your project detail..."
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border-2 border-black bg-white text-black p-3 font-mono text-xs focus:ring-2 focus:ring-emerald-400 focus:outline-none dark:border-white dark:bg-zinc-900 dark:text-white placeholder:text-zinc-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full border-2 border-black bg-emerald-400 text-black font-mono font-bold uppercase py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <><Loader2 className="w-4 h-4 animate-spin text-black" /> SENDING...</>
                  ) : status === "success" ? (
                    <><CheckCircle className="w-4 h-4 text-black" /> MESSAGE SENT!</>
                  ) : (
                    <><Send className="w-4 h-4 text-black" /> SEND MESSAGE</>
                  )}
                </button>

                {status === "error" && (
                  <p className="text-red-500 font-mono text-xs text-center font-bold">
                    FAILED TO SEND MESSAGE. PLEASE TRY AGAIN directly via mail.
                  </p>
                )}
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
