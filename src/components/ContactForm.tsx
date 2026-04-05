'use client';
import { useState } from "react";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API Call
    setTimeout(() => {
      setIsLoading(false);
      setIsMessageSent(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsMessageSent(false), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-20 bg-slate-900 overflow-hidden font-sans">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In <span className="text-blue-400">Touch</span></h2>
          <p className="text-slate-400 text-lg">Ravi Ranjan Kumar | Saran, Bihar 841433</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Info Card */}
          <div className="space-y-6" data-aos="fade-right">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl shadow-2xl">
              <div className="space-y-8">
                <ContactInfo 
                  icon="bi-geo-alt" 
                  title="Address" 
                  desc="Saran, Bakwan, Panapur 841433, Bihar" 
                />
                <ContactInfo 
                  icon="bi-telephone" 
                  title="Call Us" 
                  desc="+91 6200771962" 
                />
                <ContactInfo 
                  icon="bi-envelope" 
                  title="Email Us" 
                  desc="ravi.r.kr.9199@gmail.com" 
                />
              </div>

              {/* Map Container */}
              <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114841.59479361668!2d84.7735165!3d25.9089531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992b0058b76e191%3A0x743950b3e602237a!2sSaran%2C%20Bihar!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Location"
                />
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl" data-aos="fade-left">
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Your Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-slate-800/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">Your Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-slate-800/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-500"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Subject</label>
                <input
                  type="text"
                  required
                  className="w-full bg-slate-800/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-500"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 ml-1">Message</label>
                <textarea
                  rows={5}
                  required
                  className="w-full bg-slate-800/50 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-slate-500 resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <div className="pt-4">
                {isMessageSent ? (
                  <div className="bg-green-500/20 border border-green-500/50 text-green-400 p-4 rounded-xl text-center font-medium animate-pulse">
                    ✓ Your message has been sent. Thank you!
                  </div>
                ) : (
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-component for Info Items
function ContactInfo({ icon, title, desc }: { icon: string, title: string, desc: string }) {
  return (
    <div className="flex items-center gap-5 group">
      <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400 text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg border border-blue-500/20">
        <i className={`bi ${icon}`}></i>
      </div>
      <div>
        <h3 className="text-white font-bold text-lg">{title}</h3>
        <p className="text-slate-400">{desc}</p>
      </div>
    </div>
  );
}