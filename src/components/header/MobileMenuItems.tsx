import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  BanknotesIcon,
  HomeIcon,
  InformationCircleIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { buttonClass } from "../buttons/Button";
import { usePathname } from "next/navigation";

const MobileMenuItems = () => {
  const pathname = usePathname();

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const [activeLink, setActiveLink] = useState("");

  const getClassNames = (path: string) => {
    return activeLink === path ? "text-secondary" : "";
  };

  return (
    <>
      <Link href={"/"}>
        <Image
          src={"/images/logo.svg"}
          width={92}
          height={76}
          className="lg:w-[92px] w-[60px] mx-auto"
          alt="logo"
        />
      </Link>
      <ul className="flex flex-col items-start gap-8 [&>li>a]:flex [&>li>a]:items-center [&>li>a]:gap-2 py-8">
        <li>
          <Link href={"/"}>
            <HomeIcon className="size-5" />
            خانه
          </Link>
        </li>
        <li>
          <Link href={"/aboutUs"} className={getClassNames("/aboutUs")}>
            <InformationCircleIcon className="size-5" />
            درباره ما
          </Link>
        </li>
        <li>
          <Link href={"/prices"} className={getClassNames("/prices")}>
            <BanknotesIcon className="size-5" />
            قیمت‌ها
          </Link>
        </li>
        <li>
          <Link href={"/contactUs"} className={getClassNames("/contactUs")}>
            <PhoneIcon className="size-5" />
            تماس با ما
          </Link>
        </li>
      </ul>
      <Link href={"mail:zeroaiir@gmail.com"} className={`${buttonClass} !w-fit mx-auto`}>
     ایمیل پشتیبانی
      </Link>
    </>
  );
};

export default MobileMenuItems;
