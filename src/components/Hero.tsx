import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative font-mono h-screen flex items-center justify-center bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
      <Image
  width={500}
  height={500}
  src="/assets/img/hero-bg.jpg"
  alt="Hero Background"
  className="w-full h-full object-cover"
/>


        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
      </div>

      {/* Hero Content */}
      <div
        className="relative z-10 text-center px-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide mb-6 animate-fadeInUp">
          Ravi Ranjan Kumar
        </h1>
        <p className="text-lg md:text-2xl mb-4">
          <span
            className="text-yellow-400 font-semibold tracking-wider animate-smoke text-xl"
            data-typed-items="Full Stack Java Developer, SDE, Freelancer, MERN Stack Developer"
          >
            Software Developer, MERN Stack, Freelancer, Mentor
          </span>
        </p>
        <button
          className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transform hover:scale-105 transition-transform duration-300"
          data-aos="fade-in"
        >
          Hire Me
        </button>
      </div>

      {/* Animated Shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-50 animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 rounded-full opacity-50 animate-pulse"></div>
    </section>
  );
}
