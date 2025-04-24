import Container from "./components/ui/Container";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      {/* Test element to check color system */}
      <div className="my-8 p-4 rounded bg-blue-100 text-blue-600">
        <h2 className="text-2xl font-bold">Color Test Element</h2>
        <p>
          This element uses the bg-blue-100 and text-blue-600 utility classes
          directly
        </p>
      </div>

      <Image
        src="/images/hero.jpg"
        alt="Hero image"
        width={1000}
        height={1000}
        className="w-full h-auto"
      />
      <Container padding="default" className="py-24">
        <div className="grid grid-cols-12">
          <h1 className="col-start-1 col-span-full md:col-span-5 uppercase text-lg">
            Hos sagene fysioterapi
          </h1>

          <p className="col-start-1 col-span-full md:col-start-6 md:col-span-6">
            Vi er fysioterapeuter med lang erfaring innenfor allmennfysioterapi.
            Vi gir tjenester med høy kvalitet sentralt beliggende i hjertet av
            Sagene. Klinikken ligger på bakkeplan med god tilgjengelighet for
            alle. Vi tilbyr et bredt spekter av fysioterapitjenester uavhengig
            av type skade eller smerter du måtte ha.
          </p>
        </div>
      </Container>
    </Container>
  );
}
