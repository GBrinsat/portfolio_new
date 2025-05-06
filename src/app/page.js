import "./animation.css";

export default function Home() {
  return (
    <div className="h-screen w-screen flex bg-indigo-600 justify-center items-center">
      <div
        id="borderBoxOne"
        className="border-solid border-20 border-yellow-300 bg-yellow-300 rounded-lg flex justify-center w-7/8 h-6/7"
      >
        <div
          id="borderBoxTwo"
          className="border-solid bg-indigo-600 border-solid border-10 border-indigo-600 rounded-lg flex w-full"
        >
          <div
            id="centerBox"
            className="w-[850px] h-[400px] relative border-2 border-dashed rounded-md border-amber-300 m-auto flex justify-center items-center text-yellow-300"
          >
            <span className="text-8xl font-bold font-roboto">
              Gerrit Brinsat
            </span>

            <div
              id="topScroller"
              className="absolute top-[-64px] left-0 w-[906px] h-[40px] flex items-center ticker-wrap border-dashed border-2 rounded-md border-amber-300"
            >
              <div className="ticker-top text-amber-300 font-roboto font-medium">
                <span className="ticker__item">Frontend Developer</span>
                <span className="ticker__item">Passionate creative</span>
                <span className="ticker__item">Your next employee?</span>
                <span className="ticker__item">
                  Click here to see my projects!
                </span>
              </div>
            </div>

            <div
              id="rightScroller"
              className="absolute right-[-64px] top-0 h-[456px] w-[40px] flex flex-col items-center ticker-wrap-vertical border-dashed border-2 rounded-md border-amber-300"
            >
              <div className="ticker-right absolute top-full text-amber-300 font-roboto font-medium">
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
              className=" absolute bottom-[-64px] right-0 w-[906px] h-[40px] flex items-center ticker-wrap border-dashed border-2 rounded-md border-amber-300"
            >
              <div className="ticker-bottom text-amber-300 font-roboto font-medium">
                <span className="ticker__item">
                  Wow, such an amazing ticker
                </span>
                <span className="ticker__item">Incredible FrontEnd skills</span>
                <span className="ticker__item">
                  Want to know more? Click a link!
                </span>
              </div>
            </div>

            <div
              id="leftScroller"
              className=" absolute left-[-64px] bottom-0 h-[456px] w-[40px] flex justify-center ticker-wrap-vertical border-dashed border-2 rounded-md border-amber-300"
            >
              <div className="ticker-left absolute text-amber-300 font-roboto font-medium">
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
          </div>
        </div>
      </div>
    </div>
  );
}
