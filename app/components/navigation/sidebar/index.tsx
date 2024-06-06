import React from "react";
import Link from "next/link";

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggle }) => {
  return (
    <div
      className="sidebar-container md:hidden fixed w-[100px] h-auto pt-[15px] overflow-hidden items-center justify-center bg-primary flex flex-col right-0 z-10"
      style={{
        opacity: isOpen ? "1" : "0",
        top: isOpen ? "0" : "-100%",
      }}
    >
      <button onClick={toggle} >
        {/* Close icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          className="text-white"
        >
          <path
            fill="currentColor"
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          />
        </svg>
      </button>
      <ul className="sidebar-nav text-center leading-relaxed font-extralight text-[10px] pb-[10px]">
        <li>
          <Link href="#about">
            <p className="text-white">About Me</p>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <p className="text-white">Projects</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
