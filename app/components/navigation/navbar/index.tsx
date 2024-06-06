"use client";

import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Sidebar from "../sidebar";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="z-50 scroll-smooth">
      <div className="w-full h-20 top-0">
        <div className="container mx-auto px-5 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <button onClick={toggleSidebar} className="md:hidden ">
              {/* Add a menu icon here for mobile view */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                />
              </svg>
            </button>
            <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
            <ul className="hidden md:flex gap-x-6 lg:text-[30px] font-extralight md:text-[15px]">
              <li>
                <Link href="#about">
                  <p className="text-primary hover:text-secondary hover:border-b-2 transition duration-700 ease-in-out">
                    About Me
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#projects">
                  <p className="text-primary hover:text-secondary hover:border-b-2 transition duration-700 ease-in-out">
                    Projects
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
