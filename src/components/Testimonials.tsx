
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "張小明",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "加入台北健身是我做過最好的決定之一！教練們非常專業且耐心，器材齊全且乾淨。三個月來我不僅減掉了8公斤，更重要的是我現在有了更多的能量和自信。",
    rating: 5,
  },
  {
    name: "林美華",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "我原本對健身房有些害怕，但台北健身的氛圍非常友善。特別感謝我的私人教練陳美玲，她的鼓勵和專業指導讓我克服了初學者的恐懼，現在我每週都期待去健身。",
    rating: 5,
  },
  {
    name: "劉大偉",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "場地寬敞明亮，設備新穎且數量充足，幾乎不用排隊等待。最讓我滿意的是這裡的課程多樣化，從HIIT到瑜伽，都能滿足我不同的訓練需求。",
    rating: 4,
  },
  {
    name: "黃婷婷",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "作為一名上班族，我很欣賞台北健身的靈活營業時間。早晨和晚上的課程安排非常貼心，讓我能夠在工作之餘找到時間鍛煉。半年來體能明顯提升，也認識了許多志同道合的朋友。",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section id="testimonials" className="bg-gym-black py-20 text-white">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            會員心聲
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            聽聽我們的會員如何評價台北健身，以及他們的健身旅程
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative animate-on-scroll">
            <div 
              className={`bg-gym-darkGray rounded-xl p-8 shadow-xl ${
                isAnimating ? "opacity-0 transform -translate-y-4" : "opacity-100 transform translate-y-0"
              } transition-all duration-300`}
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-xl">{testimonials[currentIndex].name}</h4>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? "text-yellow-400" : "text-gray-400"}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-lg italic">"{testimonials[currentIndex].text}"</p>
            </div>

            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="bg-gym-red hover:bg-gym-darkRed text-white p-3 rounded-full transition-colors"
                aria-label="上一個評價"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-gym-red hover:bg-gym-darkRed text-white p-3 rounded-full transition-colors"
                aria-label="下一個評價"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
