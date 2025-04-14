import { Lato } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";

const lato = Lato({
  weight: "900",
  variable: "--font-lato",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
