import React, { useEffect } from "react";
import { DetailsButton, DetailsButtonConatainer } from "@/styles/Main.styled";
import { gsap } from "gsap";

const ButtonHanger = () => {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.to("#dtl-btn-wrap", {
      width: "60%",
    });

    timeline.to(".hiders", {
      height: "0%",
    });

    timeline.to(".hangBtn", {
      height: "2.3vw",
    });
    timeline.to(".hangText", {
      opacity: 1,
    });
    return () => {
      timeline.kill();
    };
  }, []);
  return (
    <>
      <DetailsButtonConatainer id="dtl-btn-wrap">
        <DetailsButton y={"5.7vw"} className="hangBtn">
          <span className="sticks">
            <span className="hiders"></span>
          </span>
          <p className="hangText">Skills</p>
        </DetailsButton>
        <DetailsButton y={"3vw"} className="hangBtn">
          <span className="sticks">
            <span className="hiders"></span>
          </span>
          <p className="hangText">Education</p>
        </DetailsButton>
        <DetailsButton y={"9vw"} className="hangBtn">
          <span className="sticks">
            <span className="hiders"></span>
          </span>
          <p className="hangText">Projects</p>
        </DetailsButton>
      </DetailsButtonConatainer>
    </>
  );
};

export default ButtonHanger;
