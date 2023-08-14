import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import externalLinks from "@/enums/externalLinks";

const Socials = () => {
  return (
    <>
      <a rel="noreferrer" href={externalLinks.FB} target="_blank">
        <FaFacebook />
      </a>
      <a rel="noreferrer" href={externalLinks.TWITTER} target="_blank">
        <FaTwitter />
      </a>
      <a rel="noreferrer" href={externalLinks.INSTAGRAM} target="_blank">
        <FaInstagram />
      </a>
    </>
  );
};

export default Socials;
