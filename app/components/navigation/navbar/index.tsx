import React from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className="relative">
      <div className="w-full fixed h-20 top-0 ">
        <div className="container mx-auto px-5 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="hidden md:flex gap-x-6 text-[30px] font-extralight">
              <li>
                <Link href="/projects">
                  <p className=" text-primary hover:text-secondary hover:border-b-2 transition duration-700 ease-in-out">Projects</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p className="text-primary hover:text-secondary hover:border-b-2 transition duration-700 ease-in-out">About Me</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p className="text-primary hover:text-secondary hover:border-b-2 transition duration-700 ease-in-out">Contact</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
