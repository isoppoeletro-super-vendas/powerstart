"use client";

import Image from "next/image";
import {
  FaBolt,
  FaCar,
  FaBatteryFull,
  FaLightbulb,
  FaCheckCircle,
} from "react-icons/fa";

const LINK_AFILIADO = "https://meli.la/1iQ6CEh";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="px-5 pt-16 pb-20 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>

            <span className="bg-red-600 px-4 py-2 rounded-full text-sm font-bold">
              MAIS SEGURANÇA PARA O SEU CARRO
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mt-6">
              Nunca Mais Fique Parado
              <span className="text-red-500 block">
                Por Bateria Fraca
              </span>
            </h1>

            <p className="text-zinc-300 text-xl mt-6">
              Compressor portátil + auxiliar de partida + power bank +
              iluminação LED em um único equipamento.
            </p>

            <div className="mt-8 space-y-4 text-lg">

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-red-500" />
                <p>Partida rápida em segundos</p>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-red-500" />
                <p>Calibre pneus sem depender de postos</p>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-red-500" />
                <p>Power bank USB integrado</p>
              </div>

            </div>

            <a
              href={LINK_AFILIADO}
              target="_blank"
              className="inline-block mt-10 bg-red-600 hover:bg-red-700 transition-all duration-300 px-10 py-5 rounded-2xl text-2xl font-extrabold shadow-2xl"
            >
              COMPRAR AGORA
            </a>

          </div>

          <div className="flex justify-center">
            <Image
              src="/imagens/1.webp"
              width={600}
              height={600}
              alt="Produto"
              className="rounded-3xl border border-zinc-700 shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-20 px-5 bg-zinc-950">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-extrabold text-center mb-14">
            Tudo Que Você Precisa Em Emergências
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 text-center">
              <FaBolt className="text-5xl text-red-500 mx-auto mb-5" />
              <h3 className="text-2xl font-bold">
                Partida Inteligente
              </h3>
            </div>

            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 text-center">
              <FaCar className="text-5xl text-red-500 mx-auto mb-5" />
              <h3 className="text-2xl font-bold">
                Compressor Portátil
              </h3>
            </div>

            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 text-center">
              <FaBatteryFull className="text-5xl text-red-500 mx-auto mb-5" />
              <h3 className="text-2xl font-bold">
                Power Bank
              </h3>
            </div>

            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 text-center">
              <FaLightbulb className="text-5xl text-red-500 mx-auto mb-5" />
              <h3 className="text-2xl font-bold">
                LED Emergência
              </h3>
            </div>

          </div>

        </div>

      </section>

      {/* GALERIA */}
      <section className="py-20 px-5">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-extrabold text-center mb-14">
            Veja o Produto em Detalhes
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <Image
              src="/imagens/1.webp"
              width={500}
              height={500}
              alt="Imagem 1"
              className="rounded-3xl w-full"
            />

            <Image
              src="/imagens/2.webp"
              width={500}
              height={500}
              alt="Imagem 2"
              className="rounded-3xl w-full"
            />

            <Image
              src="/imagens/3.webp"
              width={500}
              height={500}
              alt="Imagem 3"
              className="rounded-3xl w-full"
            />

          </div>

        </div>

      </section>

      {/* CTA FINAL */}
      <section className="py-24 px-5 text-center bg-red-600">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-5xl font-extrabold leading-tight">
            Tenha Mais Segurança
            <span className="block">
              Em Qualquer Emergência
            </span>
          </h2>

          <p className="text-2xl mt-6">
            Aproveite a oferta disponível hoje.
          </p>

          <a
            href={LINK_AFILIADO}
            target="_blank"
            className="inline-block mt-10 bg-black hover:bg-zinc-900 transition-all duration-300 px-12 py-6 rounded-2xl text-2xl font-extrabold"
          >
            VER OFERTA
          </a>

        </div>

      </section>

    </main>
  );
}