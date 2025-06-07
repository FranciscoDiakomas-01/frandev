"use client";

import { useState } from "react";
import "./index.css";
import {
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

import {
  LocationEditIcon,
  MessageCircleCode,
  PhoneCallIcon,
  Send,
} from "lucide-react";

import hero from "@/assets/hero-img.webp";
import Image from "next/image";
import { SendMessage } from "@/services/util/senmail";


export default function TestimonialsSlider() {
  const sosialMidasLinks = [
    {
      name: "GitHub",
      url: "https://github.com/FranciscoDiakomas-01",
      icon: <FaGithub size={19} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/francisco-diakomas/",
      icon: <FaLinkedin size={19} />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/francisco.diakomas",
      icon: <FaFacebook size={19} />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/fran.ciscodiakomas/",
      icon: <FaInstagram size={19} />,
    },
    {
      name: "Whatsapp",
      url: "https://wa.me/+244957777993?text=Olá!%20Vim%20pelo%20seu%20portfólio%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços.",
      icon: <FaWhatsapp size={19} />,
    },
  ];
  const [load, setLoad] = useState(false);
  const [result, setResult] = useState("");

  async function senEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name") as string;
    const email = form.get("email") as string;
    const tel = form.get("tel") as string;
    const msg = form.get("message") as string;
    setLoad(true);
    const wasSent = await SendMessage({
      email,
      msg,
      name,
      tel,
    });
    if (wasSent) {
      setResult("Mensagem enviado com sucesso");
      const forms = document.querySelectorAll("form");
      forms.forEach((ele) => {
        ele.reset();
      });
    } else {
      setResult("Erro nos dados");
    }
    setTimeout(() => {
      setLoad(false);
      setResult("");
    }, 3000);
  }

  return (
    <>
      <aside
        className=" gap-7 lg:gap-0 pt-[90px] py-8 flex flex-col lg:flex-row items-center justify-center p-[20px]  lg:pr-[40px] lg:pl-[40px] lg:pt-[120px]"
        id="enterContact"
      >
        <article
          className="lg:h-[500px] lg:w-[40%] md:w-[80%] text-white flex flex-col ga-[20px]"
          id="contcta"
          data-aos="zoom-in-right"
        >
          <h1
            className="text-5xl font-semibold 
             text-transparent bg-clip-text overflow-hidden"
            id="gradient"
          >
            Entre em contato
          </h1>
          <p className="opacity-80">
            Se você está interessado em discutir um projeto ou tem alguma
            dúvida, sinta-se à vontade para entrar em contato comigo. Estou aqui
            para ajudar!
          </p>
          <div className="flex gap-2 items-center ">
            <span id="gradient" className="p-2 rounded-full">
              <MessageCircleCode size={17} />
            </span>
            <p>franciscodiakoma@gmail.com</p>
          </div>
          <div className="flex gap-2 items-center ">
            <span id="gradient" className="p-2 rounded-full">
              <PhoneCallIcon size={20} />
            </span>
            <p>+244 957 777 993</p>
          </div>
          <div className="flex gap-2 items-center ">
            <span id="gradient" className="p-2 rounded-full">
              <PhoneCallIcon size={20} />
            </span>
            <p>+244 975 832 386</p>
          </div>
          <div className="flex gap-2 items-center ">
            <span id="gradient" className="p-2 rounded-full">
              <LocationEditIcon size={20} />
            </span>
            <p>
              Luanda {">"} Angola {">"} Cacuaco
            </p>
          </div>
          <footer className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-4 mt-4 p-3">
            {sosialMidasLinks.map((link, index) => (
              <a
                id="social"
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:underline bg-[ #ffffff09] border-purple-400 border border-dashed opacity-50 p-2 rounded-full flex items-center justify-center transition-all duration-300 hover:opacity-100 ho"
              >
                <div>{link.icon}</div>
              </a>
            ))}
          </footer>
        </article>

        <form
          data-aos="zoom-in-left"
          id="contact"
          onSubmit={senEmail}
          className="h-[500px] w-full  flex flex-col gap-4 lg:h-[500px] lg:w-[40%] md:w-[80%]"
        >
          <label htmlFor="name" className="text-xl">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Entre com seu nome"
            className="input"
          />

          <label htmlFor="tel" className="text-xl">
            Telefone
          </label>
          <input
            type="tel"
            required
            name="tel"
            id="tel"
            placeholder="xxx xxx xxx"
            className="input"
          />

          <label htmlFor="email" className="text-xl">
            Email
          </label>
          <input
            type="email"
            required
            id="email"
            name="email"
            placeholder="exemplo@gmail.com"
            className="input"
          />

          <label htmlFor="message" className="text-xl">
            Messagem
          </label>
          <textarea
            required
            id="message"
            name="message"
            className="teaxrea"
            placeholder="Messagem"
          ></textarea>
          <button
            type="submit"
            id="gradient"
            className="rounded-full flex justify-center items-center p-2.5 gap-2 "
          >
            {load ? (
              <b>...</b>
            ) : (
              <>
                <Send size={13} />
                Enviar
              </>
            )}
          </button>

          <p className="text-center">{result}</p>
        </form>
      </aside>

      <Image
        className="place-self-center rounded-xl object-contain"
        src={hero}
        alt="Hero"
        data-aos="zoom-in"
      />
    </>
  );
}
