import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebook />, href: "https://facebook.com", label: "Facebook" },
    { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
    { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/ravi-ranjan-kumar-753a39238/", label: "LinkedIn" },
    { icon: <FaGithub />, href: "https://github.com/RaviRanjanKumar11", label: "Github" },
  ];

  return (
    <footer className="relative bg-gray-950 text-gray-300 py-3 border-t border-gray-800">
      {/* Decorative top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>

      <div className="container mx-auto px-3">
        <div className="flex flex-col items-center justify-center">
          
          {/* Logo / Name Section */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Ravi Ranjan <span className="text-yellow-500">Kumar</span>
            </h2>
            <p className="text-sm text-gray-500 mt-2 max-w-xs mx-auto">
              Building digital experiences with precision and passion.
            </p>
          </div>

          {/* Social Icons with Tooltips & Hover Effects */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="group relative p-3 bg-gray-900 rounded-xl border border-gray-800 text-gray-400 
                           hover:text-yellow-400 hover:border-yellow-500/50 hover:shadow-[0_0_15px_rgba(234,179,8,0.1)] 
                           transition-all duration-300 ease-out hover:-translate-y-1"
              >
                <span className="text-xl md:text-2xl">{link.icon}</span>
                {/* Subtle Tooltip */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-[10px] 
                               rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          {/* Bottom Divider & Copyright */}
          <div className="w-full pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-medium tracking-wide">
              &copy; {currentYear} <span className="text-white">Ravi Ranjan Kumar</span>. All rights reserved.
            </p>
            
            <nav className="flex gap-6 text-xs uppercase tracking-widest font-semibold">
              <a href="#" className="hover:text-yellow-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Contact</a>
            </nav>
          </div>

        </div>
      </div>
    </footer>
  );
}