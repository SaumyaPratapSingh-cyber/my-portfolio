import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } }
  };

  return (
    <section id="contact" className="py-24 bg-black min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Info */}
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-5xl md:text-6xl font-space font-bold text-white mb-6">
              Let's <span className="text-[#00E5FF]">Talk</span>
            </h2>
            <p className="text-gray-400 font-mono text-lg mb-10 max-w-md leading-relaxed">
              Have a project in mind or just want to say hi? I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-4">
              <a href="mailto:contact@example.com" className="block">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-black border border-white/10 rounded-xl p-6 flex items-center gap-6 group hover:border-[#00E5FF] hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#00E5FF]/10 transition-colors">
                    <Mail className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <div>
                    <p className="text-gray-400 font-mono text-sm uppercase tracking-wider mb-1">Email</p>
                    <p className="text-white font-space font-bold text-lg group-hover:text-[#00E5FF] transition-colors">contact@example.com</p>
                  </div>
                </motion.div>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="block">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-black border border-white/10 rounded-xl p-6 flex items-center gap-6 group hover:border-[#00E5FF] hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#00E5FF]/10 transition-colors">
                    <Linkedin className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <div>
                    <p className="text-gray-400 font-mono text-sm uppercase tracking-wider mb-1">LinkedIn</p>
                    <p className="text-white font-space font-bold text-lg group-hover:text-[#00E5FF] transition-colors">Connect with me</p>
                  </div>
                </motion.div>
              </a>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-black border border-white/10 p-8 md:p-10 rounded-2xl relative shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 font-mono text-sm uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00E5FF] focus:shadow-[0_0_10px_rgba(0,229,255,0.2)] transition-all font-mono"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 font-mono text-sm uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00E5FF] focus:shadow-[0_0_10px_rgba(0,229,255,0.2)] transition-all font-mono"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-400 font-mono text-sm uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                    rows={5}
                    className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#00E5FF] focus:shadow-[0_0_10px_rgba(0,229,255,0.2)] transition-all font-mono resize-none"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#00E5FF] text-black font-space font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] hover:bg-[#33ebff] transition-all"
                >
                  <Send className="w-5 h-5" />
                  SEND MESSAGE
                </motion.button>
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;