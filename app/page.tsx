"use client"
import Image from "next/image";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <BackgroundGradientAnimation>
        {/* si agrego pointer-events-none , el puntero no sigue las burbujas */}
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 pointer-events-auto text-3xl text-center md:text-5xl lg:text-7xl">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white to-white/10">
            ObservDev®
          </p>
          <p className="text-xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white to-white/20">
          Desarrollo Web3, Consultoría, Gestión de Proyectos
          </p>
          <p className="text-sm bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white to-white/20">
            Hacemos tus sueños realidad
          </p>
          <p className="flex flex-row space-x-1.5 items-center justify-center pt-5">
            <span
              onClick={() => window.open("https://www.youtube.com/@observdev", "_blank")}
              className="border rounded-full p-1.5  border-white/30 hover:border-white pointer-events-auto cursor-pointer">
              <FaYoutube className="size-6" />
            </span>
            <span
              onClick={() => window.open("https://www.linkedin.com/in/gilberts-ahumada-cabrera-89214086/", "_blank")}
              className="border rounded-full p-1.5 border-white/30 hover:border-white pointer-events-auto cursor-pointer">
              <FaLinkedin className="size-6" />
            </span>
            <span

              onClick={() => window.open("https://twitter.com/teterabOb", "_blank")}
              className="border rounded-full p-1.5 border-white/30 hover:border-white pointer-events-auto cursor-pointer">
              <FaTwitter className="size-6" />
            </span>
          </p>
        </div>
      </BackgroundGradientAnimation>

    </main>
  );
}
