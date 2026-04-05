'use client';

import { useEffect, useState } from "react";

const skillData = [
  { name: "ReactJS", level: 95, color: "bg-blue-500" },
  { name: "MySQL", level: 90, color: "bg-green-600" },
  { name: "JavaScript", level: 85, color: "bg-yellow-500" },
  { name: "TypeScript", level: 80, color: "bg-orange-500" },
  { name: "Tailwind CSS", level: 100, color: "bg-teal-500" },
  { name: "NextJS", level: 70, color: "bg-indigo-500" },
  { name: "Three.js", level: 70, color: "bg-purple-500" },
  { name: "NodeJS", level: 70, color: "bg-gray-500" },
  { name: "MongoDB", level: 70, color: "bg-emerald-600" },
  { name: "Laravel", level: 65, color: "bg-red-500" },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Technical <span className="text-blue-600">Expertise</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive set of tools and technologies I use to bring digital ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skillData.map((skill, index) => (
            <div 
              key={index} 
              className="group"
              data-aos="fade-up" 
              data-aos-delay={index * 50}
            >
              <div className="flex justify-between items-end mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${skill.color} animate-pulse`}></div>
                  <span className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {skill.name}
                  </span>
                </div>
                <span className="text-sm font-mono font-bold text-slate-400">
                  {isVisible ? skill.level : 0}%
                </span>
              </div>

              <div className="relative h-3 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-50 shadow-inner">
                {/* Background Glow Effect */}
                <div 
                  className={`absolute top-0 left-0 h-full ${skill.color} opacity-20 blur-sm transition-all duration-1000 ease-out`}
                  style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                ></div>
                
                {/* Main Progress Bar */}
                <div 
                  className={`absolute top-0 left-0 h-full ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                  style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                >
                  {/* Subtle Stripe Pattern */}
                  <div className="w-full h-full opacity-10 bg-[linear-gradient(45deg,rgba(255,255,255,.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.2)_50%,rgba(255,255,255,.2)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Skill Cloud (Optional) */}
        <div className="mt-20 flex flex-wrap justify-center gap-4 opacity-50">
          {["Express.js", "Axios", "WebSocket", "Bootstrap", "Git", "Python", "Java"].map((s) => (
            <span key={s} className="px-4 py-1 bg-slate-100 rounded-full text-sm font-medium text-slate-600 border border-slate-200">
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}