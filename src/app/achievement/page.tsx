'use client';

import React from 'react';

const Achievements: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 font-mono" id="achievements">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Achievements</h2>

        {/* First Section: Certifications, Awards, Experience Letters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Certifications, Awards & Experience Letters</h3>
            <ul className="list-disc pl-5 space-y-3 text-gray-600">
              <li>
                <span className="font-semibold">Oracle SQL Explorer Certification</span> - Oracle
              </li>
              <li>
                <span className="font-semibold">Full Stack Naresh IT Certification</span> - NareshIT 
              </li>
              <li>
                <span className="font-semibold">Certified InterViewBit</span> - InterViewBit
              </li>
              <li>
                <span className="font-semibold">Work Experience As SDE</span> - InfoCartGroup
              </li>
              {/* Add more certifications and awards here */}
            </ul>
          </div>

          {/* Second Section: Resume Picture, Download, and Print */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">My Resume</h3>
            <div className="mb-6">
              {/* Resume Picture */}
              <img
                src="/path-to-your-resume-image.jpg"
                alt="Resume"
                className="w-72 h-auto object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="space-x-4">
              {/* Download Resume Button */}
              <a
                href="/path-to-your-resume.pdf"
                download
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Download Resume
              </a>
              {/* Print Resume Button */}
              <button
                onClick={() => window.print()}
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Print Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
