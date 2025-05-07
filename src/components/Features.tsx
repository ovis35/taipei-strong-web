
import { Dumbbell, Users, Calendar, Heart } from "lucide-react";
import { useEffect, useRef } from "react";

const features = [
  {
    icon: <Dumbbell className="h-10 w-10 text-gym-red" />,
    title: "千坪場地",
    description: "搭配各類運動訓練器材，近千坪寬闊場地讓你的每一次訓練都更加有效",
  },
  {
    icon: <Users className="h-10 w-10 text-gym-red" />,
    title: "專業教練",
    description: "擁有國際認證的專業教練團隊，為您量身定制個人訓練計畫",
  },
  {
    icon: <Calendar className="h-10 w-10 text-gym-red" />,
    title: "多元課程",
    description: "提供多種團體課程，從高強度間歇訓練到瑜伽冥想，滿足各種需求",
  },
  {
    icon: <Heart className="h-10 w-10 text-gym-red" />,
    title: "健康社群",
    description: "加入我們的健身在地社群，結交志同道合的朋友，互相激勵進步",
  },
];

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
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

  return (
    <section id="features" className="bg-gym-gray py-20" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gym-black mb-4">
            我們的優勢
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            CHILI GYM | 栖里健身俱樂部提供全面的健身體驗，從千坪場地、頂尖教練到多元化課程，我們致力於幫助您實現生活與健康目標
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover-scale animate-on-scroll"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gym-black">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
