import Container from "../container/Container";

function Header() {
  return (
    <div className="bg-[url('/school.jpg')] bg-cover bg-center w-full h-[90vh] mb-30 relative flex justify-center">
      <Container>
        <h1 className="text-black text-center text-2xl font-bold flex flex-col pt-50 ">
          <span>به نام خدا</span>
          <span>مدرسه نمونه دولتی جامعه یاوری ۱ فومن با کادر آموزشی مجرب و امکانات مدرن، محیطی پویا برای رشد علمی و شخصیتی دانش‌آموزان فراهم کرده است.
این مدرسه با پرورش دانش‌آموزان مستعد و تقویت مهارت‌های علمی و اجتماعی، آن‌ها را برای آینده‌ای موفق آماده می‌کند

          </span>
        </h1>
      </Container>
    </div>
  );
}

export default Header;
