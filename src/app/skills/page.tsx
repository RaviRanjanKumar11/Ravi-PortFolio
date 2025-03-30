'use client';

import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    // Animation when the component is in view
    const skillBars = document.querySelectorAll(".progress-bar");
    const onScroll = () => {
      skillBars.forEach((bar) => {
        const rect = bar.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          bar.style.width = bar.getAttribute("aria-valuenow") + "%";
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll(); // Initialize scroll position on load

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="skills" className="skills font-mono section bg-gray-50 md:py-6 py-2 px-4">
      {/* Section Title */}
      <div className="container mx-auto text-center mb-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Skills</h2>
        <p className="text-xl text-gray-600">
          MERN Stack, ReactJS, NextJS, Redux, TypeScript, Laravel, TailwindCSS, Bootstrap, Git
        </p>
      </div>
      {/* End Section Title */}

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:p-3 p-1">
        <div>
          <div className="progress mb-6">
            <span className="skill text-lg font-semibold text-gray-700">
              HTML <i className="val text-yellow-500">90%</i>
            </span>
            <div className="progress-bar-wrap bg-gray-200 h-2 rounded-full">
              <div
                className="progress-bar bg-green-500 h-2 rounded-full"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="90"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>

          <div className="progress mb-6">
            <span className="skill text-lg font-semibold text-gray-700">
              CSS <i className="val text-yellow-500">90%</i>
            </span>
            <div className="progress-bar-wrap bg-gray-200 h-2 rounded-full">
              <div
                className="progress-bar bg-blue-500 h-2 rounded-full"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>


          <div className="progress mb-6">
            <span className="skill text-lg font-semibold text-gray-700">
              Three.js <i className="val text-yellow-500">70%</i>
            </span>
            <div className="progress-bar-wrap bg-gray-200 h-2 rounded-full">
              <div
                className="progress-bar bg-blue-500 h-2 rounded-full"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>

              




          <div className="progress mb-6">
            <span className="skill text-lg font-semibold text-gray-700">
              JavaScript <i className="val text-yellow-500">85%</i>
            </span>
            <div className="progress-bar-wrap bg-gray-200 h-2 rounded-full">
              <div
                className="progress-bar bg-yellow-500 h-2 rounded-full"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>

          <div className="progress mb-6">
            <span className="skill text-lg font-semibold text-gray-700">
              Tailwind CSS <i className="val text-yellow-500">100%</i>
            </span>
            <div className="progress-bar-wrap bg-gray-200 h-2 rounded-full">
              <div
                className="progress-bar bg-teal-500 h-2 rounded-full"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>

          <div className="progress mb-6">
            <span className="skill text-lg font-semibold text-gray-700">
              Bootstrap <i className="val text-yellow-500">100%</i>
            </span>
            <div className="progress-bar-wrap bg-gray-200 h-2 rounded-full">
              <div
                className="progress-bar bg-purple-500 h-2 rounded-full"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>

          <div className="progress mb-6">
            <span className="skill text-lg font-semibold text-gray-700">
              Laravel <i className="val text-yellow-500">65%</i>
            </span>
            <div className="progress-bar-wrap bg-gray-200 h-2 rounded-full">
              <div
                className="progress-bar bg-red-500 h-2 rounded-full"
                role="progressbar"
                aria-valuenow="65"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>

          <div className="progress mb-6">
            <span className="skill text-lg font-semibold text-gray-700">
            C, Java , Python <i className="val text-yellow-500">60%</i>
            </span>
            <div className="progress-bar-wrap bg-gray-200 h-2 rounded-full">
              <div
                className="progress-bar bg-red-500 h-2 rounded-full"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>

        
        </div>

        <div>
         
        <div className="progress mb-6">
            <span className="skill text-lg font-semibold text-gray-700">
              NextJS <i className="val text-yellow-500">70%</i>
            </span>
            <div className="progress-bar-wrap bg-gray-200 h-2 rounded-full">
              <div
                className="progress-bar bg-indigo-500 h-2 rounded-full"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>

          <div className="progress mb-6">
            <span className="skill text-lg font-semibold text-gray-700">
              ReactJS <i className="val text-yellow-500">90%</i>
            </span>
            <div className="progress-bar-wrap bg-gray-200 h-2 rounded-full">
              <div
                className="progress-bar bg-blue-600 h-2 rounded-full"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>

          <div className="progress mb-6">
            <span className="skill text-lg font-semibold text-gray-700">
              TypeScript <i className="val text-yellow-500">60%</i>
            </span>
            <div className="progress-bar-wrap bg-gray-200 h-2 rounded-full">
              <div
                className="progress-bar bg-orange-500 h-2 rounded-full"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>

          <div className="progress mb-6">
            <span className="skill text-lg font-semibold text-gray-700">
              NodeJS <i className="val text-yellow-500">60%</i>
            </span>
            <div className="progress-bar-wrap bg-gray-200 h-2 rounded-full">
              <div
                className="progress-bar bg-gray-400 h-2 rounded-full"
                role="progressbar"
                aria-valuenow="60"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>

          <div className="progress mb-6">
            <span className="skill text-lg font-semibold text-gray-700">
              MySQL <i className="val text-yellow-500">90%</i>
            </span>
            <div className="progress-bar-wrap bg-gray-200 h-2 rounded-full">
              <div
                className="progress-bar bg-green-600 h-2 rounded-full"
                role="progressbar"
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>
         
          <div className="progress mb-6">
            <span className="skill text-lg font-semibold text-gray-700">
              MongoDB <i className="val text-yellow-500">70%</i>
            </span>
            <div className="progress-bar-wrap bg-gray-200 h-2 rounded-full">
              <div
                className="progress-bar bg-teal-600 h-2 rounded-full"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>


          <div className="progress mb-6">
            <span className="skill text-lg font-semibold text-gray-700">
            Axios, WebSocket <i className="val text-yellow-500">70%</i>
            </span>
            <div className="progress-bar-wrap bg-gray-200 h-2 rounded-full">
              <div
                className="progress-bar bg-teal-600 h-2 rounded-full"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>


          <div className="progress mb-6">
            <span className="skill text-lg font-semibold text-gray-700">
            Express.js <i className="val text-yellow-500">70%</i>
            </span>
            <div className="progress-bar-wrap bg-gray-200 h-2 rounded-full">
              <div
                className="progress-bar bg-black h-2 rounded-full"
                role="progressbar"
                aria-valuenow="70"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
