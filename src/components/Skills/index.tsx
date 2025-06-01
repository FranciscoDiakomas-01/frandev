import Image from "next/image";
import "./index.css";

import myskills from "@/constants/mySkills";
import { Check } from "lucide-react";
export default function Skills() {
  return (
    <section
      id="skills"
      className="pt-[140px] flex flex-col gap-[50px] lg:pl-[40px] lg:pr-[40px] p-[20px]"
    >
      <article className="flex flex-col gap-7 ">
        <div
          className="flex flex-col gap-2 text-white place-self-start overflow-hidden"
          data-aos="fade-right"
        >
          <h1
            className="text-4xl font-semibold overflow-hidden bg-clip-text text-transparent"
            id="gradient"
          >
            Minhas HardSkills
          </h1>
          <p className="opacity-50">
            Conhecimento técnico em linguagens e bibliotecas modernas
          </p>
        </div>
        <div
          className="flex flex-col gap-2 text-white place-self-end overflow-hidden"
          data-aos="fade-left"
        >
          <h1
            className="text-4xl font-semibold overflow-hidden bg-clip-text text-transparent"
            id="gradient"
          >
            Especializações técnicas
          </h1>
          <p className="opacity-50">
            Habilidades práticas que me destacam como dev fullstack
          </p>
        </div>
      </article>
      {Array.isArray(myskills.skills) && myskills.skills?.length > 0 && (
        <aside className="grid lg:grid-cols-6 gap-[20px] overflow-hidden md:grid-cols-4 grid-cols-2">
          {myskills.skills.map((skill, index) => (
            <figure
              data-aos="fade-up"
              key={index}
              className="flex flex-col gap-2 p2 items-center text-white opacity-70 transition-all hover:opacity-100 "
            >
              <Image
                className="h-[60px] w-[60px]"
                src={skill.svg}
                alt={skill.title}
                loading="lazy"
              />
              <p>{skill.title}</p>
            </figure>
          ))}
        </aside>
      )}
      <article className="flex flex-col gap-7 ">
        <div
          className="flex flex-col gap-2 text-white place-self-end overflow-hidden"
          data-aos="fade-left"
        >
          <h1
            className="text-4xl font-semibold overflow-hidden bg-clip-text text-transparent"
            id="gradient"
          >
            Minhas Soft Skills
          </h1>
          <p className="opacity-50">
            A mentalidade e as atitudes que me tornam um profissional completo
          </p>
        </div>
        <div
          className="flex flex-col gap-2 text-white place-self-start overflow-hidden"
          data-aos="fade-right"
        >
          <h1
            className="text-4xl font-semibold overflow-hidden bg-clip-text text-transparent"
            id="gradient"
          >
            Habilidades interpessoais
          </h1>
          <p className="opacity-50">
            Habilidades humanas que impulsionam meu desenvolvimento profissional
          </p>
        </div>
      </article>

      {Array.isArray(myskills.softSkills) &&
        myskills.softSkills?.length > 0 && (
          <aside className="grid lg:grid-cols-3 gap-[20px] overflow-hidden md:grid-cols-2 grid-cols-1">
            {myskills.softSkills.map((skill, index) => (
              <span
                data-aos="zoom-in"
                key={index}
                className="flex flex-col gap-4 p-4  text-white opacity-70 transition-all hover:opacity-100 border-dashed  border-[1px] rounded-sm transit"
              >
                <div className="flex items-center gap-2 overflow-visible">
                  <div
                    className="flex justify-center items-center rounded-full p-1 transition-all"
                    id="gradient"
                  >
                    <Check size={14} />
                  </div>
                  <h1 className="text-xl transition-all text-nowrap">
                    {skill.title}
                  </h1>
                </div>
                <p>{skill.description}</p>
              </span>
            ))}
          </aside>
        )}
    </section>
  );
}
