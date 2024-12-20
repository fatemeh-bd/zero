"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { buttonClass } from "../buttons/Button";
import MobileMenuItems from "./MobileMenuItems";
import useScreenWidth from "@/utils/useScreenWidth";
import { Bars3Icon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useScreenWidth(768);
  const pathname = usePathname();

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const [activeLink, setActiveLink] = useState("");

  const getClassNames = (path: string) => {
    return activeLink === path ? "text-secondary" : "";
  };

  return (
    <header className="flex gap-8 justify-between items-center w-full">
      {isMobile && (
        <>
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Bars3Icon className="size-8" />
          </button>
          {isMenuOpen && (
            <div
              onClick={() => setIsMenuOpen(false)}
              className="bg-black bg-opacity-40 blur-lg fixed inset-0 size-full"
            ></div>
          )}
          <nav
            onClick={() => setIsMenuOpen(false)}
            className={`fixed right-0 top-0 z-[999] w-3/4 h-full p-8 bg-black transform ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300`}
          >
            <MobileMenuItems />
          </nav>
        </>
      )}
      <Link href={"/"}>
        <Image
          src={"/images/logo.svg"}
          width={92}
          height={76}
          className="lg:w-[92px] w-[60px]"
          alt="logo"
        />
      </Link>

      {!isMobile && (
        <nav className="md:flex hidden lg:gap-12 gap-8 lg:text-lg text-sm items-center border border-white rounded-full w-fit h-fit py-2 px-12">
          <Link href="/" className={getClassNames("/")}>
            خانه
          </Link>
          <Link href="/aboutUs" className={getClassNames("/aboutUs")}>
            درباره ما
          </Link>
          <Link href="/prices" className={getClassNames("/prices")}>
            قیمت‌ها
          </Link>
          <Link href="/contactUs" className={getClassNames("/contactUs")}>
            تماس با ما
          </Link>
        </nav>
      )}
      <Link
        href="https://mail.google.com/mail/?view=cm&fs=1&to=zeroaiir@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonClass} md:flex !gap-2 hidden hover:text-secondary hover:border-secondary`}
      >
        <EnvelopeIcon className="size-6" />
        ایمیل پشتیبانی
      </Link>
    </header>
  );
};

export default Header;
