"use client";

import LogoSquare from "./LogoSquare";
import Container from "./ui/Container";
import { usePathname } from "next/navigation";
import CustomLink from "./ui/Link";

export default function HeaderNav() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <Container padding="default">
      <div
        className={`h-24 flex justify-between items-center pt-[85px] pb-24 ${
          !isHomePage ? "border-b border-primary" : ""
        }`}
      >
        <div className="flex items-center gap-11">
          <CustomLink href="/">
            <LogoSquare />
          </CustomLink>
          <CustomLink href="/" className="text-xl">
            Sagene Fysioterapi
          </CustomLink>
        </div>
        <div className="flex justify-between items-center gap-8 text-base">
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
      </div>
    </Container>
  );
}
