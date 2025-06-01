"use client";

import { Phone, Rocket } from "lucide-react";
import "./index.css";
import goTO from "@/services/util/goTo";
export default function Home() {
  return (
    <section
      id="home"
      className="flex min-h-screen w-screen justify-center items-center text-white flex-col lg:gap-5 gap-[30px] overflow-visible"
    >
      <div className="lg:w-[67%] w-[90%]  flex flex-col gap-2 items-center justify-center -mt-[70px]">
        <h1 className="lg:text-[55pt] text-6xl md:text-[50pt]  text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-white  animate__animated animate__backInUp lg:leading-[1.3] leading-[1.2]">
          Minhas ideias compilam em soluções.
        </h1>
        <p
          className="text-center lg:mt-0 lg:mb-0 mt-[10px] mb-[10px]"
          data-aos="fade-left"
        >
          Especialista em aplicações Web, Mobile e Desktop, transformo ideias em
          produtos funcionais, modernos e intuitivos
        </p>
        <footer
          data-aos="fade-right"
          className="flex w-full gap-5 p-2 justify-center items-center"
        >
          <button
            className="w-[250px] p-3 place-self-center text-purple-600 bg-white rounded-full lg:mt-10 flex justify-center items-center gap-2"
            id="pulse-box"
            onClick={() => {
              const a = document.createElement("a");
              a.href = "#about";
              a.click();
            }}
          >
            <Rocket size={14} />
            Sobre mim
          </button>

          <button
            data-aos="fade-left"
            className="w-[250px] p-3 place-self-center text-white rounded-full lg:mt-10 flex justify-center items-center gap-2"
            id="pulse-box"
            onClick={() => {
              goTO("#enterContact", false);
            }}
          >
            <Phone size={14} />
            Contactar
          </button>
        </footer>
      </div>
    </section>
  );
}
