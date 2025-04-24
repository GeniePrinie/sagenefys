"use client";

import Link from "next/link";
import LogoSquare from "./LogoSquare";
import Container from "./ui/Container";
import { usePathname } from "next/navigation";

export default function HeaderNav() {
  const pathname = usePathname();

  return (
    <Container padding="default">
      <div className="h-24 flex justify-between items-center py-20 border-b border-sagene-blue">
        <div className="flex items-center gap-4">
          <LogoSquare />
          <Link href="/" className="text-xl">
            Sagene Fysioterapi
          </Link>
        </div>
        <div className="flex justify-between items-center gap-8 text-base">
          <div>
            <Link
              href="/physioterapists"
              className={`font-semibold hover:text-sagene-blue hover:underline underline-offset-2 ${
                pathname === "/physioterapists" ? "text-sagene-blue" : ""
              }`}
            >
              Fysioterapeuter
            </Link>
          </div>
          <div>
            <Link
              href="/about"
              className={`text-black hover:text-sagene-blue hover:underline underline-offset-2 ${
                pathname === "/about" ? "text-sagene-blue" : ""
              }`}
            >
              Om oss
            </Link>
          </div>
          <div>
            <Link
              href="/contact"
              className={`text-black hover:text-sagene-blue hover:underline underline-offset-2 ${
                pathname === "/contact" ? "text-sagene-blue" : ""
              }`}
            >
              Kontakt
            </Link>
          </div>
          <div>
            <Link
              href="/services"
              className={`text-black hover:text-sagene-blue hover:underline underline-offset-2 ${
                pathname === "/services" ? "text-sagene-blue" : ""
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
