
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen bg-gym-black flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="section-container relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          <span className="text-gym-red">台北健身</span> ─ 打造您理想的身材
        </h1>
        <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto">
          專業的設備、專業的教練團隊、專業的課程規劃，讓您突破極限，實現健身目標
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="#contact" className="button-primary flex items-center justify-center gap-2">
            立即預約體驗 <ArrowRight className="h-5 w-5" />
          </a>
          <a href="#classes" className="button-secondary flex items-center justify-center gap-2">
            探索課程
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#features" 
          className="animate-bounce text-white flex flex-col items-center"
        >
          <span className="mb-2">向下滾動探索更多</span>
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
