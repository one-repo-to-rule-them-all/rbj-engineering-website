import { Link } from "react-router-dom";
import "../assets/styles.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>RBJ Engineering Services, LLC</h1>
      </div>
      <ul className="nav-list">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/consulting">Consulting</Link></li>
        <li><Link to="/personal">Personal</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
