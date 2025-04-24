"use client";

import Link from "next/link";
import LogoSquare from "./LogoSquare";
import Container from "./ui/Container";
import { usePathname } from "next/navigation";

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
          <Link href="/">
            <LogoSquare />
          </Link>
          <Link href="/" className="text-xl">
            Sagene Fysioterapi
          </Link>
        </div>
        <div className="flex justify-between items-center gap-8 text-base">
          <div>
            <Link
              href="/physioterapists"
              className={`hover:text-primary hover:underline underline-offset-2 ${
                pathname === "/physioterapists"
                  ? "text-primary font-medium"
                  : "font-normal"
              }`}
            >
              Fysioterapeuter
            </Link>
          </div>
          <div>
            <Link
              href="/about"
              className={`text-black hover:text-primary hover:underline underline-offset-2 ${
                pathname === "/about"
                  ? "text-primary font-medium"
                  : "font-normal"
              }`}
            >
              Om oss
            </Link>
          </div>
          <div>
            <Link
              href="/contact"
              className={`text-black hover:text-primary hover:underline underline-offset-2 ${
                pathname === "/contact"
                  ? "text-primary font-medium"
                  : "font-normal"
              }`}
            >
              Kontakt
            </Link>
          </div>
          <div>
            <Link
              href="/services"
              className={`text-black hover:text-primary hover:underline underline-offset-2 ${
                pathname === "/services"
                  ? "text-primary font-medium"
                  : "font-normal"
              }`}
            >
              Tjenester
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
