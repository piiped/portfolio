import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="font-prompt bg-white p-0">
      <Link href="/">
        <img src="/logo.png" alt="logo" className="lg:w-[160px] h-auto md:w-[100px] sm:w-[80px]" />
      </Link>
    </div>
  );
}
