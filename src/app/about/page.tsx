
import { About } from "../../utils/about";

const AboutPage: React.FC = () => {
  return (
    <section className="about section py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white">

      {/* Section Title */}
      <div className="container mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 animate-text">
          About
        </h2>
        <p className="text-lg md:text-xl leading-relaxed mx-auto max-w-2xl font-mono">
          Ravi Ranjan Kumar is a skilled full-stack developer MERN, JAVA,
           Laravel with a B.C.A in Computer Science from BRABU University,
            Muz. He has hands-on experience with Java, PHP, and modern web
             technologies like React.js, Laravel, and Node.js. He has contributed to various projects,
              including a Hospital Management System and a Movie Recommendation Engine.
               He has also worked as a trainer in web development, enhancing
                his proficiency in HTML, CSS, and JavaScript. He is passionate about AI,
                 new tech APIs, and continuous learning.
        </p>
      </div>

      {About?.map((item, index) => (
        <div
          className="container mx-auto mb-16"
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 font-mono items-center">
            <img
              src={item.profile}
              className="img-fluid rounded-lg shadow-xl w-full md:w-[60%] transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
              alt="Ravi Ranjan Kumar"
            />
            <div className="content text-center md:text-left">
              <h2 className="text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                {item.post}
              </h2>
              <p className="italic text-lg text-white mb-6">
                {item.nameDetails}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="space-y-4 text-lg">
                  <li className="flex items-center text-gray-200">
                    <i className="bi bi-chevron-right mr-2 text-yellow-400"></i>
                    <strong>Birthday:</strong> <span>{item.bday}</span> 
                  </li>
                  <li className="flex items-center text-gray-200">
                    <i className="bi bi-chevron-right mr-2 text-yellow-400"></i>
                    <strong>Website:</strong> <span>{item.website}</span>
                  </li>
                  <li className="flex items-center text-gray-200">
                    <i className="bi bi-chevron-right mr-2 text-yellow-400"></i>
                    <strong>Phone:</strong> <span>{item.contact}</span>
                  </li>
                  <li className="flex items-center text-gray-200">
                    <i className="bi bi-chevron-right mr-2 text-yellow-400"></i>
                    <strong>City:</strong> <span>{item.city}</span>
                  </li>
                </ul>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-center text-gray-200">
                    <i className="bi bi-chevron-right mr-2 text-yellow-400"></i>
                    <strong>Age:</strong> <span>{item.age}</span>
                  </li>
                  <li className="flex items-center text-gray-200">
                    <i className="bi bi-chevron-right mr-2 text-yellow-400"></i>
                    <strong>Degree:</strong> <span>{item.degree}</span>
                  </li>
                  <li className="flex items-center text-gray-200">
                    <i className="bi bi-chevron-right mr-2 text-yellow-400"></i>
                    <strong>Email:</strong> <span>{item.email}</span>
                  </li>
                  <li className="flex items-center text-gray-200">
                    <i className="bi bi-chevron-right mr-2 text-yellow-400"></i>
                    <strong>Freelance:</strong> <span>{item.freelance}</span>
                  </li>
                </ul>
              </div>

              <p className="mt-6 text-lg text-white opacity-90">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AboutPage;
