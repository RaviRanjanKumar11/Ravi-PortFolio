'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaDownload, FaPrint, FaShareAlt, FaHeart } from 'react-icons/fa';

const Achievements: React.FC = () => {
  const [likes, setLikes] = useState<number>(0);

  // Load likes from localStorage on component mount
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
            <title>Resume</title>
            <style>
              body { text-align: center; padding: 20px; }
              img { max-width: 100%; height: auto; border-radius: 10px; box-shadow: 0px 4px 10px rgba(0,0,0,0.2); }
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
    localStorage.setItem("resumeLikes", newLikes.toString()); // Save to localStorage
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Resume',
        text: 'Check out my resume!',
        url: window.location.href,
      })
      .then(() => console.log('Resume shared successfully'))
      .catch((error) => console.error('Error sharing:', error));
    } else {
      alert("Sharing not supported on this browser.");
    }
  };

  return (
    <section className="py-12 bg-gray-50 font-mono" id="achievements">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg"> 
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Certifications, Awards & Experience Letters</h3>
            <ul className="list-disc pl-5 space-y-3 text-gray-600">
              <li><span className="font-semibold">Oracle SQL Explorer Certification</span> - Oracle</li>
              <li><span className="font-semibold">Full Stack Naresh IT Certification</span> - NareshIT </li>
              <li><span className="font-semibold">Part Time Mentor in HIIT 2 years</span> - HIIT</li>
              <li><span className="font-semibold">Certified InterViewBit</span> - InterViewBit</li>
              <li><span className="font-semibold">Work Experience As SDE</span> - InfoCartGroup</li>
            </ul>
          </div>

          {/* Resume Section */}
          <div className="bg-white p-1 rounded-lg shadow-lg flex flex-col items-center relative">
            {/* Like Counter */}
            <div className="absolute top-2 right-2 flex items-center bg-gray-900 text-white px-3 py-1 rounded-full">
              <FaHeart className="text-red-500 mr-1 animate-pulse" />
              <span>{likes}</span>
            </div>

            <h3 className="text-2xl font-semibold text-gray-700 mb-1">Ravi Ranjan Kumar</h3>
            <div className="mb-3 relative">
              <Image
                width={600}
                height={500}
                src="/assets/img/ResumeRavi.png"
                alt="Resume"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="flex mt-3 gap-1">
              {/* Like Button */}
              <button
                onClick={handleLike}
                className="flex items-center bg-red-500 text-white px-1 py-0 rounded-lg hover:bg-red-600 transition duration-300"
              >
                <FaHeart className="mr-1" /> Like
              </button>

              {/* Download Resume Button */}
              <a
                href="/assets/img/ResumeRavi.png"
                download="ResumeRavi.png"
                className="flex items-center bg-blue-500 text-white px-1 py-0 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                <FaDownload className="mr-1" /> Download
              </a>

              {/* Print Resume Button */}
              <button
                onClick={handlePrint}
                className="flex items-center bg-green-500 text-white px-1 py-0 rounded-lg hover:bg-green-600 transition duration-300"
              >
                <FaPrint className="mr-1" /> Print
              </button>

              {/* Share Button */}
              <button
                onClick={handleShare}
                className="flex items-center bg-gray-700 text-white px-1 py-0 rounded-lg hover:bg-gray-800 transition duration-300"
              >
                <FaShareAlt className="mr-1" /> Share
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
