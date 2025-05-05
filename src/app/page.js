import "./animation.css";

export default function Home() {
  return (
    <div className="h-screen w-screen flex">
      <div
        id="centerBox"
        className="w-[850px] h-[400px] bg-neutral-100 relative border-2 border-double rounded-md m-auto flex justify-center items-center"
      >
        <span className="text-8xl font-bold">Center Text</span>
        <div
          id="topScroller"
          className="absolute -top-14 left-0 w-[902px] h-[40px] flex items-center ticker-wrap"
        >
          <div className="ticker-top">
            <span className="ticker__item">Wow!</span>
            <span className="ticker__item">Incredible!</span>
            <span className="ticker__item">
              Want to know more? Click a link!
            </span>
          </div>
        </div>

        <div
          id="rightScroller"
          className="absolute -right-14 top-0 h-[452px] w-[40px] flex flex-col justify-center items-center ticker-wrap-vertical"
        >
          <div className="ticker-right absolute top-full">
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
          className=" absolute -bottom-14 right-0 w-[902px] h-[40px] flex items-center ticker-wrap"
        >
          <div className="ticker-bottom">
            <span className="ticker__item">Wow, such an amazing ticker</span>
            <span className="ticker__item">Incredible FrontEnd skills</span>
            <span className="ticker__item">
              Want to know more? Click a link!
            </span>
          </div>
        </div>

        <div
          id="leftScroller"
          className=" absolute -left-14 bottom-0 h-[452px] w-[40px] flex justify-center ticker-wrap-vertical"
        >
          <div className="ticker-left absolute">
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
  );
}
