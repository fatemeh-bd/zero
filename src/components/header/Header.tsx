import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button, { buttonClass } from "../buttons/Button";

const Header = () => {
  return (
    <header className="flex gap-8 justify-between items-center w-full">
      <Image
        src={"/images/logo.svg"}
        width={92}
        height={76}
        className="lg:w-[92px] w-[60px]"
        alt="logo"
      />
      <nav className="md:flex hidden lg:gap-12 gap-8 lg:text-lg text-sm items-center border border-white rounded-full w-fit h-fit py-2 px-12">
        <Link href={"/"}>خانه</Link>
        <Link href={"/aboutUs"}>درباره ما</Link>
        <Link href={"/prices"}>قیمت‌ها</Link>
        <Link href={"/contactUs"}>تماس با ما</Link>
      </nav>
      <Link href={"/"} className={buttonClass}>
        آزمایش کنید
      </Link>
    </header>
  );
};

export default Header;
