import { buttonClass } from "@/components/buttons/Button";
import Title from "@/components/typography/Title";
import UploadFile from "./_components/UploadFile";
import Link from "next/link";
import { Metadata } from "next";
import SubTitle from "@/components/typography/SubTitle";
export const metadata: Metadata = {
  title: "فیلتر هوشمند محتوای دیجیتال",
  description:
    "تشخیص هوشمند و خودکار محتوای غیراخلاقی و نامتعارف، با بهره‌گیری از پیشرفته‌ترین فناوری‌های هوش مصنوعی",
  keywords:
    "هوش مصنوعی , فیلتز هوشمند محتوای دیحیتال,zeroai,فیلتر عکس فیلم و ویدیو",
  openGraph: {
    title: "فیلتر هوشمند محتوای دیجیتال",
    description:
      "تشخیص هوشمند و خودکار محتوای غیراخلاقی و نامتعارف، با بهره‌گیری از پیشرفته‌ترین فناوری‌های هوش مصنوعی",
    url: "https://zeroai.ir/images/logo.svg",
  },
  twitter: {
    title: "فیلتر هوشمند محتوای دیجیتال",
    description:
      "تشخیص هوشمند و خودکار محتوای غیراخلاقی و نامتعارف، با بهره‌گیری از پیشرفته‌ترین فناوری‌های هوش مصنوعی",
    card: "summary_large_image",
    images: [
      {
        url: "hhttps://zeroai.ir/images/logo.svg",
        width: 150,
        height: 150,
      },
    ],
  },
};

export default function Home() {
  return (
    <section>
      <Title>فیلتر هوشمند محتوای دیجیتال</Title>
      <SubTitle>
        تشخیص هوشمند و خودکار محتوای
        <span className="text-[#EE2020] inline-block mx-1">غیراخلاقی</span> و
        <span className="text-[#EE2020] inline-block mx-1">نامتعارف،</span> با
        بهره‌گیری از 
        <br className="md:block hidden"/>
        پیشرفته‌ترین فناوری‌های هوش مصنوعی
      </SubTitle>
      <div className="flex lg:flex-nowrap flex-wrap justify-center gap-4 items-center">
        <UploadFile />
        <Link href={"/prices"} className={buttonClass}>
          اطلاعات بیشتر
        </Link>
      </div>
    </section>
  );
}
