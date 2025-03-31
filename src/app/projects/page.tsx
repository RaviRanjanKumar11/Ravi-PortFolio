"use client"
import { useState } from "react";
import { HospitalItems, ApiGroup, ApiUserAdminItems, HotelItems } from "../../utils/data";
import Image from "next/image";

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Hospital");


  // Function to handle button click and filter items
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  // Get filtered items based on selected category
  const getFilteredItems = (category: string) => {
    switch (category) {
      case "Hospital":
        return HospitalItems;
      case "ApiGroup":
        return ApiGroup;
      case "ApiUserAdmin":
        return ApiUserAdminItems;
      case "HotelBooking":
        return HotelItems;
      default:
        return [];
    }
  };

  return (
    <section className="bg-gradient-to-r from-indigo-500 font-mono to-purple-600 md:py-6 py-1">
  <div className="container mx-auto md:px-2 lg:px-8 px-2">
    {/* Section Header */}
    <div className="text-center mb-8">
      <h2 className="text-5xl font-extrabold text-white mb-2 transform transition-all duration-500 hover:scale-105">
        Projects
      </h2>
      <p className="text-gray-200 text-lg max-w-3xl mx-auto">
        Explore some of our amazing projects. Click on a category to explore more.
      </p>
    </div>

    {/* Filters */}
    <div className="flex justify-center md:space-x-5 space-x-1 mb-4">
      {["Hospital", "ApiGroup", "ApiUserAdmin", "HotelBooking"].map((category) => (
        <button
          key={category}
          className={`md:px-6 md:py-3 px-2 py-1 md:text-lg text-sm font-semibold rounded-full transition-all duration-300 transform ${
            selectedCategory === category
              ? "bg-blue-600 text-white scale-105"
              : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white"
          } shadow-lg hover:scale-110`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>

    {/* Items Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8" >
        {getFilteredItems(selectedCategory).map((item,index) => (
          <div
         
            key={item.id || index}
            className="group relative overflow-hidden h-72 w-full bg-sky-300 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
          >
            <div className="absolute w-56 h-40 bg-gray-50 z-10 top-32 left-4 opacity-50 rounded-2xl blur duration-300 group-hover:blur-none [transform:rotate3d(1_,-1,_1,_30deg)] group-hover:[transform:rotate3d(1_,-1,_1,_0deg)]"></div>
            <div className="absolute w-56 h-40 z-10 top-32 left-4 p-1 rounded-2xl flex flex-col justify-end items-start gap-2 [transform:rotate3d(1_,-1,_1,_30deg)] group-hover:[transform:rotate3d(1_,-1,_1,_0deg)]">
              <span className="text-red-800 text-2xl font-extrabold">
                {item.title}
              </span>
              <p className="text-gray-800 font-bold line-clamp-3">
                {item.description}
              </p>
              <button
                className="bg-gray-50 px-3 py-2 rounded-xl hover:bg-sky-600 text-gray-800 hover:text-white transition-all"
               
              >
                {item.detailsLink}
              </button>
            </div>
              <Image
                          width={500}
                          height={500}
              src={item.image}
              alt={item.title}
              className="w-full h-72 object-cover group-hover:scale-105 transition-all duration-500"
            />
          </div>
        ))}
      </div>
     
    </div>
</section>

  );
};

export default ProjectsPage;
