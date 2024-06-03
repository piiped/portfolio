import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Logo(){
    return (
        <div className="font-prompt bg-white">
            <Link href="/">
                <Image src={'/logo.png'} alt="logo" height={40} width={200}/>
                {/* <p className="font-medium text-primary text-[32px]">Papitchaya K.</p> */}
            </Link>
        </div>
    )
}
