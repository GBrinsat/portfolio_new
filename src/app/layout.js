import { Roboto, Montserrat, Work_Sans } from "next/font/google";
import "./globals.css";
import "./animation.css";
import Navbar from "../../components/Navbar.jsx";

const roboto = Roboto({
  style: "normal",
  subsets: ["latin"],
  variable: "--font-roboto",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-workSans",
});

export const metadata = {
  title: "Amazing Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${montserrat.variable} ${workSans.variable}   antialiased`}
      >
        <div
          id="backgroundBox"
          className="border-solid bg-indigo-700 border-solid border-10 border-indigo-700 flex flex-col justify-center items-center w-[100vw] h-[100vh]"
        >
          <div
            id="borderBox"
            className="border-solid border-1 w-7/8 h-6/7 border-yellow-300 border-4 rounded-lg flex flex-col justify-center items-center"
          >
            <div
              id="insideBox"
              className="w-full h-full bg-indigo-700 rounded-lg relative flex flex-col justify-center items-center text-yellow-300"
            >
              <Navbar></Navbar>
              {/* <div className="border-solid border-1 border-red-500 w-[978px] h-[528px] absolute"></div> */}
              <div
                id="contentBox"
                className="w-[978px] h-[528px] flex flex-col justify-center items-center border-solid border-1 border-red-500"
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
