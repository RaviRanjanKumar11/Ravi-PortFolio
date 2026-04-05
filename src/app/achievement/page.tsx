'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaDownload, FaPrint, FaShareAlt, FaHeart, FaAward, FaCertificate, FaBriefcase } from 'react-icons/fa';

const Achievements: React.FC = () => {
  const [likes, setLikes] = useState<number>(0);

  useEffect(() => {
    const storedLikes = localStorage.getItem("resumeLikes");
    if (storedLikes) {
      setLikes(parseInt(storedLikes, 10));
    }
  }, []);

  const handlePrint = () => {
    const imgUrl = "/assets/img/ResumeRavi.png";
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Resume - Ravi Ranjan Kumar</title>
            <style>
              body { text-align: center; padding: 20px; background: #f4f4f4; }
              img { max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0px 10px 30px rgba(0,0,0,0.1); }
            </style>
          </head>
          <body>
            <img src="${imgUrl}" alt="Resume">
            <script>
              window.onload = function() {
                window.print();
                setTimeout(() => window.close(), 1000);
              };
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    }
  };

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem("resumeLikes", newLikes.toString());
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Ravi Ranjan Kumar - Resume',
        text: 'Check out this impressive portfolio and resume!',
        url: window.location.href,
      }).catch((error) => console.error('Error sharing:', error));
    } else {
      alert("Sharing not supported on this browser.");
    }
  };

  const certs = [
    { title: "Oracle SQL Explorer", org: "Oracle", icon: <FaCertificate className="text-blue-500" /> },
    { title: "Full Stack Development", org: "Naresh IT", icon: <FaAward className="text-yellow-500" /> },
    { title: "Part Time Mentor (2 yrs)", org: "HIIT", icon: <FaBriefcase className="text-purple-500" /> },
    { title: "Certified InterviewBit", org: "InterviewBit", icon: <FaCertificate className="text-green-500" /> },
    { title: "Work Experience As SDE", org: "InfoCartGroup", icon: <FaBriefcase className="text-orange-500" /> },
  ];

  return (
    <section className="py-20 bg-slate-50 font-sans overflow-hidden" id="achievements">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Achievements & <span className="text-blue-600">Resume</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">
            A journey of continuous learning, professional certifications, and hands-on industry experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Certifications Bento Grid */}
          <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
            <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
              Professional Milestones
            </h3>
            <div className="grid gap-4">
              {certs.map((cert, i) => (
                <div key={i} className="flex items-center p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                  <div className="p-3 rounded-xl bg-slate-50 group-hover:bg-white group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-slate-800">{cert.title}</h4>
                    <p className="text-sm text-slate-500">{cert.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Resume Frame */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="relative bg-white p-4 rounded-[2rem] shadow-2xl border border-slate-200">
              
              {/* Floating Like Counter */}
              <div className="absolute -top-4 -right-4 z-20 flex items-center bg-slate-900/90 backdrop-blur-md text-white px-4 py-2 rounded-2xl shadow-xl border border-white/20">
                <FaHeart className="text-red-500 mr-2 animate-pulse" />
                <span className="font-bold text-lg">{likes}</span>
              </div>

              {/* Resume Image Container */}
              <div className="relative group overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  width={800}
                  height={1000}
                  src="/assets/img/ResumeRavi.png"
                  alt="Ravi Ranjan Kumar Resume"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                   <button onClick={handleLike} className="p-4 bg-white text-red-500 rounded-full hover:scale-110 transition shadow-xl">
                      <FaHeart size={24} />
                   </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                <button
                  onClick={handleLike}
                  className="flex flex-col items-center justify-center py-3 px-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition font-bold text-sm gap-1"
                >
                  <FaHeart /> <span>Like</span>
                </button>

                <a
                  href="/assets/img/ResumeRavi.png"
                  download="ResumeRavi.png"
                  className="flex flex-col items-center justify-center py-3 px-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-100 transition font-bold text-sm gap-1"
                >
                  <FaDownload /> <span>Get PDF</span>
                </a>

                <button
                  onClick={handlePrint}
                  className="flex flex-col items-center justify-center py-3 px-2 bg-green-50 text-green-600 rounded-xl hover:bg-green-100 transition font-bold text-sm gap-1"
                >
                  <FaPrint /> <span>Print</span>
                </button>

                <button
                  onClick={handleShare}
                  className="flex flex-col items-center justify-center py-3 px-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition font-bold text-sm gap-1"
                >
                  <FaShareAlt /> <span>Share</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;