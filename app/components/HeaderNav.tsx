import Link from "next/link";
import LogoSquare from "./LogoSquare";
import Container from "./ui/Container";

export default function HeaderNav() {
  return (
    <Container padding="default">
      <div className="h-44 flex justify-between items-end border-b border-red-500">
        <div className="h-44 flex items-center gap-12">
          <LogoSquare />
          <Link href="/" className="text-lg pt-12">
            Sagene Fysioterapi
          </Link>
        </div>
        <div className="flex justify-between items-center gap-12 text-lg pb-12">
          <div>
            <Link href="/physioterapists">Fysioterapeuter</Link>
          </div>
          <div>
            <Link href="/about">Om oss</Link>
          </div>
          <div>
            <Link href="/contact">Kontakt</Link>
          </div>
          <div>
            <Link href="/services">Tjenester</Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
