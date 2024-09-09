import React, { useEffect } from "react";
import "./App.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Menu from "./components/menu/menu.jsx";
import About from "./pages/about/about.jsx";
import ContactResume from "./pages/contact-resume/contact";
import Contact from "./pages/contact/contact.jsx";
import Portfolio from "./pages/portfolio/portfolio.jsx";
import Presentation from "./pages/presentation/presentation.jsx";
import Skills from "./pages/skills/skills.jsx";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.utils.toArray(".section").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            toggleActions: "play none none none",
            onEnter: () => setActiveMenu(section.id),
            onEnterBack: () => setActiveMenu(section.id),
          },
        }
      );
    });

    function setActiveMenu(sectionId) {
      document.querySelectorAll(".icon-menu").forEach((icon) => {
        icon.classList.remove("active");
      });
      const activeIcon = document.querySelector(
        `#menu-${sectionId} .icon-menu`
      );
      if (activeIcon) {
        activeIcon.classList.add("active");
      }
    }

    const contactResume = document.querySelector(".contact-resume");
    if (contactResume) {
      gsap.fromTo(
        contactResume,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: contactResume,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div className="App">
      <ContactResume />
      {/* <Menu /> */}
      <div id="home" className="section">
        <Presentation />
      </div>
      <div id="about" className="section">
        <About />
      </div>
      <div id="skills" className="section">
        <Skills />
      </div>

      <div id="portfolio" className="section">
        <Portfolio />
      </div>

      <div id="contact" className="section">
        <Contact />
      </div>
    </div>
  );
}

export default App;
