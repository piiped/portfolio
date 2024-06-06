import React from "react"

export default function Cover() {
    return(
        <>
            <main className="z-10 mx-auto h-full flex flex-col justify-center items-center animate-transition transition-all duration-200">
                <div>
                    <p className="text-primary lg:flex lg:justify-center font-normal lg:text-[130px] lg:mt-[160px] lg:ml-[-200px] md:mx-auto md:text-center md:text-[80px] md:mt-[100px] sm:h-[100px] sm:mt-[100px] sm:text-[30px]">WELCOME TO MY</p>
                </div>
                <div className="lg:flex lg:justify-center  md:mx-auto md:text-center sm:flex sm:justify-center">
                    <p className="font-normal lg:text-[250px] lg:mt-[-30px] text-primary md:text-[150px] md:mt-[-50px] sm:mt-[-50px] sm:text-[30px]">PORT</p>
                    <p className="font-playfair italic lg:text-[230px] text-secondary lg:mt-[-30px] md:text-[150px] md:mt-[-50px] sm:mt-[-50px] sm:text-[30px]">folio</p>
                </div>

            </main>
        </>
    )
}