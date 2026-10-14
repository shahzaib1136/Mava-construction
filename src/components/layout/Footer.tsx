import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
} from "@/components/icons/SocialIcons";
import { site } from "@/data/site";
import { NewsletterForm } from "./NewsletterForm";

// Certificates are hosted on the reference site.
const certificates = {
  chas: "https://znbconstruction.co.uk/wp-content/uploads/2025/08/Chas-certificate.pdf",
  standard: "https://znbconstruction.co.uk/wp-content/uploads/2026/09/Certificate_Standard_GB.pdf",
};

const socialLinks = [
  { label: "Facebook", href: site.social.facebook, Icon: FacebookIcon },
  { label: "Twitter", href: site.social.twitter, Icon: TwitterIcon },
  { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedinIcon },
  { label: "Pinterest", href: site.social.pinterest, Icon: PinterestIcon },
];

// Font Awesome 5 glyphs used by the reference (phone, phone-alt, envelope regular).
function PhoneSolidIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" aria-hidden className={className}>
      <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
    </svg>
  );
}

function PhoneAltIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" aria-hidden className={className}>
      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
    </svg>
  );
}

function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" aria-hidden className={className}>
      <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" />
    </svg>
  );
}

const headingClass = "text-base leading-4 font-semibold text-navy";
const focusRing = "outline-none focus-visible:outline-2 focus-visible:outline-offset-2";

export function Footer() {
  return (
    <footer>
      {/* Call to action band */}
      <section className="relative bg-brand">
        <div
          className="pointer-events-none absolute inset-0 bg-[url('/images/icons/background-tile.svg')] bg-repeat opacity-80 mix-blend-overlay"
          aria-hidden
        />
        <div className="boxed relative flex flex-col items-center gap-5 px-5 py-15 text-center">
          <p className="text-base leading-4 font-semibold text-white">Ready to get started?</p>
          <div className="flex flex-wrap items-center justify-center">
            <h2 className="text-[32px] leading-8 font-semibold text-white">Give us a call on</h2>
            <a
              href={site.phoneHref}
              className={`inline-flex items-center gap-3.5 px-6 py-3 text-[26px] leading-6 font-medium tracking-[0.2px] text-white focus-visible:outline-white ${focusRing}`}
            >
              <PhoneSolidIcon className="size-6.5" />
              {site.phone}
            </a>
          </div>
          <Link
            href="/contact"
            className={`border border-white px-6 py-3 text-[15px] leading-6 font-medium tracking-[0.2px] text-white transition-colors duration-500 hover:bg-white hover:text-accent focus-visible:bg-white focus-visible:text-accent focus-visible:outline-white ${focusRing}`}
          >
            Send us an email
          </Link>
        </div>
      </section>

      {/* Main footer */}
      <div className="boxed">
        <div className="mt-5 flex flex-wrap border-b border-border pb-5">
          <div className="w-full p-2.5 md:w-[17%]">
            <a href={certificates.chas} className={`block focus-visible:outline-brand ${focusRing}`}>
              <Image
                src="/images/icons/13-years-badge.jpeg"
                alt="Celebrating 13 years of ZNB Construction"
                width={1086}
                height={1448}
                sizes="(min-width: 768px) 142px, 270px"
                className="mx-auto h-auto w-[73%]"
              />
            </a>
          </div>

          <div className="w-full p-2.5 md:w-[18%]">
            <Link href="/" className={`block w-[162px] md:w-[80%] focus-visible:outline-brand ${focusRing}`}>
              <Image
                src="/images/logo.jpg"
                alt="ZNB Construction"
                width={270}
                height={129}
                sizes="(min-width: 768px) 165px, 162px"
                className="h-auto w-full"
              />
            </Link>
          </div>

          <div className="w-1/2 p-2.5 md:w-[17%]">
            <a href={certificates.standard} className={`block focus-visible:outline-brand ${focusRing}`}>
              <Image
                src="/images/icons/chas-badge.jpg"
                alt="Veriforce CHAS Accredited Contractor"
                width={768}
                height={544}
                sizes="(min-width: 768px) 142px, 128px"
                className="mx-auto h-auto w-[73%]"
              />
            </a>
          </div>

          <div className="w-1/2 p-2.5 md:w-[25%]">
            <h2 className={headingClass}>Emergency Response</h2>
            <p className="mt-7.5 leading-6">For any emergencies please contact:</p>
            <ul className="mt-7.5 text-navy">
              <li className="pb-1.25">
                <a
                  href={site.emailHref}
                  className={`flex items-start transition-colors duration-300 hover:text-accent focus-visible:outline-brand ${focusRing}`}
                >
                  <span className="flex h-6 w-4.5 shrink-0 items-center">
                    <EnvelopeIcon className="size-3.5" />
                  </span>
                  <span className="pl-1.25 leading-6 [overflow-wrap:anywhere]">{site.email}</span>
                </a>
              </li>
              <li className="mt-1.25 flex items-start">
                <span className="flex h-6 w-4.5 shrink-0 items-center">
                  <PhoneAltIcon className="size-3.5" />
                </span>
                <span className="pl-1.25 leading-6">{site.phone}</span>
              </li>
            </ul>
          </div>

          <div className="w-full p-2.5 md:w-[23%]">
            <h2 className={headingClass}>Subscribe</h2>
            <p className="mt-7.5 leading-6">
              Join our newsletter to stay up to date on features and releases
            </p>
            <div className="mt-7.5">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="boxed flex flex-col md:flex-row">
        <div className="p-2.5 md:w-1/2">
          <p className="my-2.5 leading-6">© 2024 ZNB Construction LTD.</p>
          <p className="my-2.5 leading-6">
            Built by{" "}
            <a
              href="https://www.linkedin.com/in/satnambajwa/"
              className={`font-bold text-navy transition-colors duration-300 hover:text-accent focus-visible:outline-brand ${focusRing}`}
            >
              Satnam Singh Bajwa
            </a>
          </p>
        </div>
        <div className="flex items-center p-2.5 md:w-1/2 md:justify-end">
          <ul className="flex gap-1.25">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`flex size-7.5 items-center justify-center bg-social text-white transition-opacity hover:opacity-90 focus-visible:outline-brand ${focusRing}`}
                >
                  <Icon className="size-3.75" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
