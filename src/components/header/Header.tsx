import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../buttons/Button";

const Header = () => {
  return (
    <header className="flex gap-8 justify-between items-center w-full">
      <Image src={"/images/logo.svg"} width={92} height={76} alt="logo" />
      <nav className="border border-white rounded-full w-fit h-fit py-2 px-12 flex gap-12 items-center">
        <Link href={"/"}>خانه</Link>
        <Link href={"/aboutUs"}>درباره ما</Link>
        <Link href={"/prices"}>قیمت‌ها</Link>
        <Link href={"/contactUs"}>تماس با ما</Link>
      </nav>
      <Button>آزمایش کنید</Button>
    </header>
  );
};

export default Header;
