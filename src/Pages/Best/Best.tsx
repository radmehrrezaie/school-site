
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"


function Best() {
  return (
    <div>
      <Navbar />
      <div className="bg-amber-400 bg-cover bg-center w-full h-[60vh] mb-30 relative flex justify-center">
      <h1 className="text-amber-900 mt-50 text-5xl">
        <span>
        دانش آموزان موفق در جشنواره ها در سال تحصیلی 1403_1404 
        </span>
        </h1>
      </div>

      <div>
        <h1 className="text-blue-900 text-2xl text-center font-bold flex flex-col mb-30">
            <span>
                همانطور که می دونید مدرسه جامعه یاوری 1 امام رضا ع فومن از بهترین کادر های آموزشی شهرستان فومن هستش 
            </span>
            <span>
                و این مدرسه سعی دارد هر سال دانش آموزان جدیدی را وارد جشنواره ها کند و هر ساله موفق شده در بیشتر عرصه ها یک مقام بیاورد
            </span>
        </h1>
        <hr/>
        <h1 className="text-emerald-500 text-2xl text-center font-bold flex flex-col mb-10 mt-10"> 
            <span>
              نفرات اول استانی از مدرسه نمونه جامعه یاوری 1 :محور برنامه نویسی تارنما :آقای محمد جواد افنوت , محور برنامه نویسی بدون رایانه :آقایان باراد و هیراد حدیدی , محور زبان و ادبیات فارسی :آقای محمد آرتین بخشی زاده 
            </span>
            </h1>
            <hr />
            <h1 className="text-orange-800 text-2xl text-center font-bold flex flex-col mb-30 mt-10">
              <span>
              نفرات سوم استانی از مدرسه جامعه یاوری 1: محور مناظره مطالعات اجتماعی : آقایان بنیامین آسوده خیال و علیرضا احمدی ,  محور قرآن و معارف اسلامی : آقایان صدرا پابوسی و سید حسین پرهیزکار 
            </span>
            </h1>
      </div>
      <Footer/>
    </div>
  )
}

export default Best
