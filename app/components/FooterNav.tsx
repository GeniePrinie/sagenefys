import Container from "./ui/Container";
import CustomLink from "./ui/Link";
import { FacebookIcon, LocationIcon, EmailIcon, PhoneIcon } from "./icons";

const FACEBOOK_URL = "https://www.facebook.com/drobakgatafysio";
const LOCATION_URL =
  "https://www.google.com/maps/place/Stavangergata+40,+0467+Oslo,+Norway";
const EMAIL_URL = "mailto:info@sagene-fysioterapi.no";
const PHONE_URL = "tel:+4722232690";

export default function FooterNav() {
  return (
    <Container padding="noTopPadding" className="pb-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-y-6 text-lg border-t border-blue-600 pt-8">
        {/* Left */}
        <div className="text-center md:text-left w-full md:w-auto">
          <CustomLink href="/" noHover>
            ©Sagene Fysioterapi & Trening
          </CustomLink>
        </div>
        {/* Right: Icons */}
        <div className="flex gap-6 w-full md:w-auto justify-center sm:justify-end items-center">
          <CustomLink
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-primary transition-colors"
          >
            <FacebookIcon />
          </CustomLink>
          <CustomLink
            href={LOCATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Location"
            className="hover:text-primary transition-colors"
          >
            <LocationIcon />
          </CustomLink>
          <CustomLink
            href={EMAIL_URL}
            aria-label="Email"
            className="hover:text-primary transition-colors"
          >
            <EmailIcon />
          </CustomLink>
          <CustomLink
            href={PHONE_URL}
            aria-label="Phone"
            className="hover:text-primary transition-colors"
          >
            <PhoneIcon />
          </CustomLink>
        </div>
      </div>
    </Container>
  );
}
