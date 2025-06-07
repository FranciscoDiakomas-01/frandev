import IMyServices from "@/types/services";
import "./index.css";
import Image from "next/image";
import compactNumberUSA from "@/services/util/compactNumber";
import myServices from "@/constants/myServices";
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
        Meus{"  "}
        <span className="text-4xl font-bold" id="gradient">
           Serviços
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
      <span className="flex gap-3" data-aos="fade-right">
        <b className="h-[10px] w-[10px] rounded-full bg-purple-400"></b>{" "}
        <b className="h-[10px] w-[10px] rounded-full bg-purple-600"></b>{" "}
        <b className="h-[10px] w-[10px] rounded-full bg-purple-800"></b>
      </span>
      <div
        className="flex justify-center relative overflow-hidden w-full rounded-[10px] h-[250px]"
        id="gradient"
        data-aos="fade-left"
      >
        <Image
          src={service.cover}
          className="h-full object-contain"
          alt="Cover"
          data-aos="fade-up"
        />
        <aside className="absolute place-self-center w-full h-full text-center flex justify-center items-center opacity-0 transition p-4">
          <p>{service.description}</p>
        </aside>
      </div>
      <h1
        className="text-xl font-semibold"
        data-aos="fade-right"
      >
        {service.title}
      </h1>
    </figure>
  );
}
