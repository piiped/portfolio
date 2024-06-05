import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="font-prompt bg-white p-0">
      <Link href="/">
        <Image src={"/logo.png"} alt="logo" height={40} width={200} />
      </Link>
    </div>
  );
}
