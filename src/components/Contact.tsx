
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useEffect } from "react";

const Contact = () => {
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
    <section id="contact" className="bg-white py-20">
      <div className="section-container">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gym-black mb-4">
            聯絡我們
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            無論您有任何問題或想了解更多資訊，歡迎透過以下方式與我們聯繫
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <div className="bg-gym-gray p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gym-black mb-6">預約免費體驗</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gym-red focus:border-gym-red"
                    placeholder="請輸入您的姓名"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">聯絡電話</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gym-red focus:border-gym-red"
                    placeholder="請輸入您的聯絡電話"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">電子郵件</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gym-red focus:border-gym-red"
                    placeholder="請輸入您的電子郵件"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">留言</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gym-red focus:border-gym-red"
                    placeholder="有任何疑問想了解的都可以在這裡告訴我們"
                  ></textarea>
                </div>
                
                <button 
                  type="button" 
                  className="w-full button-primary"
                >
                  送出預約
                </button>
                
                <p className="text-sm text-gray-500 mt-4">
                  我們會在24小時內與您聯絡，安排最適合的時間進行免費體驗
                </p>
              </form>
            </div>
          </div>
          
          <div className="animate-on-scroll" style={{ animationDelay: "150ms" }}>
            <div className="bg-gym-black p-8 rounded-lg shadow-lg text-white h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6">聯絡資訊</h3>
              
              <div className="space-y-6 flex-grow">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-gym-red mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">地址</h4>
                    <p className="text-gray-300">台北市北投區公館路427號B1, 1F, Taipei, Taiwan 112</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-gym-red mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">電話</h4>
                    <p className="text-gray-300">02 2823 496</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-gym-red mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">電子郵件</h4>
                    <p className="text-gray-300">chiligymclub@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-gym-red mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">營業時間</h4>
                    <p className="text-gray-300">週一至週五: 06:00 - 23:00</p>
                    <p className="text-gray-300">週六至週日: 08:00 - 22:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold mb-4">來訪地圖</h4>
                <div className="rounded-lg overflow-hidden h-64 w-full">
                  <iframe
                    title="CHILI GYM 地圖"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.5873965368774!2d121.46782597596252!3d25.121831077781982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae85dd38f9c1%3A0x1e079f5ddf35975a!2zMTEy5Y-w5YyX5biC5YyX5oqV5Y2A5YWs6aSo6LevNDI35LiB!5e0!3m2!1szh-TW!2stw!4v1650770039398!5m2!1szh-TW!2stw"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
