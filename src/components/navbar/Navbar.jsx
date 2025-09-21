import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <>
      <Sidebar />
      <div className="navbar">
        <div className="wrapper">
          <Link to="/" className="logo">SPS.</Link>
          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/experience">Experience</NavLink> {/* Add link */}
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;