
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

const About = () => {
  const defaultOptions = {
    reverse: false,
    max: 15,
    perspective: 1000,
    scale: 1.02,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <section className="py-24 px-6 lg:px-32 relative overflow-hidden bg-hive-black text-white" id="about">
      {/* Background Decorative Blobs - Updated for Neural Theme */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-72 h-72 bg-hive-blue/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-hive-cyan/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-20">

        {/* Left: Image with Tilt and Glass Effect */}
        <motion.div
          className="lg:w-2/5 relative"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
        >
          <Tilt options={defaultOptions} className="relative z-10">
            <div className="relative border border-white/20 bg-hive-black/50 backdrop-blur-2xl p-4 rounded-3xl shadow-[0_8px_32px_0_rgba(0,123,255,0.2)] overflow-hidden group">
              {/* Glossy sheen overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-hive-cyan/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"></div>

              <img
                src="/profile.png"
                alt="Profile"
                className="w-full h-auto object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-105"
              />

              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-hive-cyan/60 rounded-tl-xl pointer-events-none"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-hive-cyan/60 rounded-br-xl pointer-events-none"></div>
            </div>
          </Tilt>
        </motion.div>

        {/* Right: Text content */}
        <motion.div
          className="lg:w-3/5"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 50 }}
        >
          <div className="relative">
            <h2 className="text-5xl lg:text-6xl font-space font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white drop-shadow-sm flex items-center gap-4">
              About <span className="text-hive-black bg-hive-cyan px-4 py-1 -rotate-3 inline-block rounded-lg transform hover:rotate-0 transition-transform duration-300 shadow-2xl skew-x-[-10deg] border border-white/20">Me</span>
            </h2>
          </div>

          <div className="bg-hive-black/50 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-lg hover:shadow-hive-blue/20 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-hive-blue/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

            <p className="text-gray-300 text-lg leading-loose mb-6 font-mono font-medium relative z-10">
              I&apos;m <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-hive-blue to-hive-cyan">Saumya Pratap Singh</span>, a passionate Full Stack Developer and AI Enthusiast based in India.
              My journey in tech is driven by a curiosity to understand how things work and a desire to build solutions that make a difference.
            </p>

            <p className="text-gray-400 leading-loose text-lg relative z-10 font-mono">
              I specialize in building robust web applications using the <span className="font-bold border-b-2 border-hive-blue text-white">MERN Stack</span> and creating cross-platform mobile experiences with <span className="font-bold border-b-2 border-hive-cyan text-white">Flutter</span>.
              Beyond coding, I&apos;m deeply interested in Artificial Intelligence and its potential to reshape the future.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            <Stat number="01+" label="Years Exp." delay={0.4} />
            <Stat number="10+" label="Projects" delay={0.5} />
            <Stat number="05+" label="Tech Stacks" delay={0.6} />
            <Stat number="02+" label="Clients" delay={0.7} />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const Stat = ({ number, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: delay }}
    className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-center hover:bg-white/30 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 group cursor-default"
  >
    <h4 className="text-4xl font-black text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">{number}</h4>
    <p className="text-xs text-hive-cyan font-bold uppercase tracking-wider mt-2 group-hover:text-white transition-colors">{label}</p>
  </motion.div>
)

export default About;