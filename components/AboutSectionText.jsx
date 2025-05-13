"use client";

import { useState } from "react";

export default function AboutSectionText() {
  const [displayText, setDisplayText] = useState(1);
  const [textOne, setTextOne] = useState(
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
  );
  const [textTwo, setTextTwo] = useState("Text 2");
  const [textThree, setTextThree] = useState("Text 3");

  const changeActive = (navline, navtext) => {
    document
      .getElementsByClassName("activeNavline")[0]
      .classList.remove("activeNavline");

    document
      .getElementsByClassName("activeText")[0]
      .classList.remove("activeText");

    navline.className += " activeNavline";
    navtext.className += " activeText";
  };

  const changeText = (textNumber) => {
    switch (textNumber) {
      case 1:
        changeActive(
          document.getElementById("navlineOne"),
          document.getElementById("aboutLinkOne")
        );
        break;
      case 2:
        changeActive(
          document.getElementById("navlineTwo"),
          document.getElementById("aboutLinkTwo")
        );
        break;
      case 3:
        changeActive(
          document.getElementById("navlineThree"),
          document.getElementById("aboutLinkThree")
        );
        break;
    }
    setDisplayText(textNumber);
  };

  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className="w-2/6 h-2/5 flex flex-col justify-evenly">
        <div className="flex items-center">
          <span
            id="navlineOne"
            className="h-[1px] w-[30px] bg-yellow-300/50 mr-3 activeNavline"
          ></span>
          <div
            id="aboutLinkOne"
            className="text-yellow-300/50 activeText"
            onClick={() => changeText(1)}
          >
            Me
          </div>
        </div>

        <div className="flex items-center">
          <span
            id="navlineTwo"
            className="h-[1px] w-[30px] bg-yellow-300/50 mr-3"
          ></span>
          <div
            id="aboutLinkTwo"
            className="text-yellow-300/50"
            onClick={() => changeText(2)}
          >
            How I approach my work
          </div>
        </div>

        <div className="flex items-center">
          <span
            id="navlineThree"
            className="h-[1px] w-[30px] bg-yellow-300/50 mr-3"
          ></span>
          <div
            id="aboutLinkThree"
            className="text-yellow-300/50"
            onClick={() => changeText(3)}
          >
            Things I love
          </div>
        </div>
      </div>
      <div className="w-4/6">
        {displayText == 1
          ? textOne
          : displayText == 2
          ? textTwo
          : displayText == 3
          ? textThree
          : "error"}
      </div>
    </div>
  );
}
