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
    <main className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* HERO */}
      <section className="px-5 pt-10 pb-20 bg-gradient-to-b from-black via-black to-zinc-950">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* TEXTO */}
          <div>

            <span className="bg-red-600 px-5 py-2 rounded-full text-sm font-bold inline-block">
              MAIS SEGURANÇA PARA O SEU CARRO
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mt-8">
              Seu Carro
              <br />
              Parou?
              <span className="text-red-500 block mt-4">
                Resolva Em
                <br />
                Segundos
              </span>
            </h1>

            <p className="text-zinc-300 text-xl mt-8 max-w-xl leading-relaxed">
              Compressor portátil + auxiliar de partida + power bank +
              iluminação LED em um único equipamento.
            </p>

            <div className="mt-10 space-y-5 text-lg">

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-red-500 text-xl" />
                <p>Partida rápida em segundos</p>
              </div>

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-red-500 text-xl" />
                <p>Calibre pneus sem depender de postos</p>
              </div>

              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-red-500 text-xl" />
                <p>Power bank USB integrado</p>
              </div>

            </div>

            <a
              href={LINK_AFILIADO}
              target="_blank"
              className="inline-block mt-12 bg-red-600 hover:bg-red-700 transition-all duration-300 px-12 py-5 rounded-2xl text-2xl font-extrabold shadow-2xl"
            >
              VER OFERTA NO MERCADO LIVRE
            </a>

          </div>

          {/* IMAGEM */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/imagens/1.webp"
              width={700}
              height={700}
              alt="Auxiliar de Partida"
              priority
              className="w-full max-w-2xl object-contain drop-shadow-[0_0_40px_rgba(255,0,0,0.25)]"
            />
          </div>

        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-20 px-5 bg-zinc-950 border-t border-zinc-900">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
            Tudo Que Você Precisa Em Emergências
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl text-center hover:border-red-500 transition-all duration-300">
              <FaBolt className="text-5xl text-red-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-3">
                Partida Inteligente
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Auxilia na partida do carro com rapidez e segurança.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl text-center hover:border-red-500 transition-all duration-300">
              <FaCar className="text-5xl text-red-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-3">
                Compressor Portátil
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Calibre pneus facilmente onde estiver.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl text-center hover:border-red-500 transition-all duration-300">
              <FaBatteryFull className="text-5xl text-red-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-3">
                Power Bank
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Recarregue celular e dispositivos via USB.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl text-center hover:border-red-500 transition-all duration-300">
              <FaLightbulb className="text-5xl text-red-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-3">
                LED Emergência
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                Iluminação forte para situações noturnas.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* GALERIA */}
      <section className="py-20 px-5 bg-black">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
            Veja o Produto em Detalhes
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <Image
              src="/imagens/1.webp"
              width={600}
              height={600}
              alt="Imagem 1"
              className="rounded-3xl w-full border border-zinc-800"
            />

            <Image
              src="/imagens/2.webp"
              width={600}
              height={600}
              alt="Imagem 2"
              className="rounded-3xl w-full border border-zinc-800"
            />

            <Image
              src="/imagens/3.webp"
              width={600}
              height={600}
              alt="Imagem 3"
              className="rounded-3xl w-full border border-zinc-800"
            />

          </div>

        </div>

      </section>

      {/* CTA FINAL */}
      <section className="bg-red-700 py-16 px-5">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">

          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Tenha Mais Segurança
              <br />
              Em Qualquer Emergência
            </h2>
          </div>

          <div>
            <p className="text-xl mb-5">
              Oferta promocional disponível por tempo limitado.
            </p>

            <a
              href={LINK_AFILIADO}
              target="_blank"
              className="inline-block bg-black hover:bg-zinc-900 transition-all duration-300 px-10 py-5 rounded-2xl text-xl font-extrabold"
            >
              VER OFERTA
            </a>
          </div>

        </div>

      </section>

      {/* BOTÃO FIXO MOBILE */}
      <div className="fixed bottom-0 left-0 w-full bg-black/95 p-4 md:hidden border-t border-zinc-800 z-50">
        <a
          href={LINK_AFILIADO}
          target="_blank"
          className="block w-full bg-red-600 hover:bg-red-700 text-center py-4 rounded-2xl text-xl font-bold"
        >
          VER OFERTA NO MERCADO LIVRE
        </a>
      </div>

    </main>
  );
}