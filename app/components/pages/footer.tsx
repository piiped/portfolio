import Link from "next/link"
import React from "react"

export default function Footer() {
    return (
        <div className="bg-primary pt-20">
            <hr className="m-10 text-white"></hr>
            <div>
                <Link href='mailto:papitchaya.2344@gmail.com'>
                    <p className="text-white text-[80px] text-center ">Contact Me</p>
                </Link>
            </div>
            <hr className="m-10 text-white"></hr>
            <div className="mt-5">
                <p className="text-white text-[20px] text-center">Papitchaya Kadang © |2024 all rights reserved</p>
            </div>
        </div>
    )
}