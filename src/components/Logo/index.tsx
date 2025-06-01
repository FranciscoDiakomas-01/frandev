"use client"

import Image from "next/image";
import logo from "../../assets/logo.png";

export default function Logo({ showLabel = false }: { showLabel: boolean }) {
  return (
    <div
      className="cursor-pointer py-2 flex flex-col justify-center items-center"
      onClick={() => { 
        const a = document.createElement("a");
        a.href = "#home";
        a.click();
      }}
    >
      <Image
        src={logo}
        alt="Logo"
        className="h-[40px] w-[40px] object-contain"
      />
      {showLabel && <p className="text-white">FranDev</p>}
    </div>
  );
}
