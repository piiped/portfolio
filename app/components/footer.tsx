import Link from "next/link"
import React from "react"

export default function Footer() {
    return (
        <div className="bg-primary lg:pt-20 sm:pt-[20px]">
            <hr className="m-10 text-white"></hr>
            <div>
                <Link href='mailto:papitchaya.2344@gmail.com'>
                    <p className="text-white lg:text-[80px] text-center sm:text-[15px] md:text-[50px]">Contact Me</p>
                </Link>
            </div>
            <hr className="m-10 text-white"></hr>
            <div className="lg:py-5 sm:py-2 md:py-3">
                <p className="text-white lg:text-[20px] text-center sm:text-[8px] md:text-[15px]">Papitchaya Kadang © |2024 all rights reserved</p>
            </div>
        </div>
    )
}