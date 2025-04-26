"use client";

import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { text: "Hjem", path: "/" },
  { text: "Fysioterapeuter", path: "/physioterapists" },
  { text: "Om oss", path: "/about" },
  { text: "Kontakt", path: "/contact" },
  { text: "Tjenester", path: "/services" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
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
          className="absolute top-6 right-8 bg-muted-fg text-white rounded-full px-4 py-2 mt-6.5"
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
              className="text-lg font-normal hover:font-medium hover:text-primary active:text-primary active:font-medium"
              onClick={() => setOpen(false)}
            >
              {item.text}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
