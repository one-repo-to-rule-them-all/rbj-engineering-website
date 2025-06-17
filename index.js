import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Vacations from "../pages/Vacations";
import Hobbies from "../pages/Hobbies";
import Resume from "../pages/Resume";
import About from "../pages/About";
import Consulting from "../pages/Consulting";
import Personal from "../pages/Personal";
import Blog from "../pages/Blog";
import BlogPost from "../components/BlogPost";
import Contact from "../pages/Contact";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="/home" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/vacations" element={<Vacations />} />
    <Route path="/hobbies" element={<Hobbies />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="/consulting" element={<Consulting />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:id" element={<BlogPost />} />
    <Route path="/personal" element={<Personal />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
  </Routes>
);

export default AppRoutes;
