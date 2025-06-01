"use client";

import { useEffect, useRef, useState } from "react";
import "./index.css";
import {
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

import {
  LocationEditIcon,
  MessageCircleCode,
  PhoneCallIcon,
  Send,
} from "lucide-react";

import hero from "@/assets/hero-img.webp";
import Image from "next/image";
import { SendMessage, susbribeEmail } from "@/services/util/senmail";

const testimonials = [
  {
    firstname: "Ana",
    lastname: "Silva",
    text: "O trabalho foi excelente! Super atencioso e entregou antes do prazo.",
  },
  {
    firstname: "Carlos",
    lastname: "Oliveira",
    text: "Serviço de altíssima qualidade, recomendo com certeza!",
  },
  {
    firstname: "Julia",
    lastname: "Martins",
    text: "Conseguiu transformar a ideia em realidade. Muito profissional.",
  },
  {
    firstname: "Rafael",
    lastname: "Souza",
    text: "Atendimento rápido e ótimo resultado. Projeto ficou incrível!",
  },
  {
    firstname: "Beatriz",
    lastname: "Almeida",
    text: "Detalhista, comprometido e com excelente comunicação. 10/10!",
  },
];

export default function TestimonialsSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
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
    {
      name: "YouTube",
      url: "https://www.youtube.com/@FranciscoDiakomas-x2p",
      icon: <FaYoutube size={19} />,
    },
  ];
  const [load, setLoad] = useState(false);
  const [result, setResult] = useState("");
  const [load2, setLoad2] = useState(false);
  const [result2, setResult2] = useState("");
  useEffect(() => {
    const container = containerRef.current;
    let animationFrame: number;
    let scrollSpeed = 1;

    function scrollContent() {
      if (container) {
        container.scrollLeft += scrollSpeed;
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scrollContent);
    }

    animationFrame = requestAnimationFrame(scrollContent);

    const pause = () => cancelAnimationFrame(animationFrame);
    const resume = () =>
      (animationFrame = requestAnimationFrame(scrollContent));

    container?.addEventListener("mouseenter", pause);
    container?.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animationFrame);
      container?.removeEventListener("mouseenter", pause);
      container?.removeEventListener("mouseleave", resume);
    };
  }, []);

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


  async function subsCrbeEMail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email2") as string;
    setLoad2(true);
    const wasSent = await susbribeEmail({
      email
    });
    if (wasSent) {
      setResult2("Email enviado com sucesso");
      const forms = document.querySelectorAll("form");
      forms.forEach((ele) => {
        ele.reset();
      });
    } else {
      setResult2("Erro ao enviar o email");
    }
    setTimeout(() => {
      setLoad2(false);
      setResult2("");
    }, 3000);
  }
  return (
    <>
      <article className="w-full flex flex-col gap-5 py-8 text-white lg:pt-0  pt-[90px] md:-mt-[100px]">
        <h2
          className="lg:text-7xl font-bold lg:text-end overflow-hidden text-center text-5xl text-transparent bg-clip-text  pr-[40px]  "
          id="gradient"
          data-aos="zoom-in-left"
          data-aos-easing="ease-in-sine"
        >
          Depoimentos
        </h2>
        <p
          className="mb-6 lg:text-end text-center  pr-[40px]  "
          data-aos="zoom-in-left"
          data-aos-easing="ease-in-sine"
        >
          Oque os meus clientes dizem acerca dos meus serviços
        </p>
        <article id="scroll" className="w-full">
          <div
            ref={containerRef}
            className="flex overflow-x-auto w-full gap-4 px-4 no-scrollbar"
          >
            {testimonials.concat(testimonials).map((t, i) => (
              <div
                key={i}
                className="min-w-[300] sm:w-[200px] lg:h-[130px]   rounded-xl shadow-md flex-shrink-0 flex flex-col gap-4
                "
                id="transparent"
              >
                <span
                  className="font-semibold h-[30px] flex justify-center items-center rounded-full w-[30px]"
                  id="gradient"
                >
                  {t.firstname?.charAt(0)?.toUpperCase()}
                  {t.lastname?.charAt(0)?.toUpperCase()}
                </span>
                <h1 className="font-semibold">
                  {t.firstname} {t.lastname}
                </h1>
                <p className="text-sm italic mb-2">"{t.text}"</p>
              </div>
            ))}
          </div>
        </article>
      </article>
      <aside>
        <span
          data-aos="zoom-in"
          data-aos-easing="ease-in-sine"
          className="flex flex-col gap-4 place-self-center py-20 justify-center items-center w-[90%] lg:w-[70%] md:w-[80%]"
          id="subscribe"
        >
          <h1 className="text-5xl md:text-5xl sm:text-xl font-semibold text-center overflow-hidden ">
            Subscreva-se para mais{" "}
            <span
              id="gradient"
              className="text-5xl font-semibold 
             text-transparent bg-clip-text"
            >
              Novidades
            </span>
          </h1>
          <p className="text-center">
            Receba atualizações sobre novos projetos e serviços.
          </p>
          <form
            className="flex flex-col p-2 gap-[20px] w-full  lg:w-[50%]"
            onSubmit={subsCrbeEMail}
          >
            <input
              type="email"
              placeholder="Digite seu email"
              className="input"
              required
              name="email2"
              id="email2"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center gap-2 w-full p-3"
              id="gradient"
            >
              {" "}
              {load2 ? (
                <div className="flex items-center justify-center w-[15px] h-[15px] overflow-visible">
                  <div className="w-[15px] h-[15px] border-1  rounded-full animate-spin border-white"></div>
                </div>
              ) : (
                <>
                  <Send size={13} />
                  Enviar
                </>
              )}
            </button>

            <p className="text-center">{result2}</p>
          </form>
        </span>
      </aside>
      <aside
        className=" gap-7 lg:gap-0 pt-[90px] py-8 flex flex-col lg:flex-row items-center justify-center p-[20px]  lg:pr-[40px] lg:pl-[40px] lg:pt-[120px]"
        id="enterContact"
      >
        <article
          className="lg:h-[500px] lg:w-[40%] md:w-[80%] text-white flex flex-col ga-[20px]"
          id="contcta"
          data-aos="zoom-in-right"
          data-aos-easing="ease-in-sine"
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
          <footer className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4 mt-4 p-3">
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
          data-aos-easing="ease-in-sine"
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
              <div className="flex items-center justify-center w-[15px] h-[15px] overflow-visible">
                <div className="w-[15px] h-[15px] border-1  rounded-full animate-spin border-white"></div>
              </div>
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
        data-aos-easing="ease-in-sine"
      />
    </>
  );
}
