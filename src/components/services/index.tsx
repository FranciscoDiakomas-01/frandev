import IMyServices from "@/types/services";
import "./index.css";
import Image from "next/image";
import compactNumberUSA from "@/services/util/compactNumber";
import myServices from "@/constants/myServices";
import { Send } from "lucide-react";
import goTO from "@/services/util/goTo";
export default function Services() {
  return (
    <section
      id="services"
      className="flex flex-col gap-8 lg:pl-[40px] lg:pr-[40px] lg:pt-[120px] pt-[60px] pl-[20px] pr-[25px]"
    >
      <h1
        className="text-4xl font-bold text-white overflow-hidden"
        data-aos="fade-right"
      >
        Explore os{"  "}
        <span className="text-4xl font-bold" id="gradient">
          Meus Serviços
        </span>
      </h1>
      <aside className="grid lg:grid-cols-3 gap-[20px] p-2 overflow-hidden md:grid-cols-2 sm:grid-cols-1">
        {myServices.map((service, key) => (
          <Servive service={service} key={key} />
        ))}
      </aside>
    </section>
  );
}

export function Servive({ service }: { service: IMyServices }) {
  return (
    <figure
      className="flex flex-col w-full  gap-4 p-4 rounded-[10px] text-white overflow-hidden"
      id="service"
      data-aos="fade-up"
    >
      <span className="flex gap-3" data-aos="fade-right" data-aos-delay="200">
        <b className="h-[10px] w-[10px] rounded-full bg-purple-400"></b>{" "}
        <b className="h-[10px] w-[10px] rounded-full bg-purple-600"></b>{" "}
        <b className="h-[10px] w-[10px] rounded-full bg-purple-800"></b>
      </span>
      <div
        className="flex justify-center relative overflow-hidden w-full rounded-[10px] h-[250px]"
        id="gradient"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <Image
          src={service.cover}
          className="h-full object-contain"
          alt="Cover"
          data-aos="fade-up"
          data-aos-delay="400"
        />
        <aside className="absolute place-self-center w-full h-full text-center flex justify-center items-center opacity-0 transition p-4">
          <p>{service.description}</p>
        </aside>
      </div>
      <h1
        className="text-xl font-semibold"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        {service.title}
      </h1>
      <footer
        data-aos="fade-up"
        data-aos-delay="300"
        className="flex justify-between items-center gap-4"
      >
        <div className="flex flex-col gap-2">
          <small>Projectos</small>
          <h2 className="text-3xl opacity-70 overflow-hidden">
            +{compactNumberUSA(service.projects)}
          </h2>
        </div>
        <button
          id="gradient"
          className="rounded-full min-w-[40%]min-w-[40%]  p-3 flex justify-center items-center gap-2 transition"
          onClick={() => {
            goTO("https://github.com/FranciscoDiakomas-01", true);
          }}
        >
          <Send size={15} />
          <p>Ver projectos</p>
        </button>
      </footer>
    </figure>
  );
}
