'use client';
import { useState } from "react";
import { FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsMessageSent(true);
      // Reset logic would go here
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-900 overflow-hidden font-sans">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info Section */}
          <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl h-full">
              <div className="space-y-10">
                <ContactInfoItem 
                  icon={<FaMapMarkerAlt className="text-blue-500" />}
                  title="Location"
                  detail="Saran, Bakwan, Panapur 841433, Bihar"
                />
                <ContactInfoItem 
                  icon={<FaPhoneAlt className="text-green-500" />}
                  title="Call Me"
                  detail="+91 6200771962"
                />
                <ContactInfoItem 
                  icon={<FaEnvelope className="text-orange-500" />}
                  title="Email Me"
                  detail="ravi.r.kr.9199@gmail.com"
                />
              </div>

              {/* Map Container */}
              <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.671823902341!2d84.7733!3d26.0022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDAwJzA3LjkiTiA4NMKwNDYnMjMuOSJF!5e0!3m2!1sen!2sin!4v1647854442000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Location Map"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300 ml-1">Your Name</label>
                    <input
                      type="text"
                      required
                      className="w-full bg-slate-800/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300 ml-1">Your Email</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-slate-800/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                      placeholder="name@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300 ml-1">Subject</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-slate-800/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="Inquiry about project"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300 ml-1">Message</label>
                  <textarea
                    rows={5}
                    required
                    className="w-full bg-slate-800/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                    placeholder="Tell me more about your needs..."
                  ></textarea>
                </div>

                <div className="pt-4">
                  {isMessageSent ? (
                    <div className="bg-green-500/20 border border-green-500/50 text-green-400 p-4 rounded-xl text-center font-medium animate-bounce">
                      🚀 Message sent successfully! I'll get back to you soon.
                    </div>
                  ) : (
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full group flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>
                          Send Message <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoItem({ icon, title, detail }: { icon: React.ReactNode, title: string, detail: string }) {
  return (
    <div className="flex items-center gap-5 group">
      <div className="w-14 h-14 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 text-2xl group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300">
        {icon}
      </div>
      <div>
        <h4 className="text-slate-400 text-sm font-medium uppercase tracking-widest">{title}</h4>
        <p className="text-white font-semibold text-lg">{detail}</p>
      </div>
    </div>
  );
}