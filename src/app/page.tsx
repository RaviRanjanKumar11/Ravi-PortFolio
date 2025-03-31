import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import AboutPage from "./about/page";
import Achievements from "./achievement/page";
import ProjectsPage from "./projects/page";
import Skills from "./skills/page";

export default function HomePage() {
  
  return (
    <div>
     
      <Hero />
      <AboutPage />
      <Skills />
      <ProjectsPage />
      <Achievements />
      <ContactForm />
    </div>
  );
}
