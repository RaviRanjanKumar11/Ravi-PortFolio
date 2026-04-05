"use client"
import { useState } from "react";
import { HospitalItems, ApiGroup, ApiUserAdminItems, HotelItems } from "../../utils/data";
import Image from "next/image";

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Hospital");

  const categories = [
    { id: "Hospital", label: "Hospital Mgmt" },
    { id: "ApiGroup", label: "API Services" },
    { id: "ApiUserAdmin", label: "Admin Panels" },
    { id: "HotelBooking", label: "Hotel Booking" }
  ];

  const getFilteredItems = (category: string) => {
    switch (category) {
      case "Hospital": return HospitalItems;
      case "ApiGroup": return ApiGroup;
      case "ApiUserAdmin": return ApiUserAdminItems;
      case "HotelBooking": return HotelItems;
      default: return [];
    }
  };

  return (
    <section className="bg-slate-900 py-20 font-sans overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Featured <span className="text-indigo-500">Projects</span>
          </h2>
          <div className="h-1.5 w-24 bg-indigo-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of full-stack applications, robust APIs, and interactive user interfaces.
          </p>
        </div>

        {/* Modern Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2.5 rounded-xl font-bold transition-all duration-300 border-2 ${
                selectedCategory === cat.id
                  ? "bg-indigo-600 border-indigo-600 text-white shadow-[0_0_20px_rgba(79,70,229,0.4)]"
                  : "bg-transparent border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {getFilteredItems(selectedCategory).map((item, index) => (
            <div
              key={item.id || index}
              className="group relative h-[400px] rounded-3xl overflow-hidden bg-slate-800 border border-slate-700 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Project Image */}
              <div className="absolute inset-0">
                <Image
                  fill
                  src={item.image}
                  alt={item.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>

              {/* Content Box */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-widest bg-indigo-500/20 text-indigo-400 rounded-lg border border-indigo-500/30">
                    {selectedCategory}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <button className="flex-1 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-indigo-500 hover:text-white transition-colors text-sm shadow-lg">
                      View Demo
                    </button>
                    {/* Github or Details Link icon placeholder */}
                    <div className="w-11 h-11 flex items-center justify-center bg-slate-700/50 backdrop-blur-md rounded-xl border border-white/10 text-white hover:bg-indigo-600 transition-colors cursor-pointer">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State check */}
        {getFilteredItems(selectedCategory).length === 0 && (
          <div className="text-center py-20 bg-slate-800/50 rounded-3xl border-2 border-dashed border-slate-700">
            <p className="text-slate-500 text-xl font-medium">Coming soon! Exciting new projects under development.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;