"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import CustomLink from "./ui/Link";
import { Drawer } from "@mui/material";

const menuItems = [
  { text: "Hjem", path: "/" },
  { text: "Fysioterapeuter", path: "/physioterapists" },
  { text: "Om oss", path: "/about" },
  { text: "Tjenester", path: "/services" },
  { text: "Kontakt", path: "/contact" },
];

export default function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <div className="flex md:hidden">
        <button
          className="md:hidden relative top-0 right-0 z-50 bg-primary text-white rounded-full px-4 py-2 cursor-pointer"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          Meny
        </button>
      </div>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        transitionDuration={400}
        PaperProps={{
          sx: {
            width: 288,
            backgroundColor: "white",
          },
        }}
      >
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div className="flex justify-end pr-4 pt-[50px] mb-8">
            <button
              className="bg-muted-fg text-white rounded-full px-4 py-2 cursor-pointer"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              Lukk
            </button>
          </div>

          {/* Menu List */}
          <nav className="flex flex-col gap-6 px-8">
            {menuItems.map((item) => (
              <CustomLink
                key={item.text}
                href={item.path}
                isActive={pathname === item.path}
                onClick={() => setOpen(false)}
                className="w-fit"
              >
                {item.text}
              </CustomLink>
            ))}
          </nav>
        </div>
      </Drawer>
    </>
  );
}
