import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Zap } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formState);
    alert('Message intercepted. Transmission initiated.');
  };

  return (
    <div className="bg-hive-black min-h-screen pt-32 px-4 flex items-center justify-center" id="contact">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div>
          <h1 className="text-5xl md:text-7xl font-space font-bold text-white mb-6">
            Let's <span className="text-hive-cyan">Talk</span>
          </h1>
          <p className="text-gray-400 text-lg font-mono mb-8">
            Ready to engineer dominance? Initialize communication sequence.
          </p>


        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-hive-black border border-white/10 p-8 rounded-2xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-network opacity-10 pointer-events-none"></div>

          <div className="relative z-10">
            <label className="block text-gray-500 text-xs font-mono uppercase mb-2">Identifier (Name)</label>
            <input
              type="text"
              className="w-full bg-hive-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-hive-cyan transition-colors"
              placeholder="John Doe"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            />
          </div>

          <div className="relative z-10">
            <label className="block text-gray-500 text-xs font-mono uppercase mb-2">Comms Channel (Email)</label>
            <input
              type="email"
              className="w-full bg-hive-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-hive-cyan transition-colors"
              placeholder="john@example.com"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            />
          </div>

          <div className="relative z-10">
            <label className="block text-gray-500 text-xs font-mono uppercase mb-2">Directive (Message)</label>
            <textarea
              rows="4"
              className="w-full bg-hive-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-hive-cyan transition-colors"
              placeholder="Tell us about your project..."
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            ></textarea>
          </div>

          <button
            type="submit"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full relative py-4 bg-hive-blue text-white font-space font-bold uppercase tracking-widest overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Transmit <Send size={18} className={isHovered ? "translate-x-1 transition-transform" : ""} />
            </span>
            <div className="absolute inset-0 bg-hive-cyan transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;