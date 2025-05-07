
import { useEffect } from "react";

const trainers = [
  {
    name: "李志強",
    title: "重量訓練專家",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e6349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "十年健身教練經驗，專精於重量訓練與體態調整，幫助無數客戶達成體態改造目標。",
  },
  {
    name: "陳美玲",
    title: "有氧與瑜伽教練",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "國際瑜伽認證教練，擁有豐富的團體課程教學經驗，強調正確姿勢與呼吸技巧的結合。",
  },
  {
    name: "王大明",
    title: "功能性訓練專家",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "專注於功能性訓練與運動傷害防護，幫助客戶建立強健的核心肌群與全面的身體素質。",
  },
  {
    name: "林小芳",
    title: "營養與體態顧問",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "營養學碩士，專精於結合運動與飲食規劃，提供全方位的健康生活指導。",
  },
];

const Trainers = () => {
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
    <section id="trainers" className="bg-gym-gray py-20">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gym-black mb-4">
            專業教練團隊
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            我們的教練擁有豐富的經驗和專業知識，致力於幫助每位會員實現健身目標
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale animate-on-scroll"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-w-1 aspect-h-1 w-full">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gym-black mb-1">{trainer.name}</h3>
                <p className="text-gym-red font-medium mb-3">{trainer.title}</p>
                <p className="text-gray-600">{trainer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
