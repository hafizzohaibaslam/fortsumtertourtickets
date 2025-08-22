"use client";
import React from "react";
import Link from "next/link";
import { navlinks } from "../utils/navlinks";
import { Button } from "@/features/shared/components/Button";
import { Menu, MoveUpRight } from "lucide-react";
import { useGlobalContext } from "../utils/GlobalProvider";
import LogoImage from "@/public/alcatraz-island-logo.svg";
import Image from "next/image";

const Header = () => {
  const {
    handleBookingModalOpenClose,
    handleMobileMenuOpenClose,
    isMobileMenuOpen,
  } = useGlobalContext();
  const handleFaqsClick = (href: string) => {
    if (href === "/faqs") {
      const element = document.getElementById("faqs");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="bg-white flex flex-row justify-between items-center gap-4 px-[16px] py-[14px] rounded-full">
      {/* Logo */}
      <Link
        href="/"
        className="bg-[var(--blue-1)] p-[7px] rounded-full border-2 border-black"
      >
        <Image
          src={LogoImage}
          alt="logo"
          className="lg:w-[150px] lg:h-[36px] w-[100px] h-[36px] rounded-full fill-white"
        />
      </Link>
      {/* Navigation */}
      <nav className="hidden lg:block">
        <ul className="flex gap-8 font-plus-jakarta-sans font-semibold text-[14px] leading-[16px] text-[var(--blue-2)]">
          {navlinks.map((link, index) => (
            <li
              key={index}
              className="relative cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out group"
              onClick={() => handleFaqsClick(link.href)}
            >
              {link.href === "/faqs" ? (
                <span>{link.label}</span>
              ) : (
                <Link href={link.href}>{link.label}</Link>
              )}
              <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[var(--blue-2)] group-hover:w-full transition-all duration-1000 ease-in-out"></div>
            </li>
          ))}
        </ul>
      </nav>
      {/* Buttons */}
      <div className="flex gap-4 items-center">
        <Button
          variant="primary"
          icon={<MoveUpRight className="w-[20px] h-[20px]" />}
          onClick={() => handleBookingModalOpenClose(true)}
        >
          Get Tickets
        </Button>
        <button
          className="lg:hidden cursor-pointer transition-all duration-300 ease-in-out bg-[var(--blue-2)] text-white p-2 rounded-full w-[50px] h-[50px] flex items-center justify-center"
          onClick={() => handleMobileMenuOpenClose(!isMobileMenuOpen)}
          id="mobile-menu-button"
        >
          <Menu className="w-[20px] h-[20px]" aria-label="Mobile Menu" />
        </button>
      </div>
    </header>
  );
};

export default Header;
