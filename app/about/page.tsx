import Container from "../components/ui/Container";
import Image from "next/image";

export default function AboutPage() {
  return (
    <Container padding="default" className="py-24">
      <h1 className="col-start-1 col-span-full md:col-span-5 text-3xl font-semibold pb-8">
        Om oss
      </h1>
      <div className="grid grid-cols-12">
        <h2 className="col-start-1 col-span-full md:col-span-5 uppercase text-lg pb-8 md:pb-0">
          Et team med erfarne terapeuter
        </h2>
        <div className="col-start-1 col-span-full md:col-span-7 pb-8 md:pb-12">
          <Image
            src="/images/about.jpg"
            alt="Hero image"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>
        <p className="col-start-1 col-span-full md:col-start-6 md:col-span-6">
          Vi er fysioterapeuter med lang erfaring innenfor allmennfysioterapi.
          Vi gir tjenester med høy kvalitet sentralt beliggende i hjertet av
          Sagene. Klinikken ligger på bakkeplan med god tilgjengelighet for
          alle. Vi tilbyr et bredt spekter av fysioterapitjenester uavhengig av
          type skade eller smerter du måtte ha.
        </p>
      </div>
    </Container>
  );
}
