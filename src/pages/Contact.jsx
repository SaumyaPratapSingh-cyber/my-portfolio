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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-black to-black pointer-events-none"></div>
      
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
            <h2 className="text-5xl md:text-7xl font-space font-bold text-white mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
              Let's <span className="text-[#00E5FF] drop-shadow-[0_0_20px_#00E5FF]">Talk</span>
            </h2>
            <p className="text-zinc-300 font-mono text-lg mb-12 max-w-md leading-relaxed">
              Have a project in mind or just want to say hi? I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              <a href="mailto:contact@example.com" className="block">
                <motion.div
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="bg-[#050505] border border-zinc-800 rounded-xl p-6 flex items-center gap-6 group hover:border-[#00E5FF] hover:shadow-[0_0_30px_rgba(0,229,255,0.4),inset_0_0_15px_rgba(0,229,255,0.1)] transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="w-14 h-14 rounded-full bg-black border border-zinc-800 flex items-center justify-center group-hover:border-[#00E5FF] group-hover:shadow-[0_0_15px_#00E5FF] transition-all z-10">
                    <Mail className="w-7 h-7 text-zinc-400 group-hover:text-[#00E5FF] transition-colors" />
                  </div>
                  <div className="z-10">
                    <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-1 group-hover:text-zinc-300 transition-colors">Email</p>
                    <p className="text-white font-space font-bold text-xl group-hover:text-[#00E5FF] group-hover:drop-shadow-[0_0_8px_#00E5FF] transition-all">contact@example.com</p>
                  </div>
                </motion.div>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="block">
                <motion.div
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="bg-[#050505] border border-zinc-800 rounded-xl p-6 flex items-center gap-6 group hover:border-[#00E5FF] hover:shadow-[0_0_30px_rgba(0,229,255,0.4),inset_0_0_15px_rgba(0,229,255,0.1)] transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="w-14 h-14 rounded-full bg-black border border-zinc-800 flex items-center justify-center group-hover:border-[#00E5FF] group-hover:shadow-[0_0_15px_#00E5FF] transition-all z-10">
                    <Linkedin className="w-7 h-7 text-zinc-400 group-hover:text-[#00E5FF] transition-colors" />
                  </div>
                  <div className="z-10">
                    <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest mb-1 group-hover:text-zinc-300 transition-colors">LinkedIn</p>
                    <p className="text-white font-space font-bold text-xl group-hover:text-[#00E5FF] group-hover:drop-shadow-[0_0_8px_#00E5FF] transition-all">Connect with me</p>
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
            <div className="bg-[#030303] border border-zinc-800 p-8 md:p-10 rounded-2xl relative shadow-[0_0_40px_rgba(0,0,0,1)] hover:border-zinc-700 transition-colors duration-500 group">
              <div className="absolute -inset-[1px] bg-gradient-to-b from-[#00E5FF]/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none -z-10 blur-sm"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-zinc-400 font-mono text-sm uppercase tracking-widest mb-2 font-semibold">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-black border border-zinc-800 rounded-lg px-5 py-4 text-white placeholder-zinc-700 focus:outline-none focus:border-[#00E5FF] focus:shadow-[0_0_20px_rgba(0,229,255,0.4),inset_0_0_10px_rgba(0,229,255,0.1)] transition-all duration-300 font-mono text-lg"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-zinc-400 font-mono text-sm uppercase tracking-widest mb-2 font-semibold">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-black border border-zinc-800 rounded-lg px-5 py-4 text-white placeholder-zinc-700 focus:outline-none focus:border-[#00E5FF] focus:shadow-[0_0_20px_rgba(0,229,255,0.4),inset_0_0_10px_rgba(0,229,255,0.1)] transition-all duration-300 font-mono text-lg"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-zinc-400 font-mono text-sm uppercase tracking-widest mb-2 font-semibold">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                    rows={5}
                    className="w-full bg-black border border-zinc-800 rounded-lg px-5 py-4 text-white placeholder-zinc-700 focus:outline-none focus:border-[#00E5FF] focus:shadow-[0_0_20px_rgba(0,229,255,0.4),inset_0_0_10px_rgba(0,229,255,0.1)] transition-all duration-300 font-mono text-lg resize-none"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#00E5FF] text-black font-space font-extrabold text-lg tracking-wider py-4 rounded-lg flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(0,229,255,0.8)] hover:bg-white transition-all duration-300"
                >
                  <Send className="w-6 h-6" />
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