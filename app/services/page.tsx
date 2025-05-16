import Image from "next/image";
import Link from "next/link";
import Container from "../components/ui/Container";
import PageHeader from "../components/ui/PageHeader";
import services from "../data/services.json";
export const metadata = {
  title: "Tjenester | Sagene Fysioterapi",
  description:
    "Se vårt brede utvalg av fysioterapitjenester og behandlingstilbud.",
};

export default function ServicesPage() {
  return (
    <Container padding="noTopPadding">
      <PageHeader title="Tjenester" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-24 col-span-full mt-2 pt-7">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01]"
          >
            <Link
              href={`/services/${service.slug}`}
              className="group flex-grow"
            >
              <div className="relative h-96 w-full mb-4 overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl mt-8 font-semibold text-black group-hover:text-custom-blue-600 transition-colors">
                {service.title}
              </h2>
              <p className="mt-2 line-clamp-2 text-black/70">
                {service.description}
              </p>
            </Link>
            <div className="mt-4">
              <Link href={`/services/${service.slug}`}>
                <span className="inline-flex items-center hover:text-primary transition-colors">
                  Les mer <span className="ml-[3px] pt-[2px]">→</span>
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
