import Button from "@/components/buttons/Button";
import { AttachmentIcon } from "@/components/icons";

export default function Home() {
  return (
    <section>
      <h1 className="font-medium text-6xl text-center">
        فیلتر هوشمند محتوای دیجیتال
      </h1>
      <p className="text-xl py-6 px-14 font-medium leading-10">
        تشخیص هوشمند و خودکار محتوای
        <span className="text-[#EE2020] inline-block mx-1">غیراخلاقی</span> و
        <span className="text-[#EE2020] inline-block mx-1">نامتعارف،</span> با
        بهره‌گیری از
        <br />
        پیشرفته‌ترین فناوری‌های هوش مصنوعی
      </p>
      <div className="flex gap-4 items-center">
        <Button className="!pl-0 !py-0 justify-between">
          فایل عکس،گیف، ویدیوی مورد نظر خود را اپلود کنید
          <AttachmentIcon className="bg-primary p-2 rounded-full text-center self-center" />
        </Button>
        <Button className="bg-primary border-transparent">تست رایگان</Button>
        <Button>اطلاعات بیشتر</Button>
      </div>
    </section>
  );
}
