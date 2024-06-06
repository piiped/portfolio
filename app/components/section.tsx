import React from "react";
import Link from "next/link";

const ProjectsItems = [
  {
    id: 1,
    name: "QALLZ Shop",
    src: "/projects/web1.png",
    type: "GO TO WEBSITE",
    year: "2021",
    href: "https://qallz-114811.firebaseapp.com/index.html",
    description:
      "This is my website project when I was second year. I made homepage and some graphic. I used HTML, CSS and JavaScript.",
  },
  {
    id: 2,
    name: "FutureSkill Corporate",
    src: "/projects/web2.png",
    type: "GO TO WEBSITE",
    year: "2022",
    href: "https://futureskill.co/corporate",
    description:
      "This is my website project when I was internship at FutureSkill. I made homepage about business and education. I used Next JS, Tailwind CSS, TypeScript and CMS.",
  },
  {
    id: 3,
    name: "Green Focus Application",
    src: "/projects/app1.png",
    type: "GO TO APPLICATION",
    year: "2023",
    href: "https://github.com/piiped/Green-Focus-app",
    description:
      "This is my application project when I was third year. This application is about social detoxification. It has a timer that keeps the tree growing when user don't play with the phone. If user exit the application, the tree will die and must start over. Suitable reading time. I used Java to made this application.",
  },
  {
    id: 4,
    name: "Say No to Fast",
    src: "/projects/web3.png",
    type: "GO TO WEBSITE",
    year: "2024",
    href: "https://saynotofast.vercel.app/",
    description:
      "This is my senior project from King Mongkut's University of Technology Thonburi (KMUTT). I developed the website about problem of fast fashion. Project name is The parallax scrolling website combines collage art techniques: The problems of fast fashion. I used HTML, CSS, Javascript, and GSAP. I made all coding, my friend made all graphic and made some coding.",
  },
];

export default function Project() {
  return (
    <div id="projects">
      <p className="text-primary lg:text-[100px] text-center sm:text-[30px] md:text-[50px]">Projects</p>
      <div className="mt-[100px] mx-auto lg:px-[100px] overflow-hidden lg:max-w-[1920px] sm:px-[20px] md:px-[50px]">
        {ProjectsItems.map((item) => (
          <div
            key={item.id}
            className=" grid grid-cols-2 gap-4 mb-[50px] items-center"
          >
            <div className="rounded group max-w-[500px]">
              <Link href={item.href} target="_blank">
                <img
                  className="rounded group-hover:brightness-50 transition-all duration-500"
                  src={item.src}
                  alt={item.name}
                  style={{ width: "100%", height: "auto" }}
                />
              </Link>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 text-white ">
                <div className="group-hover:-translate-y-16 transition-all duration-500">
                  <p className="absolute top-[-15%] mx-4 text-[15px]">
                    {item.type}
                  </p>
                </div>
                <div className="group-hover:-translate-y-10 transition-all duration-500">
                  <p className="absolute top-[75%] mx-4 text-[25px]">
                    {item.name}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-primary lg:text-[30px] sm:text-[15px] md:text-[25px]">{item.name}</p>
              <p className="text-gray lg:text-[20px] lg:my-4 sm:text-[8px] sm:my-2 md:text-[15px]">{item.year}</p>
              <p className="text-primary lg:text-[20px] sm:text-[8px] md:text-[15px]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
