// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationMenuDemo from "./pages/navbar";
import Home from "./pages/home";
import AboutMe1 from "./pages/AboutMe1";
import Skills1 from "./pages/Skills1";
import ContactMe1 from "./pages/ContactMe1";
import Projects1 from "./pages/Projects1";

function App() {
  return (
    <Router>
      <NavigationMenuDemo />
      <Routes>
        <Route path="/" element={<Home id="home" />} />
        <Route path="/about" element={<AboutMe1 />} />
        <Route path="/skill" element={<Skills1 />} />
        <Route path="/contact" element={<ContactMe1 />} />
        <Route path="/projects" element={<Projects1 />} />
      </Routes>
    </Router>
  );
}

export default App;
