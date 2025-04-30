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
          className="absolute -top-14 left-0 border-solid border-1 w-[902px] h-[40px] flex items-center"
        >
          <span className="border-solid border-1 ml-3 mr-3 w-full">
            testTop
          </span>
        </div>
        <div
          id="rightScroller"
          className="absolute -right-14 top-0 border-solid border-1 h-[452px] w-[40px] flex justify-center"
        >
          <span className="[writing-mode:vertical-lr] border-solid border-1 mt-3 mb-3">
            testRight
          </span>
        </div>
        <div
          id="bottomScroller"
          className=" absolute -bottom-14 right-0 border-solid border-1 w-[902px] h-[40px] flex items-center"
        >
          <span className="border-solid border-1 ml-3 mr-3 w-full text-right">
            testBottom
          </span>
        </div>
        <div
          id="leftScroller"
          className=" absolute -left-14 bottom-0 border-solid border-1 h-[452px] w-[40px] flex justify-center"
        >
          <span className="[writing-mode:vertical-rl] border-solid border-1 mt-3 mb-3 text-right">
            testLeft
          </span>
        </div>
      </div>
    </div>
  );
}
