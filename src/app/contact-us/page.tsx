import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import externalLinks from "@/enums/externalLinks";

interface ContactUsProps {}

function ContactUs({}: ContactUsProps) {
  return (
    <>
      <div className="aspect-[1440/384] w-full relative">
        <Image
          fill
          alt="header"
          src="/images/contact-us-header.png"
          className="object-cover"
          unoptimized={true}
        />
      </div>
      <div className="flex flex-col items-center my-10 lg:my-16">
        <div className="w-3/4 flex flex-col items-center text-2xl md:text-3xl lg:text-5xl text-mingor-blue-100 font-bold gap-8 lg:gap-16 text-center">
          <h2>Our Socials</h2>
          <div className="flex justify-around w-full text-6xl md:text-7xl lg:text-8xl">
            <Link href={externalLinks.FB}>
              <FaFacebook />
            </Link>
            <Link href={externalLinks.TWITTER}>
              <FaTwitter />
            </Link>
            <Link href={externalLinks.INSTAGRAM}>
              <FaInstagram />
            </Link>
          </div>
          <h3 className="mt-14 lg:mt-20 text-center">
            Reaching out to an individual member?
          </h3>
          <Link
            href={externalLinks.PALANCA}
            className="bg-mingor-blue-100 text-white rounded-full py-1 px-5 text-base md:text-md lg:text-2xl"
          >
            Send a message
          </Link>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
