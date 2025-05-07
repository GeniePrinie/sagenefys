import Container from "./components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { PageHeading } from "./components/ui/PageHeading";

export const metadata = {
  title: "Sagene Fysioterapi og Trening",
  description:
    "Fysioterapeuter med lang erfaring i hjertet av Sagene. Bestill time eller les mer om våre tjenester.",
};

export default function Home() {
  return (
    <>
      <div className="relative">
        <Image
          src="/images/hero.jpg"
          alt="Hero image"
          width={1000}
          height={1000}
          className="w-full h-auto"
        />
        <div className="absolute bottom-16 left-8 md:left-12 md:bottom-12 lg:left-24 lg:bottom-24 z-10 md:block hidden">
          <h2 className="text-5xl font-semibold text-on-primary mb-6 lg:mb-12">
            Et team med erfarne
            <br />
            terapeuter
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 text-on-primary rounded-full bg-muted-fg hover:!bg-primary transition-all"
          >
            Ta Kontakt
          </Link>
        </div>
      </div>
      {/* Mobile version */}
      <Container className="md:hidden flex flex-col justify-around items-start gap-5">
        <h2 className="text-2xl sm:text-3xl font-semibold text-black lg:mb-6">
          Et team med erfarne
          <br />
          terapeuter
        </h2>
        <Link
          href="/contact"
          className="border border-muted-fg bg-primary-muted rounded-full px-4 py-2 hover:!bg-muted-fg hover:!text-on-primary transition-all"
        >
          Ta Kontakt
        </Link>
      </Container>
      <Container className="py-24">
        <div className="grid grid-cols-12">
          <PageHeading title="Hos sagene fysioterapi" paddingBottom="sm" />
          <p className="col-start-1 col-span-full md:col-start-6 md:col-span-6">
            Vi er fysioterapeuter med lang erfaring innenfor allmennfysioterapi.
            Vi gir tjenester med høy kvalitet sentralt beliggende i hjertet av
            Sagene. Klinikken ligger på bakkeplan med god tilgjengelighet for
            alle. Vi tilbyr et bredt spekter av fysioterapitjenester uavhengig
            av type skade eller smerter du måtte ha.
          </p>
        </div>
      </Container>
    </>
  );
}
