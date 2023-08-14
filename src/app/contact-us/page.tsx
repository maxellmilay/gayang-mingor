import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

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
      <div className="flex justify-center my-10">
        <div className="w-1/2 flex flex-col items-center sm:text-xl md:text-2xl lg:text-5xl text-mingor-blue-100 font-bold gap-16">
          <h2>Our Socials</h2>
          <div className="flex justify-around w-full sm:text-2xl md:text-3xl lg:text-6xl">
            <Link href={"https://www.facebook.com"}>
              <FaFacebook />
            </Link>
            <Link href={"https://www.twitter.com"}>
              <FaTwitter />
            </Link>
            <Link href={"https://www.instagram.com"}>
              <FaInstagram />
            </Link>
          </div>
          <h3 className="mt-20 text-center">
            Reaching out to an individual member?
          </h3>
          <button className="bg-mingor-blue-100 text-white rounded-full py-2 px-5 text-2xl">
            Send a message
          </button>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
