import "./index.css";
import avatar from "../../assets/avatar.png";
import Image from "next/image";
import TypingEffect from "../Typincring";
import { Download, Rocket } from "lucide-react";
import goTO from "@/services/util/goTo";
import downloadFile from "@/services/util/download";
export default function About() {
  const titles = [
    "Fullstack Web",
    "Mobile Developer",
    "Desktop Developer",
    "Frontend Developer",
    "UI/UX Designer",
  ];
  return (
    <section id="about" className="flex flex-col gap-3 items-center pr-[20px] pl-[20px] -pt-[90px] lg:pt-0">
      <aside className="flex lg:justify-evenly lg:items-start items-center pt-[150px] lg:w-[90%] lg:gap-4 gap-[40px] overflow-visible lg:flex-row flex-col">
        <article className="lg:w-[80%] lg:p-2 flex gap-4 flex-col w-[70%] overflow-visible">
          <h1
            data-aos="zoom-in-right"
            className="text-8xl font-bold overflow-hidden wrap-anywhere"
          >
            Francisco Lombo Diakomas
          </h1>
          <TypingEffect texts={titles} />
          <p
            className="text-white lg:w-[80%]"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            Sou desenvolvedor Fullstack com experiência em web, mobile e
            desktop, apaixonado por transformar ideias em soluções digitais
            completas e funcionais. Atuo desde o backend até o frontend, com
            foco em performance, escalabilidade e uma ótima experiência do
            usuário (UI/UX).
          </p>
          <footer className="flex items-center gap-4 p-2 overflow-visible">
            <button
              data-aos="fade-right"
              data-aos-delay="200"
              id="gradient"
              className=" w-[250px]  text-white rounded-full p-3 overflow-visible transition flex items-center gap-4  justify-center"
              onClick={() => {
                downloadFile("/cv.pdf", "Curriculum Francisco Diakomas")
              }}
            >
              <Download size={12} />
              Baixar cv
            </button>
            <button
              data-aos="fade-up"
              data-aos-delay="400"
              className="w-[250px]  text-white rounded-full p-3 overflow-visible transition flex items-center gap-4  justify-center"
              onClick={() => {
                goTO("#enterContact", false);
              }}
            >
              <Rocket size={14} />
              Contactar
            </button>
          </footer>
        </article>

        <div
          className="w-[50%] flex items-center justify-center bg-purple-500 overflow-hidden"
          id="radius"
          data-aos="zoom-in-left"
        >
          <Image
            className="lg:h-[450px] h-[400px] lg:object-contain lg:w-[500px]"
            src={avatar}
            alt="avatar"
            loading="lazy"
            data-aos="fade-up"
            data-aos-delay="600"
          />
        </div>
      </aside>
    </section>
  );
}
