import "~/styles/globals.css";

import { type Metadata } from "next";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "webapphorizon",
  description: "webapphorizon",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const roboto = Roboto({
  subsets: ["cyrillic", "latin"],
  variable: "--font-roboto-sans",
  weight: ["400", "600", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body className="mt-[4.5rem]">{children}</body>
    </html>
  );
}
