import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";



function Facilities() {
  return (    
<div>
    <Navbar />
    <div className="bg-[url('/sport.jpg')] bg-cover bg-center w-full h-[60vh] mb-30 relative flex justify-center">
    <h1 className="text-cyan-400 mt-50 text-5xl">
      <span>
     : امکانات مدرسه  
      </span>
    </h1>
        </div>
            <h1 className="text-fuchsia-500 text-2xl text-center font-bold flex flex-col mb-30 ">
          <span>
            این مدرسه دارای:آزمایشگاه ,نمازخانه ,خوابگاه ,سالن غذاخوری, زمین فوتبال(چمن  مصنوعی)
          </span>
          <span>
             و بسکتبال و والیبال, راکت بدمینتون و تنیس روی میز(پینگ پونگ)
          </span>
          <span>
            اتاق استراحت معلمان , جای پارک برای ماشین معلمان , کتابخانه , اتاق کامپیوتر, کارگاه ,بوفه به همراه
            </span>
            <span>
             هشت کلاس که سه کلاس هفتم است و سه کلاس هشتم است و دو کلاس نهم است و
          </span>
          <span>
  البته باید اشاره داشت که آقای بردار (مدیر مدرسه) سعی دارد که امکانات مدرسه را بیشتر کند 
          </span>
        </h1>
        <Footer />
    </div>
  );
}

export default Facilities;
