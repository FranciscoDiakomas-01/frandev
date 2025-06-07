"use client";
import "./index.css";
import { Menu, Phone } from "lucide-react";
import Logo from "../Logo";
import IHeaderLink from "./type";
import giHub from "../../assets/tec/GitHub.svg";
import Image from "next/image";
import { useState } from "react";
import goTO from "@/services/util/goTo";
export default function Header() {
  const [active, setActive] = useState(1);
  const LeftLinks: IHeaderLink[] = [
    {
      id: 1,
      text: "Inicial",
      to: "#home",
    },
    {
      id: 18,
      text: "Sobre",
      to: "#about",
    },
    {
      id: 16,
      text: "Serviços",
      to: "#services",
    },
    {
      id: 15,
      text: "Habilidades",
      to: "#skills",
    },
    {
      id: 14,
      text: "Projectos",
      to: "#project",
    },
  ];
  return (
    <>
      <header className="fixed lg:flex hidden text-white top-0  w-full justify-center items-center">
        <nav
          className="grid  grid-cols-3 w-[90%] items-center overflow-hidden "
          id="header"
        >
          <div
            className="flex gap-5 mt-4 overflow-hidden"
            data-aos="zoom-in-right"
          >
            {LeftLinks.map((link, index) => (
              <a
                href={link.to}
                key={index}
                className={active == link.id ? "active" : ""}
                onClick={() => {
                  setActive(link.id);
                }}
              >
                {link.text}
              </a>
            ))}
          </div>
          <div
            className="flex justify-center
         items-center"
            data-aos="zoom-in-up"
          >
            <Logo showLabel={false} />
          </div>
          <div
            className="flex justify-end gap-4 items-center  mt-4"
            data-aos="zoom-in-left"
          >
            <button
              className="flex items-center justify-center gap-2 w-[120px] rounded-full p-[5px]"
              id="gradient"
              onClick={() => {
                goTO("#enterContact", false);
              }}
            >
              Contactar <Phone size={12} />
            </button>
            <button
              className="  w-[120px] p-[5px] items-center justify-center gap-1 flex rounded-full text-black bg-white"
              onClick={() => {
                goTO("https://github.com/FranciscoDiakomas-01", true);
              }}
            >
              github
              <Image
                className="h-[20px] w-[20px] object-contain"
                src={giHub}
                alt="giHub"
              />
            </button>
          </div>
        </nav>
      </header>

      <header className=" fixed lg:hidden flex text-white top-0  w-full justify-between items-center p-2">
        <Logo showLabel={false} />
        <Menu
          id="menuBar"
          size={35}
          className="text-purple-600 transition-all"
          onClick={() => {
            const grad = document.getElementById("grad");
            const menu = document.getElementById("menuBar");
            if (grad && menu) {
              grad.classList.toggle("open");
              menu.classList.toggle("open");
            }
          }}
        />
      </header>

      <nav
        className="lg:hidden  flex gap-5 mt-4 overflow-hidden fixed bottom-0 h-screen w-screen z-5 flex-col items-center pt-[100px] text-white"
        id="grad"
        onClick={() => {
          const grad = document.getElementById("grad");
          if (grad) {
            grad.classList.toggle("open");
          }
        }}
      >
        {LeftLinks.map((link, index) => (
          <a
            href={link.to}
            key={index}
            className={active == link.id ? "active" : ""}
            onClick={() => {
              setActive(link.id);
            }}
          >
            {link.text}
          </a>
        ))}

        <button
          className="flex items-center justify-center gap-2 w-[170px] rounded-full p-[5px]"
          id="gradient"
          onClick={() => {
            goTO("#enterContact", false);
          }}
        >
          Contactar <Phone size={12} />
        </button>
        <button
          className=" w-[170px] p-[5px] items-center justify-center gap-1 flex rounded-full text-black bg-white"
          onClick={() => {
            goTO("https://github.com/FranciscoDiakomas-01", true);
          }}
        >
          github
          <Image
            className="h-[20px] w-[20px] object-contain"
            src={giHub}
            alt="giHub"
          />
        </button>
      </nav>
    </>
  );
}
