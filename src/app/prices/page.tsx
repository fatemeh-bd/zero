import Title from "@/components/typography/Title";
import React from "react";
import PriceBox from "./_components/PriceBox";

const page = () => {
  const options = {
    free: [
      "پردازش ۵ فایل در ماه",
      "پشتیبانی از فرمت‌های عکس و گیف",
      "بدون ذخیره‌سازی اطلاعات",
      "ارائه وب سرویس",
    ],
    pro: ["پردازش نامحدود", "پشتیبانی از تمام فرمت‌ها", "پاسخ سریع‌تر", "ارائه وب سرویس",],
    vip: [
      "پردازش نامحدود",
      "پشتیبانی از تمام فرمت‌ها",
      "پاسخ سریع‌تر",
      "نیازمند به گفتگو",
      "ارائه وب سرویس",
    ],
  };
  return (
    <section className="-translate-y-6">
      <Title>پلن مناسب خود را انتخاب کنید</Title>
      <div className="grid grid-cols-12 md:gap-8 gap-4 items-center  md:mt-12 mt-4">
        <PriceBox title="رایگان" items={options.free} />
        <PriceBox title="حرفه‌ای" items={options.pro} price={200000} />
        <PriceBox title="سازمانی" items={options.vip} />
      </div>
    </section>
  );
};

export default page;
