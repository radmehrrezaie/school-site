import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"


function Management() {
  return (
    <div>
        <Navbar />
        <div  className="bg-[url('/pen.jpg')] bg-cover bg-center w-full h-[90vh] mb-30 relative flex justify-center">
        <h1 className="text-amber-400 text-2xl font-bold pt-45 mr-210">
          <span>
فرشاد بردار از مدیران برجسته آموزشی شهر فومن است <br />و سابقه مدیریت دبیرستان نمونه دولتی
  شبانه‌روزی امام رضا (ع) <br /> را دارد.
  ایشان در زمینه برنامه‌ریزی آموزشی، نظارت بر امور پرورشی  <br />و اجرایی مدرسه تجربه گسترده‌ای دارد
  فعالیت در جلسات شورای <br /> مدرسه و هماهنگی  بین کارکنان از جمله سوابق کاری اوست.
  مدیریت <br /> مؤثر  در ارتقای کیفیت آموزشی و نظم مدرسه از <br /> ویژگی‌های بارز ایشان محسوب می‌شود


          </span>
        </h1>
        </div>
        <Footer />
    </div>
  )
}

export default Management
