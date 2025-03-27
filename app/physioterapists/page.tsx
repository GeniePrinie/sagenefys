"use client";

import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../components/ui/collapsible";
import Container from "../components/ui/Container";
import people from "../data/people.json";

export default function TeamPage() {
  return (
    <Container padding="default" className="py-24">
      <h1 className="col-start-1 col-span-full md:col-span-5 text-xl font-semibold pb-8">
        Fysioterapeuter
      </h1>

      <div className="grid grid-cols-1 gap-8 col-span-full">
        {people.map((person, index) => (
          <div key={person.id}>
            <div className="flex flex-col md:flex-row gap-6 py-8">
              <div className="relative h-80 w-full md:w-80 md:h-80 flex-shrink-0">
                <Image
                  src={person.img}
                  alt={`${person.firstName} ${person.lastName}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover"
                />
              </div>

              <div className="flex-1 md:max-w-xl lg:max-w-2xl">
                <p className="text-blue-600">{person.position}</p>
                <h2 className="text-2xl font-semibold mb-4">
                  {person.firstName} {person.lastName}
                </h2>

                <Collapsible>
                  <p className="mb-4">{person.description.split("\n\n")[0]}</p>

                  <CollapsibleContent>
                    <p className="mb-4">
                      {person.description.split("\n\n")[1]}
                    </p>

                    <p className="mb-2">
                      <span className="font-medium">Email: </span>
                      <a
                        href={`mailto:${person.email}`}
                        className="text-blue-600 hover:underline"
                      >
                        {person.email}
                      </a>
                    </p>
                    <p className="mb-4">
                      <span className="font-medium">Telefon: </span>
                      <a
                        href={`tel:${person.phone}`}
                        className="text-blue-600 hover:underline"
                      >
                        {person.phone}
                      </a>
                    </p>
                  </CollapsibleContent>

                  <CollapsibleTrigger asChild>
                    <button className="text-black font-medium hover:underline focus:outline-none mt-2">
                      {/* We'll use data attributes to style based on open/closed state */}
                      <span className="group" data-state="closed">
                        Les mer
                      </span>
                      <span className="group" data-state="open">
                        Les mindre
                      </span>
                    </button>
                  </CollapsibleTrigger>
                </Collapsible>
              </div>
            </div>

            {/* Add divider line except after the last item */}
            {index < people.length - 1 && <hr className="border-gray-200" />}
          </div>
        ))}
      </div>
    </Container>
  );
}
