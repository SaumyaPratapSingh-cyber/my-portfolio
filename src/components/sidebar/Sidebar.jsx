import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import "./sidebar.scss";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(1000px at 50px 50px)", // Slightly smaller circle
      transition: { type: "spring", stiffness: 20 },
    },
    closed: {
      clipPath: "circle(25px at 50px 50px)",
      transition: { delay: 0.5, type: "spring", stiffness: 400, damping: 40 },
    },
  };

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links setOpen={setOpen} />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};
export default Sidebar;