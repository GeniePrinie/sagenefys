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
    <Container padding="default" className="py-16">
      <h1 className="col-start-1 col-span-full md:col-span-5 text-3xl font-semibold pb-8">
        Fysioterapeuter
      </h1>

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
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="flex-1 md:max-w-xl lg:max-w-2xl">
                <p className="text-sagene-blue text-lg mb-1">
                  {person.position}
                </p>
                <h2 className="text-[2.5rem] leading-tight font-semibold mb-8">
                  {person.firstName} {person.lastName}
                </h2>

                <Collapsible>
                  <p className="mb-4 text-base">
                    {person.description?.split("\n\n")[0] ||
                      `${person.firstName} kombinerer aktiv rehabilitering med manuell behandling, 
                    ultralyddiagnostikk og trykkbølgebehandling for effektiv lindring 
                    av muskel- og skjelettplager.`}
                  </p>

                  <CollapsibleContent>
                    <p className="mb-5 text-base">
                      {person.description?.split("\n\n")[1] ||
                        `Som fysioterapeut ved Sagene bringer ${person.firstName} et glødende 
                      engasjement for aktiv rehabilitering og moderne 
                      smertevitenskap inn i muskel- og skjelettfaget.`}
                    </p>

                    <p className="mb-5 text-base">
                      {person.description?.split("\n\n")[2] ||
                        `Gjennom sin mangfoldige karriere som utøver, trener og 
                      fysioterapeut har ${person.firstName} opparbeidet en unik 
                      erfaring innen idrettsrelaterte hånd- og fingerskader. På et 
                      bredere grunnlag arbeider han omfattende med diagnostisering 
                      og behandling av plager i skuldre, albue, hender og fingre.`}
                    </p>

                    <p className="mb-2">
                      <span className="font-medium">Email: </span>
                      <a
                        href={`mailto:${person.email}`}
                        className="text-sagene-blue hover:underline"
                      >
                        {person.email}
                      </a>
                    </p>
                    <p className="mb-4">
                      <span className="font-medium">Telefon: </span>
                      <a
                        href={`tel:${person.phone}`}
                        className="text-sagene-blue hover:underline"
                      >
                        {person.phone}
                      </a>
                    </p>
                  </CollapsibleContent>

                  <CollapsibleTrigger asChild>
                    <button className="text-black font-medium underline focus:outline-none mt-2">
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
            {index < people.length - 1 && <hr className="border-sagene-blue" />}
          </div>
        ))}
      </div>
    </Container>
  );
}
