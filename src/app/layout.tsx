import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BOMBO — hamburguesas, videojuegos y antojos",
  description: "Hamburguesas épicas, mesas gamer y mucho más en BOMBO Guadalajara. Reserva por WhatsApp.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-MX"><body>{children}</body></html>;
}

