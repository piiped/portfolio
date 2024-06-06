import Navbar from "./components/navigation/index"
import Cover from "./components/cover"
import Project from "./components/section";
import About from "./components/about";
import Footer from "./components/footer";
import React from "react";


export default function Home() {
  return (
    <div className="w-full h-auto font-prompt scroll-smooth">
      <Navbar/>
      <Cover/>
      <About/>
      <Project/>
      <Footer/>
    </div>
  );
}
