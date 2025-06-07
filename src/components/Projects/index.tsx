"use client";
import mysProjects from "@/constants/projects";
import "./index.css";
import { useEffect, useState } from "react";
import code from "@/assets/code.png";
import Image from "next/image";
import { Github, Lock } from "lucide-react";
import Loader from "../Loader";
import goTO from "@/services/util/goTo";

export default function Projects() {
  const [filter, setFilter] = useState<"Web" | "Mobile" | "UI UX">("Web");
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, [filter]);
  return (
    <section
      id="project"
      className="flex flex-col lg:pt-[120px] gap-[40px] lg:pl-[40px] lg:pr-[40px] items-center pt-[90px] pr-[10px] pl-[10px]"
    >
      <h1
        className="text-7xl font-bold overflow-hidden text-white p-1 text-center lg:text-start"
        data-aos="fade-right"
      >
        Meus{" "}
        <span
          className="text-7xl font-bold overflow-hidden text-transparent  bg-clip-text"
          id="gradient"
        >
          Projectos
        </span>{" "}
        Recentes{" "}
      </h1>

      <div
        className="p-4 lg:flex gap-4 overflow-hidden grid  grid-cols-3"
        data-aos="fade-up"
      >
        {["Web", "UI UX"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item as typeof filter)}
            className={`px-4 transition-all w-[140px] py-2 rounded-full ${
              filter === item
                ? "bg-gradient-to-r from-purple-400 to-purple-700 text-white"
                : "bg-white  border-gray-300"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {loader ? (
        <Loader />
      ) : (
        <>
          {" "}
          {Array.isArray(mysProjects) && mysProjects?.length > 0 && (
            <aside className="grid lg:grid-cols-3 gap-[20px] p-3 overflow-hidden md:grid-cols-2 grid-cols-1">
              {mysProjects
                .filter((pr) => pr.category === filter)
                .map((pr, key) => (
                  <figure
                    data-aos="fade-up"
                    id="projects"
                    key={key}
                    className={`rounded-sm overflow-hidden relative text-white p-3 flex flex-col gap-4`}
                  >
                    <span className="flex gap-3" data-aos="fade-right">
                      <b className="h-[10px] w-[10px] rounded-full bg-purple-400"></b>{" "}
                      <b className="h-[10px] w-[10px] rounded-full bg-purple-600"></b>{" "}
                      <b className="h-[10px] w-[10px] rounded-full bg-purple-800"></b>
                    </span>
                    <div
                      className="flex items-center justify-center h-[270px] rounded-[10px]"
                      id="gradient"
                    >
                      <Image
                        className="z-1 h-full w-full rounded-[10px]"
                        src={pr.category == "UI UX" ? code :  pr.cover}
                        alt={pr.title}
                      />
                    </div>

                    <h1
                      className="text-xl font-semibold flex gap-1 items-center"
                    >
                      {pr.title}
                    </h1>
                    <div
                      className="z-2 absolute  h-full rounded-[10px] flex-col gap-2 pl-5 pr-5"
                      id="description"
                    >
                      <p className="pt-[20px]">{pr.description}</p>
                      <h2 className="text-start w-[100%] font-semibold">
                        Tecnologias
                      </h2>
                      <footer className="grid grid-cols-3 gap-5  w-[100%]">
                        {pr.tecnologies.map((tec, index) => (
                          <div
                            id="gradient"
                            className=" rounded-full h-[25px] flex justify-center items-center overflow-hidden text-ellipsis"
                            key={index}
                          >
                            {tec}
                          </div>
                        ))}
                      </footer>
                    </div>
                    <figcaption
                      className="grid grid-cols-2  gap-4 z-4"
                    >
                      {pr.siteURL && (
                        <button
                          id="gradient"
                          className="rounded-full p-2.5"
                          onClick={() => {
                            goTO(pr.siteURL, true);
                          }}
                        >
                          Ver Projecto
                        </button>
                      )}
                      {pr.gitHubURL && (
                        <button
                          className=" flex justify-center bg-gradient-to-r from-gray-700 v items-center gap-1  p-2.5 ia-gray-900 to-black rounded-full text-white"
                          onClick={() => {
                            goTO(pr.gitHubURL, true);
                          }}
                        >
                          <Github size={14} /> GitHub
                        </button>
                      )}
                    </figcaption>
                  </figure>
                ))}
            </aside>
          )}
        </>
      )}
    </section>
  );
}
