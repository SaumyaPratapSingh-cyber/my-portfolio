import { motion } from "framer-motion";
import "./pages.scss";
import { skills as skillData } from "../constants";

const Skills = () => {
  return (
    <motion.div 
      className="page skills-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="wrapper">
        <h1>My Technical <span>Arsenal</span></h1>
        <p className="page-intro">
          A collection of the primary technologies and tools I utilize to build modern, efficient, and scalable applications.
        </p>
        <div className="skill-categories">
          {skillData.map((category, catIndex) => (
            <motion.div 
              className="skill-category" 
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2>{category.title}</h2>
              <div className="icon-cluster">
                {category.items.map((skill, skillIndex) => (
                  <motion.img 
                    key={skill.name} 
                    src={skill.logo} 
                    alt={skill.name} 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  />
                ))}
              </div>
              <div className="tag-group">
                {category.items.map((skill) => (
                  <span className="tag" key={skill.name}>{skill.name}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default Skills;