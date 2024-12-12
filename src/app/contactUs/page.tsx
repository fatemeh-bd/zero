import Paraghrap from "@/components/typography/Paraghrap";
import Title from "@/components/typography/Title";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section>
      <Title>در ارتباط باشید</Title>
      <Paraghrap>سؤالی دارید؟ ما اینجا هستیم تا کمک کنیم</Paraghrap>
      <Paraghrap className="!p-0">ایمیل: support@example.com</Paraghrap>
      <Link
        href={"tel:09175856985"}
        className="text-xl block text-center px-8 font-medium leading-10"
      >
        تلفن: +98 9175856985
      </Link>
    </section>
  );
};

export default page;
