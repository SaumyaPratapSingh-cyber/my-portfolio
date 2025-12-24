import React from "react";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <section className="py-20 px-5 lg:px-28 bg-white border-t-2 border-black" id="contact">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-6xl font-extrabold mb-6"
        >
          Let's <span className="text-white" style={{ WebkitTextStroke: "2px black" }}>Talk?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          I'm currently open to new opportunities and collaborations.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center gap-6"
        >
          <a
            href="mailto:saumyrajpoot666@gmail.com"
            className="bg-black text-white px-8 py-4 text-xl font-bold rounded-lg border-2 border-black hover:bg-white hover:text-black transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)]"
          >
            Say Hello 👋
          </a>

          <div className="flex gap-6 mt-8">
            {[
              { icon: BiLogoGmail, link: "mailto:saumyrajpoot666@gmail.com" },
              { icon: BsGithub, link: "https://github.com/SaumyaPratapSingh-cyber" },
              { icon: BsLinkedin, link: "https://www.linkedin.com/in/saumya-pratap-singh-a27890287" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:scale-125 transition-transform text-black"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </motion.div>

        <footer className="mt-20 pt-10 border-t border-gray-200 text-sm font-semibold text-gray-500">
          <p>Designed & Built by Saumya Pratap Singh © 2024</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;