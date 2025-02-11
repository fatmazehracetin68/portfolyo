import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#500073] flex w-12">
      <div className="mx-auto my-auto text-white">
        <ul>
          <li>
            <Link
              href="https://github.com/fatmazehracetin68"
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </Link>
          </li>
          <li className="my-5">
            <Link
              href="https://www.linkedin.com/in/fatmazehra-cetin/"
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </Link>
          </li>
          <li>
            <Link
              href="mailto:fatimatuzehra.cetin@gmail.com"
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdAlternateEmail size={24} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
