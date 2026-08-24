"use client";

import { useState } from "react";
import Link from "next/link";

const topics = [
  {
    id: 1,
    title: "¿Qué es Cloud Computing?",
    description:
      "Comprende los fundamentos de la computación en la nube y sus principales características.",
    icon: "☁️",
  },
  {
    id: 2,
    title: "Modelos de servicio",
    description:
      "Explora IaaS, PaaS y SaaS y aprende cuándo utilizar cada uno.",
    icon: "⚙️",
  },
  {
    id: 3,
    title: "Infraestructura",
    description:
      "Conoce servidores, almacenamiento, redes y recursos virtualizados.",
    icon: "🖥️",
  },
  {
    id: 4,
    title: "Despliegue",
    description:
      "Aprende cómo una aplicación puede ser desplegada en una infraestructura cloud.",
    icon: "🚀",
  },
];

export default function LabPage() {
  const [completed, setCompleted] = useState<number[]>([]);

  const toggleTopic = (id: number) => {
    setCompleted((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const progress = Math.round(
    (completed.length / topics.length) * 100
  );

  return (
    <main className="min-h-screen bg-[#03140D] text-white">

      {/* Navbar */}
      <nav className="border-b border-emerald-400/10 bg-[#041A12]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link
            href="/"
            className="font-semibold text-emerald-300 transition hover:text-emerald-200"
          >
            ← LAB01
          </Link>

          <div className="text-sm text-emerald-100/50">
            Cloud Computing
          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 py-16">

          <div className="max-w-3xl">

            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
              Laboratorio 01
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Bienvenido al
              <span className="block bg-linear-to-r from-emerald-300 to-green-400 bg-clip-text text-transparent">
                laboratorio de Cloud Computing
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-emerald-50/60">
              En este laboratorio explorarás los conceptos fundamentales
              detrás de las tecnologías cloud y su utilización en sistemas
              modernos.
            </p>

          </div>

          {/* Progreso */}
          <div className="mt-12 max-w-xl">

            <div className="mb-3 flex justify-between text-sm">
              <span className="text-emerald-100/60">
                Progreso del laboratorio
              </span>

              <span className="font-semibold text-emerald-300">
                {progress}%
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/5">

              <div
                className="h-full rounded-full bg-linear-to-r from-emerald-500 to-green-400 transition-all duration-700"
                style={{ width: `${progress}%` }}
              />

            </div>

          </div>
        </div>
      </section>

      {/* Actividades */}
      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="mb-8">
          <h2 className="text-2xl font-semibold">
            Actividades
          </h2>

          <p className="mt-2 text-emerald-50/50">
            Completa cada sección para avanzar en el laboratorio.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">

          {topics.map((topic) => {

            const isCompleted = completed.includes(topic.id);

            return (
              <div
                key={topic.id}
                className={`group relative overflow-hidden rounded-3xl border p-6 transition-all duration-300 ${
                  isCompleted
                    ? "border-emerald-400/30 bg-emerald-500/10"
                    : "border-white/10 bg-white/3 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-emerald-500/[0.05]"
                }`}
              >

                {/* Glow */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl transition group-hover:bg-emerald-500/20" />

                <div className="relative">

                  <div className="mb-5 flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-2xl">
                      {topic.icon}
                    </div>

                    {isCompleted && (
                      <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300">
                        Completado
                      </span>
                    )}

                  </div>

                  <h3 className="text-xl font-semibold">
                    {topic.title}
                  </h3>

                  <p className="mt-3 min-h-18 text-sm leading-6 text-emerald-50/50">
                    {topic.description}
                  </p>

                  <button
                    onClick={() => toggleTopic(topic.id)}
                    className={`mt-6 w-full rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
                      isCompleted
                        ? "bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
                        : "bg-emerald-500 text-white hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20"
                    }`}
                  >
                    {isCompleted
                      ? "Marcar como pendiente"
                      : "Completar actividad"}
                  </button>

                </div>

              </div>
            );
          })}

        </div>

        {/* Final */}
        {progress === 100 && (
          <div className="mt-10 rounded-3xl border border-emerald-400/30 bg-linear-to-r from-emerald-500/10 to-green-500/10 p-8 text-center">

            <div className="text-4xl">
              🎉
            </div>

            <h2 className="mt-4 text-2xl font-bold text-emerald-300">
              ¡Laboratorio completado!
            </h2>

            <p className="mt-3 text-emerald-50/50">
              Has completado todas las actividades del LAB01.
            </p>

          </div>
        )}

      </section>

    </main>
  );
}