import React from "react";
import Link from "next/link";

const ProjectsItems = [
  {
    id: 1,
    name: "Website Project",
    src: "/projects/web1.png",
    type: "WEBSITE",
    href:"",
  },
  {
    id: 2,
    name: "Website internship",
    src: "/projects/web2.png",
    type: "WEBSITE",
    href:"",
  },
  { id: 3, name: "Thesis", 
    src: "/projects/web3.png", 
    type: "WEBSITE",
    href:"",
  },
  {
    id: 4,
    name: "Software Develop",
    src: "/projects/web3.png",
    type: "WEBSITE",
    href:"",
  },
];

export default function Project() {
  return (
    <div id="projects" className="grid grid-cols-3 mt-[100px] gap-4 mx-4 overflow-hidden z-10">
      {ProjectsItems.map((item) => (
        <div key={item.id} className="max-w-auto">
          <div className="rounded relative group">
            <Link href="/">
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
        </div>
      ))}
    </div>
  );
}
