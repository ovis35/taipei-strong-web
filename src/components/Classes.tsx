
import { useEffect } from "react";

const classes = [
  {
    name: "高強度間歇訓練",
    time: "週一至五 06:00-07:00",
    description: "快速有效的燃脂訓練，適合想在短時間內提高心肺功能及燃燒熱量的健身愛好者",
    bgColor: "bg-gym-red",
    textColor: "text-white",
  },
  {
    name: "重量訓練",
    time: "週一至五 10:00-11:30",
    description: "著重於肌肉力量增長，由專業教練指導正確姿勢及技巧，適合所有程度的健身者",
    bgColor: "bg-gym-gray",
    textColor: "text-gym-black",
  },
  {
    name: "瑜伽",
    time: "週二、四、六 18:00-19:30",
    description: "結合呼吸與伸展動作，提升身體柔軟度，緩解壓力，平衡身心",
    bgColor: "bg-gym-gray",
    textColor: "text-gym-black",
  },
  {
    name: "有氧拳擊",
    time: "週一、三、五 19:00-20:00",
    description: "融合拳擊技巧與有氧運動，高能量消耗的同時學習基本防身術",
    bgColor: "bg-gym-red",
    textColor: "text-white",
  },
  {
    name: "循環訓練",
    time: "週二、四、日 14:00-15:30",
    description: "結合多種訓練方式，全面鍛煉身體各部位肌群，適合想全面提升體能的人",
    bgColor: "bg-gym-black",
    textColor: "text-white",
  },
  {
    name: "早晨伸展",
    time: "週六、日 07:30-08:30",
    description: "溫和的晨間伸展活動，喚醒身體，為一整天注入活力",
    bgColor: "bg-gym-gray",
    textColor: "text-gym-black",
  },
];

const Classes = () => {
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
    <section id="classes" className="bg-white py-20">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gym-black mb-4">
            專業課程安排
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            多元化的課程選擇，無論您是初學者還是有經驗的健身愛好者，都能找到適合自己的課程
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((cls, index) => (
            <div 
              key={index}
              className={`rounded-lg p-8 shadow-lg hover-scale animate-on-scroll ${cls.bgColor} ${cls.textColor}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-bold mb-2">{cls.name}</h3>
              <p className="text-lg mb-4 opacity-90">{cls.time}</p>
              <p className={`${cls.bgColor === "bg-gym-gray" ? "text-gray-600" : "opacity-80"}`}>
                {cls.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <a href="#contact" className="button-primary">
            預約體驗課程
          </a>
        </div>
      </div>
    </section>
  );
};

export default Classes;
