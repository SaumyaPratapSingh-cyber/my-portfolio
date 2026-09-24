import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Zap, Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="relative py-24 min-h-screen flex items-center justify-center overflow-hidden bg-hive-black text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-hive-blue/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-hive-cyan/20 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>

      <motion.div 
        className="container mx-auto px-6 relative z-10 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center mb-16">
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-space font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-hive-cyan via-white to-hive-blue"
          >
            Let's Talk
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-400 font-mono text-lg max-w-2xl mx-auto"
          >
            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Contact Info */}
          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-hive-cyan/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-hive-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-hive-blue/20 flex items-center justify-center border border-hive-blue/30 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all">
                  <Mail className="w-6 h-6 text-hive-cyan" />
                </div>
                <div>
                  <h3 className="font-space text-xl font-bold mb-1">Email</h3>
                  <p className="font-mono text-gray-400 group-hover:text-hive-cyan transition-colors">hello@example.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-hive-blue/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-hive-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex items-center gap-6">
                <div className="w-14 h-14 rounded-full bg-hive-cyan/20 flex items-center justify-center border border-hive-cyan/30 group-hover:shadow-[0_0_20px_rgba(0,123,255,0.4)] transition-all">
                  <MapPin className="w-6 h-6 text-hive-blue" />
                </div>
                <div>
                  <h3 className="font-space text-xl font-bold mb-1">Location</h3>
                  <p className="font-mono text-gray-400 group-hover:text-hive-blue transition-colors">Remote / Worldwide</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links Container */}
            <div className="flex gap-4 mt-4">
              {[
                { icon: Github, label: "GitHub", color: "hover:text-white hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]" },
                { icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-400 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.5)]" },
                { icon: Twitter, label: "Twitter", color: "hover:text-sky-400 hover:border-sky-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]" }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  aria-label={social.label}
                  whileHover={{ y: -5 }}
                  className={`w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div variants={itemVariants} className="relative group">
            {/* Animated Gradient Border wrapper */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-hive-cyan via-purple-500 to-hive-blue rounded-2xl opacity-30 blur-sm group-hover:opacity-75 transition-opacity duration-500"></div>
            
            <div className="relative bg-black/60 backdrop-blur-2xl p-8 rounded-2xl border border-white/10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-mono focus:outline-none focus:border-hive-cyan focus:shadow-[0_0_10px_rgba(0,229,255,0.5)] transition-all peer placeholder-transparent"
                    placeholder="Name"
                  />
                  <label htmlFor="name" className="absolute left-4 top-4 text-gray-500 font-mono transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-hive-cyan bg-hive-black/80 px-1 rounded backdrop-blur-md">Name</label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-mono focus:outline-none focus:border-hive-blue focus:shadow-[0_0_10px_rgba(0,123,255,0.5)] transition-all peer placeholder-transparent"
                    placeholder="Email"
                  />
                  <label htmlFor="email" className="absolute left-4 top-4 text-gray-500 font-mono transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-hive-blue bg-hive-black/80 px-1 rounded backdrop-blur-md">Email</label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="block w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-mono focus:outline-none focus:border-hive-cyan focus:shadow-[0_0_10px_rgba(0,229,255,0.5)] transition-all peer placeholder-transparent resize-none"
                    placeholder="Message"
                  ></textarea>
                  <label htmlFor="message" className="absolute left-4 top-4 text-gray-500 font-mono transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-hive-cyan bg-hive-black/80 px-1 rounded backdrop-blur-md">Message</label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden group/btn bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl py-4 font-space font-bold text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />}
                  </span>
                  {/* Hover gradient sweep */}
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-hive-cyan to-hive-blue opacity-0 group-hover/btn:opacity-50 transition-opacity duration-300"></div>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;