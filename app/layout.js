import "./globals.css";
import MetaPixel from "./components/MetaPixel";

export const metadata = {
  title: "Auxiliar de Partida Inteligente",
  description: "Compressor portátil e auxiliar de partida automotivo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}