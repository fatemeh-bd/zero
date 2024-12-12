import Title from "@/components/typography/Title";
import React from "react";
import PriceBox from "./_components/PriceBox";

const page = () => {
  const options = {
    free: [
      "پردازش ۵ فایل در ماه",
      "پشتیبانی از فرمت‌های عکس و گیف",
      "بدون ذخیره‌سازی اطلاعات",
    ],
    pro: ["پردازش نامحدود", "پشتیبانی از تمام فرمت‌ها", "پاسخ سریع‌تر"],
    vip: [
      "پردازش نامحدود",
      "پشتیبانی از تمام فرمت‌ها",
      "پاسخ سریع‌تر",
      "نیازمند به گفتگو",
    ],
  };
  return (
    <section>
      <Title>پلن مناسب خود را انتخاب کنید</Title>
      <div className="grid grid-cols-12 gap-8 items-stretch">
        <PriceBox title="رایگان" items={options.free} />
        <PriceBox title="حرفه‌ای" items={options.pro} price={2000000} />
        <PriceBox title="سازمانی" items={options.vip} />
      </div>
    </section>
  );
};

export default page;
