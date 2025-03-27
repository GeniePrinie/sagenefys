import Image from "next/image";
import Link from "next/link";
import Container from "../components/ui/Container";
import services from "../data/services.json";

export default function ServicesPage() {
  return (
    <Container padding="default" className="py-24">
      <h1 className="col-start-1 col-span-full md:col-span-5 text-xl font-semibold pb-8">
        Tjenester
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 col-span-full">
        {services.map((service) => (
          <Link
            key={service.id}
            href={`/services/${service.slug}`}
            className="block group hover:shadow-md transition-shadow duration-300 rounded-lg overflow-hidden"
          >
            <div className="relative h-90 w-full">
              <Image
                src={service.img}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="py-4">
              <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                {service.title}
              </h2>
              <p className="mt-2 line-clamp-2 text-gray-700">
                {service.description}
              </p>
              <span className="inline-block mt-4 text-blue-600 font-medium">
                Les mer →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
