"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LogoSquare from "./LogoSquare";
import Container from "./ui/Container";
import CustomLink from "./ui/Link";

const menuItems = [
  { text: "Hjem", path: "/" },
  { text: "Fysioterapeuter", path: "/physioterapists" },
  { text: "Om oss", path: "/about" },
  { text: "Kontakt", path: "/contact" },
  { text: "Tjenester", path: "/services" },
];

export default function HeaderNav() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [open, setOpen] = useState(false);

  return (
    <Container padding="noTopPadding">
      <div
        className={`h-36 flex justify-between items-center ${
          !isHomePage ? "border-b border-primary" : ""
        }`}
      >
        <div className="flex items-center gap-11">
          <CustomLink href="/">
            <LogoSquare />
          </CustomLink>
          <CustomLink href="/" className="hidden lg:block text-xl">
            Sagene Fysioterapi
          </CustomLink>
        </div>
        {/* Desktop menu */}
        <div className="hidden md:flex justify-between items-center gap-8 text-base">
          <div>
            <CustomLink
              href="/physioterapists"
              isActive={pathname === "/physioterapists"}
            >
              Fysioterapeuter
            </CustomLink>
          </div>
          <div>
            <CustomLink href="/about" isActive={pathname === "/about"}>
              Om oss
            </CustomLink>
          </div>
          <div>
            <CustomLink href="/contact" isActive={pathname === "/contact"}>
              Kontakt
            </CustomLink>
          </div>
          <div>
            <CustomLink href="/services" isActive={pathname === "/services"}>
              Tjenester
            </CustomLink>
          </div>
        </div>
        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            className="md:hidden relative top-0 right-6 z-50 bg-muted-fg text-white rounded-full px-4 py-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            Meny
          </button>
        </div>
      </div>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-opacity-90"
          onClick={() => setOpen(false)}
        />
      )}
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          className="absolute top-6 right-6 bg-muted-fg text-white rounded-full px-4 py-2 mt-6.5"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          Lukk
        </button>
        {/* Menu List */}
        <nav className="flex flex-col gap-6 pt-24 pl-8">
          {menuItems.map((item) => (
            <Link
              key={item.text}
              href={item.path}
              className="text-lg font-normal hover:font-bold"
              onClick={() => setOpen(false)}
            >
              {item.text}
            </Link>
          ))}
        </nav>
      </div>
    </Container>
  );
}
