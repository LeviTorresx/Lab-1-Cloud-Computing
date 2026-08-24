"use client";

import Image from "next/image";
import { useState } from "react";
import "./globals.css";

export default function Home() {
  const [started, setStarted] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#03140D] text-white">
      {/* Fondo */}
      <div className="absolute inset-0">
        {/* Luces verdes */}
        <div className="absolute -left-40 -top-40 h-96 w-96 animate-pulse rounded-full bg-emerald-500/20 blur-3xl" />

        <div className="absolute -bottom-40 -right-40 h-96 w-96 animate-pulse rounded-full bg-green-600/20 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/10 blur-3xl" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,128,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,128,0.04)_1px,transparent_1px)] bg-size-[50px_50px]" />
      </div>

      {/* Contenido */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        {/* Logo */}
        <div className="mb-10 animate-[fadeIn_1s_ease-out]">
          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-500/5 p-5 shadow-2xl shadow-emerald-500/10 backdrop-blur-md">
            <Image
              src="/udea.png"
              alt="Universidad de Antioquia"
              width={170}
              height={170}
              priority
              className="mx-auto object-contain"
            />
          </div>
        </div>

        {/* Badge */}
        <div className="mb-6 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-2 text-sm font-medium text-emerald-300 backdrop-blur-md">
          Universidad de Antioquia · Ingeniería de Sistemas
        </div>

        {/* Título */}
        <h1 className="max-w-5xl bg-linear-to-r from-white via-emerald-200 to-green-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl">
          LAB01
          <span className="block">Cloud Computing</span>
        </h1>

        {/* Descripción */}
        <p className="mt-8 max-w-2xl text-lg leading-8 text-emerald-50/60 sm:text-xl">
          Explorando el poder de la computación en la nube, infraestructura
          moderna y tecnologías distribuidas.
        </p>

        {/* Botón */}
        <div className="mt-10">
          <button
            onClick={() => setStarted(!started)}
            className="group relative overflow-hidden rounded-full bg-emerald-500 px-8 py-4 font-semibold text-white shadow-xl shadow-emerald-500/20 transition-all duration-300 hover:scale-105 hover:bg-emerald-400 hover:shadow-emerald-400/30 active:scale-95"
          >
            <span className="relative z-10">
              {started ? "¡Laboratorio iniciado!" : "Comenzar laboratorio"}
            </span>

            {/* Efecto hover */}
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-green-400 to-emerald-300 transition-transform duration-500 group-hover:translate-x-0" />
          </button>
        </div>

        {/* Mensaje */}
        <div
          className={`mt-8 transition-all duration-500 ${
            started
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-4 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-6 py-4 shadow-lg shadow-emerald-500/5 backdrop-blur-md">
            <p className="text-sm text-emerald-200">
              Laboratorio listo para comenzar
            </p>
          </div>
        </div>

        {/* Tecnologías */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {["Cloud", "Linux", "Next.js", "Vercel"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-emerald-400/10 bg-white/5 px-4 py-2 text-xs text-emerald-200/70 backdrop-blur-sm transition-all hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-200"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 text-sm text-emerald-900">
          LAB01 · Cloud Computing · 2026
        </div>
      </section>
    </main>
  );
}
