"use client";

import { usePathname } from "next/navigation";
import CustomLink from "./ui/Link";

export default function DesktopNav() {
  const pathname = usePathname();

  return (
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
  );
}
