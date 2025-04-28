"use client";

import { usePathname } from "next/navigation";
import LogoSquare from "./LogoSquare";
import Container from "./ui/Container";
import CustomLink from "./ui/Link";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function HeaderNav() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <Container padding="noTopPadding">
      <div
        className={`h-36 flex justify-between items-center ${
          !isHomePage ? "border-b border-primary" : ""
        }`}
      >
        <div className="flex items-center gap-11">
          <CustomLink href="/" aria-label="Gå til forsiden">
            <LogoSquare />
          </CustomLink>
          <CustomLink
            href="/"
            aria-label="Gå til forsiden"
            className="hidden lg:block text-xl"
            noHover
          >
            Sagene Fysioterapi
          </CustomLink>
        </div>
        <DesktopNav />
        <MobileNav />
      </div>
    </Container>
  );
}
