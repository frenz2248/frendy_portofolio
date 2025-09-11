import { Hero } from "./components/main/Hero";
import { About } from "./components/main/About";
import { Projects } from "./components/main/Projects";
import { Contact } from "./components/main/Contact";
import { Skill } from "./components/main/Skill";
import { Footer } from "./components/main/Footer";
import { Navbar } from "./components/main/Navbar";
import { MouseTrail } from "./components/main/MouseTrail";

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
