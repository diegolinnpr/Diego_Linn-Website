import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Dashboard from "./pages/Dashboard.jsx";

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} Diego Linn</span>
          <span className="muted">Built with React + Vite</span>
        </div>
      </footer>
    </>
  );
}
