'use client'

import { useState } from "react";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate sending a message (you should integrate actual backend logic here)
    setTimeout(() => {
      setIsLoading(false);
      setIsMessageSent(true);
      // Reset the form or handle any errors here
    }, 2000);
  };

  return (
    <section id="contact" className="contact section py-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
      <div className="container mx-auto text-center px-4 md:px-8">
        {/* Section Title */}
        <div data-aos="fade-up" className="section-title mb-12">
          <h2 className="text-4xl font-bold text-white">Contact</h2>
          <p className="text-white text-lg mt-4">Ravi Ranjan Kumar from Bihar Saran, Bihar 841433</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info Section */}
          <div className="info-wrap space-y-8">
            <div className="info-item flex items-start space-x-4" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-geo-alt text-4xl text-yellow-300 flex-shrink-0"></i>
              <div>
                <h3 className="text-xl font-semibold text-white">Address</h3>
                <p className="text-white">Saran, Bakwan, Panapur 841433</p>
              </div>
            </div>

            <div className="info-item flex items-start space-x-4" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-telephone text-4xl text-yellow-300 flex-shrink-0"></i>
              <div>
                <h3 className="text-xl font-semibold text-white">Call Us</h3>
                <p className="text-white">+91 6200771962</p>
              </div>
            </div>

            <div className="info-item flex items-start space-x-4" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-envelope text-4xl text-yellow-300 flex-shrink-0"></i>
              <div>
                <h3 className="text-xl font-semibold text-white">Email Us</h3>
                <p className="text-white">ravi.r.kr.9199@gmail.com</p>
              </div>
            </div>

            {/* Google Map Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14393.69123746516!2d84.8479202!3d26.1138532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992cf61b168e1bd%3A0xf47b215415446eba!2sBakwan%20Devi%20Sathan!5e0!3m2!1sen!2sin!4v1692438234567!5m2!1sen!2sin"
              frameBorder="0"
              style={{ border: 0, width: "100%", height: "270px" }}
              
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location"
            />
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <form onSubmit={handleFormSubmit} className="space-y-6" data-aos="fade-up" data-aos-delay="200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name-field" className="text-white font-semibold">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name-field"
                    className="w-full p-3 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email-field" className="text-white font-semibold">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email-field"
                    className="w-full p-3 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject-field" className="text-white font-semibold">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject-field"
                  className="w-full p-3 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="message-field" className="text-white font-semibold">Message</label>
                <textarea
                  name="message"
                  id="message-field"
                  rows={6}
                  className="w-full p-3 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  required
                ></textarea>
              </div>

              {/* Form Status */}
              <div className="text-center space-y-4">
                {isLoading && <div className="loading text-white">Loading...</div>}
                {errorMessage && <div className="error-message text-red-500">{errorMessage}</div>}
                {isMessageSent && (
                  <div className="sent-message text-green-500">Your message has been sent. Thank you!</div>
                )}
                <button
                  type="submit"
                  className="w-full py-3 bg-yellow-300 text-gray-900 font-semibold rounded-md hover:bg-yellow-400 transition-transform transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

