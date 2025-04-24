import Image from "next/image";
import Link from "next/link";
import Container from "../components/ui/Container";
import services from "../data/services.json";

export default function ServicesPage() {
  return (
    <Container padding="default" className="py-24">
      <h1 className="col-start-1 col-span-full md:col-span-5 text-3xl font-semibold pb-8">
        Tjenester
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-24 col-span-full">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col h-full">
            <Link
              href={`/services/${service.slug}`}
              className="group flex-grow"
            >
              <div className="relative h-64 w-full mb-4 overflow-hidden rounded-md">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-black group-hover:text-custom-blue-600 transition-colors">
                {service.title}
              </h2>
              <p className="mt-2 line-clamp-2 text-black/70">
                {service.description}
              </p>
            </Link>
            <div className="mt-4">
              <Link href={`/services/${service.slug}`}>
                <span className="inline-flex items-center px-8 py-2 bg-custom-blue-600 text-white rounded-full font-medium hover:bg-custom-blue-900 transition-colors">
                  Ser mer <span className="ml-2">→</span>
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
