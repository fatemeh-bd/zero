import SubTitle from "@/components/typography/SubTitle";
import Title from "@/components/typography/Title";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="" dir="rtl"> 
      <Title>در ارتباط باشید</Title>
      <SubTitle>سؤالی دارید؟ ما اینجا هستیم تا کمک کنیم</SubTitle>
      <SubTitle className="!p-0">ایمیل: zeroaiir@gmail.com</SubTitle>
      <Link
        href={"tel:09175856985"}
        className="text-xl block text-center px-8 font-medium leading-10"
      >

<span dir="ltr">0917 595 6598</span>
      </Link>
      

    </section>
  );
};

export default page;
