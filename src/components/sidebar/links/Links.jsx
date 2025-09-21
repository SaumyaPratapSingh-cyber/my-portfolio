import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const variants = {
  open: { transition: { staggerChildren: 0.1 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};
const itemVariants = {
  open: { y: 0, opacity: 1 },
  closed: { y: 50, opacity: 0 },
};

const Links = ({ setOpen }) => {
  const items = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" }, // Add link
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <NavLink 
          to={item.path} 
          key={item.name} 
          onClick={() => setOpen(false)}
        >
          <motion.div variants={itemVariants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            {item.name}
          </motion.div>
        </NavLink>
      ))}
    </motion.div>
  );
};
export default Links;