import Container from "./ui/Container";
import CustomLink from "./ui/Link";
import Image from "next/image";

const FACEBOOK_URL = "https://www.facebook.com/drobakgatafysio";
const LOCATION_URL =
  "https://www.google.com/maps/place/Stavangergata+40,+0467+Oslo,+Norway";
const EMAIL_URL = "mailto:info@sagene-fysioterapi.no";
const PHONE_URL = "tel:+4722232690";

export default function FooterNav() {
  return (
    <Container className="py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-y-6 text-lg border-t border-blue-600 pt-8">
        {/* Left */}
        <div className="text-center md:text-left w-full md:w-auto">
          <p>©Sagene Fysioterapi & Trening</p>
        </div>
        {/* Right: Icons */}
        <div className="flex gap-6 w-full md:w-auto justify-center sm:justify-end items-center">
          <CustomLink
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Image
              src="/icons/facebook.svg"
              alt="Facebook"
              width={24}
              height={24}
            />
          </CustomLink>
          <CustomLink
            href={LOCATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Location"
          >
            <Image
              src="/icons/location.svg"
              alt="Location"
              width={20}
              height={20}
            />
          </CustomLink>
          <CustomLink href={EMAIL_URL} aria-label="Email">
            <Image src="/icons/email.svg" alt="Email" width={25} height={25} />
          </CustomLink>
          <CustomLink href={PHONE_URL} aria-label="Phone">
            <Image src="/icons/phone.svg" alt="Phone" width={22} height={22} />
          </CustomLink>
        </div>
      </div>
    </Container>
  );
}
