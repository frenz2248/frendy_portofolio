import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Skill } from "./components/Skill";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { MouseTrail } from "./components/MouseTrail";

export default function HomePage() {
  return (
    <main className="bg-[#031930] text-[#D1DDED] min-h-screen scroll-smooth relative overflow-hidden">
      <MouseTrail />
      <Navbar />

      {/* Hero Section */}
      <div id="hero">
        <Hero />
      </div>

      {/* Projects Section */}
      <div id="projects">
        <Projects />
      </div>

      {/* Skills Section */}
      <div id="tech">
        <Skill />
      </div>

      {/* About Section */}
      <div id="about">
        <About />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
