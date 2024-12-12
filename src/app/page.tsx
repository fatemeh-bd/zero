import Button from "@/components/buttons/Button";
import { AttachmentIcon } from "@/components/icons";
import Paraghrap from "@/components/typography/Paraghrap";
import Title from "@/components/typography/Title";

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
      <div className="flex gap-4 items-center">
        <Button className="!pl-0 !py-0 justify-between">
          فایل عکس،گیف، ویدیوی مورد نظر خود را اپلود کنید
          <AttachmentIcon className="bg-primary p-2 rounded-full text-center self-center" />
        </Button>
        <Button className="bg-primary !border-transparent">تست رایگان</Button>
        <Button>اطلاعات بیشتر</Button>
      </div>
    </section>
  );
}
