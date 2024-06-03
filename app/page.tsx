import Image from "next/image";
import Navbar from "./components/navigation/index"
import Cover from "./components/pages/cover"
import Section1 from "./components/pages/section1";

export default function Home() {
  return (
    <div className="w-full h-auto font-prompt">
      <Navbar/>
      <Cover/>
      <Section1/>
    </div>
  );
}
