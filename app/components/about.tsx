import React from "react";

export default function About() {
  return (
    <div className="bg-primary my-[100px] z-10">
      <div
        id="about"
        className="py-[100px] flex justify-around items-center relative "
      >
        <p className="text-white font-normal lg:text-[120px] absolute lg:mt-[-450px] sm:mt-[-400px] sm:text-[50px] md:mt-[-300px]">
          ABOUT ME
        </p>
        <div>
          <img
            src="/about/profile.JPG"
            alt="profile"
            style={{ width: "500px", height: "auto" }}
          />
        </div>
        <div className="lg:max-w-[800px] sm:max-w-[200px] md:max-w-[350px]">
          <p className="text-white font-normal lg:text-[20px] whitespace-normal sm:text-[10px] md:text-[15px]">
            Hello, My name is Papitchaya Kadang My Nickname is Aommie. I am 22
            years old. Now I am recent graduate in Applied Computer
            Science-Multimedia at King Mongkut's University of Technology
            Thonburi. I am interested in Front-end Developer. <br />
          </p>
          <p className="mt-[20px] text-white font-normal lg:text-[20px] whitespace-normal sm:text-[10px] md:text-[15px]">
            So I made this portfolio for an entry level Front-end developer
            position to utilize my problem-solving skills, collaboration, and
            knowledge of the website development.
          </p>
        </div>
      </div>
    </div>
  );
}
