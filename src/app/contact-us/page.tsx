import routes from "@/enums/routes";
import React from "react";
import Link from "next/link";
import Socials from "@/components/Socials";

const ContactUs = () => {
  return (
    <>
      <section className="flex flex-col justify-end bg-contact-header h-[9rem] md:h-[20rem] px-9 md:px-20 py-4 bg-cover bg-center">
        <h1 className="text-mingor-yellow text-4xl md:text-[5.5rem] font-bitcheese md:mb-12">
          Contact Us
        </h1>
      </section>
      <section className="flex flex-col items-center text-mingor-blue-200 font-gotham font-bold p-7 md:p-14 text-center">
        <p className="text-2xl md:text-6xl mb-5 md:mb-10">Our Socials</p>
        <div className="flex justify-evenly w-72 md:w-[45rem] text-5xl md:text-[5.5rem] mb-16 md:mb-32">
          <Socials />
        </div>
        <p className="text-2xl md:text-6xl md:w-[45rem] mb-6 md:mb-10">
          Reaching out to an individual member?
        </p>
        <Link
          href={routes.MEMBERS}
          className="bg-mingor-blue-200 text-white md:text-xl w-fit px-7 py-2 rounded-[50px]"
        >
          Send a message
        </Link>
      </section>
    </>
  );
};

export default ContactUs;
