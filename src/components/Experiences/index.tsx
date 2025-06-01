"use client";

import { ArrowBigUp, Phone, Rocket } from "lucide-react";
import "./index.css";
import { useState } from "react";
import myExperinece from "@/constants/experince";
import goTO from "@/services/util/goTo";
export default function Experiences() {
  const [active, setActive] = useState(0);
  return (
    <section
      id="experince"
      className="pt-[120px] flex flex-col lg:flex-row gap-[20px] lg:pl-[50px] lg:pr-[50px] p-[20px] pr-[35px] text-white lg:pb-[40px]"
    >
      <article
        className="lg:w-[70%] w-full flex flex-col gap-9"
        data-aos="zoom-in-right"
      >
        <div
          className="flex items-center gap-2"
          data-aos="zoom-in-left"
          data-aos-easing="ease-in-sine"
        >
          <span>
            <Rocket size={14} />
          </span>
          <p>Experiênicas de trabalho</p>
        </div>
        <h1
          id="gradient"
          className="lg:w-[80%] bg-clip-text text-transparent lg:text-7xl text-6xl font-bold lg:overflow-hidden overflow-visible wrap-anywhere"
        >
          Algumas das Minhas Experiências
        </h1>

        <div
          id="transparent"
          className="flex flex-col gap-4 md:w-[70%] lg:w-[70%]"
          data-aos="zoom-in"
        >
          <h2 className="text-[17px]">
            Quer transformar sua ideia em um projeto real?
          </h2>
          <p className="text-[12px]">
            Você tem a visão, eu tenho a experiência para desenvolver. Com as
            ferramentas certas, a gente tira sua ideia do papel e coloca ela
            online, pronta pra alcançar seu público
          </p>
          <button
            id="gradient"
            className="flex justify-center items-center p-2 gap-1 rounded-full lg:w-[30%]"
            onClick={() => {
              goTO("#enterContact", false);
            }}
          >
            <Phone size={14} />
            Contactar
          </button>
        </div>
      </article>
      <aside
        className="lg:w-[50%] grid md:grid-cols-2 gap-7 overflow-visible"
        data-aos="fade-left"
      >
        {Array.isArray(myExperinece) &&
          myExperinece.length > 0 &&
          myExperinece.map((data, key) => (
            <figure
              className={`flex flex-col gap-4 transition-all opacity-${
                key == active ? 100 : 70
              }`}
              key={key}
              id="transparent"
              onClick={() => {
                setActive(key);
              }}
            >
              <div className="flex flex-col gap-3">
                <span className="flex items-center justify-between gap-3">
                  <h1>
                    {data.title} {"  > "} {data.enterprise}
                  </h1>
                  <button
                    className={`border rounded-sm w-[30px] h-[20px] flex justify-center items-center overflow-hidden `}
                  >
                    <ArrowBigUp
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        active === key ? "rotate-180" : "rotate-0"
                      }`}
                      size={17}
                      fill="white"
                      style={{}}
                    />
                  </button>
                </span>
                <footer>{data.date}</footer>
              </div>
              <figcaption
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  active === key
                    ? "max-h-[200px] min-h-[100px]"
                    : "max-h-0 min-h-0"
                }`}
              >
                {data.description}
              </figcaption>
            </figure>
          ))}
      </aside>
    </section>
  );
}
