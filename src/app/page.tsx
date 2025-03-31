"use client";

import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import AboutPage from "./about/page";
import Achievements from "./achievement/page";
import ProjectsPage from "./projects/page";
import Skills from "./skills/page";
import AIChatbot from "../components/AIChatbot";
import ModelViewer from "../components/ModelViewer";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section (Appears from top with fade-in) */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <AIChatbot />
    
        <Hero />
       
      
      <ModelViewer />

      </motion.div>

      {/* About Section (Fades in from the left) */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <AboutPage />
      </motion.div>

      {/* Skills Section (Fades in from the right) */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Skills />
      </motion.div>

      {/* Projects Section (Scale Up Effect) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ProjectsPage />
      </motion.div>

      {/* Achievements Section (Slide Up Effect) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Achievements />
      </motion.div>

      {/* Contact Form (Fade-In Effect) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <ContactForm />
      </motion.div>
    </div>
  );
}
