"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../utils/GlobalProvider";
import LogoImage from "@/public/fortsumter-logo.png";
import Image from "next/image";
import { navlinks } from "../utils/navlinks";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const pathname = usePathname();
  const { isMobileMenuOpen, handleMobileMenuOpenClose } = useGlobalContext();
  const activePath = pathname;
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        !document
          .getElementById("mobile-menu-button")
          ?.contains(event.target as Node)
      ) {
        handleMobileMenuOpenClose(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen, handleMobileMenuOpenClose]);

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 left-0 bottom-0 w-[300px] bg-white z-50 transition-all duration-300 ease-in-out -translate-x-[100%] shadow-lg ${
        isMobileMenuOpen && "translate-x-0"
      }`}
    >
      <div className="flex flex-col gap-4 p-[16px]">
        <Link
          href="/"
          className="bg-[var(--blue-1)] rounded-full w-[150px] h-[50px] p-2"
        >
          <Image
            src={LogoImage}
            alt="logo"
            width={100}
            height={100}
            className="rounded-full fill-white w-full h-full"
          />
        </Link>
        {/* Navigation */}
        <nav className="block">
          <ul className="flex flex-col gap-2 font-plus-jakarta-sans font-semibold text-[14px] leading-[16px] text-[var(--blue-2)]">
            {navlinks.map((link, index) => (
              <li
                key={index}
                className={cn(
                  "hover:bg-gray-100 p-4 rounded-full relative cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out group",
                  activePath === link.href && "bg-gray-100 text-black"
                )}
              >
                <Link
                  href={link.href}
                  onClick={() => {
                    handleMobileMenuOpenClose(false);
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
