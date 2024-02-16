import Image from "next/image";
import { Inter } from "next/font/google";
import Texts from "../components/Texts";
import { Second } from "@/components/Second";
import { Third } from "@/components/Third";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" relative flex flex-col scroll-smooth">
      <Header />
      <img src="hole.jpeg" className="w-full "></img>
      <Texts />
      <img src="hoole.jpeg"></img>
      <Second />
      <img src="blackhole.jpg" className=""></img>
      <Third />
    </div>
  );
}
