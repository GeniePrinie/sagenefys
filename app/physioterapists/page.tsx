"use client";

import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../components/ui/collapsible";
import Container from "../components/ui/Container";
import PageHeader from "../components/ui/PageHeader";
import people from "../data/people.json";
import { useState } from "react";

export default function PhysiotherapistsPage() {
  const [openStates, setOpenStates] = useState<boolean[]>(
    Array(people.length).fill(false)
  );

  const toggleOpen = (index: number) => {
    setOpenStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <Container padding="default">
      <PageHeader title="Fysioterapeuter" />

      <div className="grid grid-cols-1 col-span-full">
        {people.map((person, index) => (
          <div key={person.id}>
            <div className="flex flex-col md:flex-row gap-8 py-8">
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
                <p className="text-primary text-lg mb-1">{person.position}</p>
                <h2 className="text-4xl leading-tight font-normal tracking-tighter mb-8">
                  {person.firstName} {person.lastName}
                </h2>

                <Collapsible
                  open={openStates[index]}
                  onOpenChange={() => toggleOpen(index)}
                >
                  <p className="mb-4 text-base">{person.specialties}</p>

                  <CollapsibleContent>
                    <div className="mb-5">
                      <h3 className="font-medium mb-2">Utdannelse</h3>
                      <p className="text-base whitespace-pre-line">
                        {person.education}
                      </p>
                    </div>

                    <div className="mb-2">
                      <p className="text-base whitespace-pre-line">
                        {person.info}
                      </p>
                    </div>

                    <p className="mb-2">
                      <span className="font-medium">Email: </span>
                      <a
                        href={`mailto:${person.email}`}
                        className="text-primary hover:underline"
                      >
                        {person.email}
                      </a>
                    </p>
                    <p className="mb-4">
                      <span className="font-medium">Telefon: </span>
                      <a
                        href={`tel:${person.phone}`}
                        className="text-primary hover:underline"
                      >
                        {person.phone}
                      </a>
                    </p>
                  </CollapsibleContent>

                  <CollapsibleTrigger asChild>
                    <button className="text-black font-medium underline-offset-4 underline focus:outline-none mt-2 cursor-pointer hover:text-primary transition-colors">
                      {openStates[index] ? "Les mindre" : "Les mer"}
                    </button>
                  </CollapsibleTrigger>
                </Collapsible>
              </div>
            </div>

            {/* Add divider line except after the last item */}
            {index < people.length - 1 && <hr className="border-primary" />}
          </div>
        ))}
      </div>
    </Container>
  );
}
