import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className=" w-14 min-h-screen bg-[#500073]">
      <div className="fixed top-1/2 right-1 -translate-y-1/2 flex flex-col items-center gap-4 bg-[#500073] p-3 rounded-lg shadow-lg">
        <div className="flex flex-col gap-4 text-white">
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
    </div>
  );
};

export default Footer;
