import { About } from "../../utils/about";
import Image from "next/image";

const AboutPage: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-slate-900 text-white">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl font-extrabold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              About Me
            </span>
          </h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mx-auto max-w-3xl font-light">
            I am a passionate Full-Stack Developer specializing in building high-performance 
            web applications. With a solid foundation in modern frameworks, I bridge the gap 
            between robust backend logic and elegant frontend design.
          </p>
        </div>

        {About?.map((item, index) => (
          <div
            key={index}
            className="group"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl transition-all duration-300 hover:border-white/20">
              
              {/* Image Section */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <Image
                    width={500}
                    height={500}
                    src={item.profile}
                    className="relative rounded-2xl shadow-2xl w-full max-w-sm object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    alt={item.post}
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:col-span-7">
                <h3 className="text-3xl font-bold mb-2 text-white">
                  {item.post}
                </h3>
                <p className="text-orange-400 font-medium mb-6 text-lg italic">
                  {item.nameDetails}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 border-y border-white/10 py-8 my-6">
                  {[
                    { label: "Birthday", value: item.bday },
                    { label: "Age", value: item.age },
                    { label: "Website", value: item.website, isLink: true },
                    { label: "Degree", value: item.degree },
                    { label: "Phone", value: item.contact },
                    { label: "Email", value: item.email },
                    { label: "City", value: item.city },
                    { label: "Freelance", value: item.freelance },
                  ].map((info, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <span className="text-orange-500 mt-1.5">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" />
                        </svg>
                      </span>
                      <div className="flex flex-col">
                        <span className="text-gray-400 text-sm uppercase tracking-wider font-bold">
                          {info.label}
                        </span>
                        <span className="text-gray-100 font-medium truncate max-w-[200px]">
                          {info.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed text-lg">
                  {item.description}
                </p>
                
                <button className="mt-8 px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full font-bold text-white shadow-lg hover:shadow-orange-500/20 hover:scale-105 transition-all">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutPage;