import { Roboto, Dancing_Script } from "next/font/google";
import "./globals.css";
import "./animation.css";

const roboto = Roboto({
  style: "normal",
  subsets: ["latin"],
  variable: "--font-roboto",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancingScript",
});

export const metadata = {
  title: "Amazing Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${dancingScript.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
