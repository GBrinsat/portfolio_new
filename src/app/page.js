import "./animation.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-[850px] h-[400px] flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <span className="text-8xl font-bold font-workSans ">
          Gerrit Brinsat
        </span>
        <span className="font-bold font-workSans">
          Design focused Frontend Developer
        </span>
      </div>

      <div
        id="topScroller"
        className="absolute top-[-64px] -left-[2px] w-[912px] h-[40px] flex items-center ticker-wrap border-dashed border-2 rounded-md border-yellow-300"
      >
        <div className="ticker-top text-yellow-300 font-montserrat font-medium">
          <span className="ticker__item">Frontend Developer</span>
          <span className="ticker__item">Passionate Creative</span>
          <span className="ticker__item">Your next employee?</span>
          <span className="ticker__item">Take a look at my Projects!</span>
        </div>
      </div>

      <div
        id="rightScroller"
        className="absolute right-[-64px] -top-[2px] h-[462px] w-[40px] flex flex-col items-center ticker-wrap-vertical border-dashed border-2 rounded-md border-yellow-300"
      >
        <div className="ticker-right absolute top-full text-yellow-300 font-montserrat font-medium">
          <div className="[writing-mode:vertical-lr] ticker__item_side">
            WOW, is this a coincidence?
          </div>
          <div className="[writing-mode:vertical-lr] ticker__item_side">
            Incredible if not
          </div>
          <div className="[writing-mode:vertical-lr] ticker__item_side">
            So sexy, what happens if I write a lot more text though?!
          </div>
        </div>
      </div>

      <div
        id="bottomScroller"
        className=" absolute bottom-[-64px] -right-[2px] w-[912px] h-[40px] flex items-center ticker-wrap border-dashed border-2 rounded-md border-yellow-300"
      >
        <div className="ticker-bottom text-yellow-300 font-montserrat font-medium">
          <span className="ticker__item">Creative Problem Solver </span>
          <span className="ticker__item">Project Management Experience</span>
          <span className="ticker__item">
            Background in Architecture and Design
          </span>
        </div>
      </div>

      <div
        id="leftScroller"
        className=" absolute left-[-64px] -bottom-[2px] h-[462px] w-[40px] flex justify-center ticker-wrap-vertical border-dashed border-2 rounded-md border-yellow-300"
      >
        <div className="ticker-left absolute text-yellow-300 font-montserrat font-medium">
          <div className="[writing-mode:vertical-lr] ticker__item_side">
            Passionate about creative endeavours
          </div>
          <div className="[writing-mode:vertical-lr] ticker__item_side">
            Very interested in all things nerdy
          </div>
        </div>
      </div>
    </div>
  );
}
