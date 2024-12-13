import { buttonClass } from "@/components/buttons/Button";
import Paraghrap from "@/components/typography/Paraghrap";
import Title from "@/components/typography/Title";
import UploadFile from "./_components/UploadFile";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <Title>فیلتر هوشمند محتوای دیجیتال</Title>
      <Paraghrap>
        تشخیص هوشمند و خودکار محتوای
        <span className="text-[#EE2020] inline-block mx-1">غیراخلاقی</span> و
        <span className="text-[#EE2020] inline-block mx-1">نامتعارف،</span> با
        بهره‌گیری از
        <br />
        پیشرفته‌ترین فناوری‌های هوش مصنوعی
      </Paraghrap>
      <div className="flex lg:flex-nowrap flex-wrap justify-center gap-4 items-center">
        <UploadFile />
        <Link className={buttonClass} href={"/prices"}>
          اطلاعات بیشتر
        </Link>
      </div>
    </section>
  );
}
