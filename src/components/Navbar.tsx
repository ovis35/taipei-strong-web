
import { useState, useEffect } from "react";
import { Dumbbell } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Dumbbell className="h-8 w-8 text-gym-red mr-2" />
            <span className="font-bold text-2xl text-gym-black">台北健身</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gym-black hover:text-gym-red font-medium transition-colors">
              首頁
            </a>
            <a href="#features" className="text-gym-black hover:text-gym-red font-medium transition-colors">
              設施
            </a>
            <a href="#classes" className="text-gym-black hover:text-gym-red font-medium transition-colors">
              課程
            </a>
            <a href="#trainers" className="text-gym-black hover:text-gym-red font-medium transition-colors">
              教練團隊
            </a>
            <a href="#testimonials" className="text-gym-black hover:text-gym-red font-medium transition-colors">
              會員評價
            </a>
            <a href="#contact" className="text-gym-black hover:text-gym-red font-medium transition-colors">
              聯絡我們
            </a>
            <a href="#contact" className="button-primary">
              免費體驗
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-gym-red focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a href="#home" className="block py-2 text-gym-black hover:text-gym-red font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              首頁
            </a>
            <a href="#features" className="block py-2 text-gym-black hover:text-gym-red font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              設施
            </a>
            <a href="#classes" className="block py-2 text-gym-black hover:text-gym-red font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              課程
            </a>
            <a href="#trainers" className="block py-2 text-gym-black hover:text-gym-red font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              教練團隊
            </a>
            <a href="#testimonials" className="block py-2 text-gym-black hover:text-gym-red font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              會員評價
            </a>
            <a href="#contact" className="block py-2 text-gym-black hover:text-gym-red font-medium" onClick={() => setIsMobileMenuOpen(false)}>
              聯絡我們
            </a>
            <a href="#contact" className="block mt-4 button-primary text-center" onClick={() => setIsMobileMenuOpen(false)}>
              免費體驗
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
