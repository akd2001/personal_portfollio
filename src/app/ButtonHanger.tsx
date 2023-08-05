"use client";
import React, { useEffect } from "react";
import { DetailsButton, DetailsButtonConatainer } from "@/styles/Main.styled";
import { Power1, gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const ButtonHanger = () => {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline.to("#dtl-btn-wrap", {
      width: window.matchMedia("(max-width:800px)").matches ? "100%" : "60%",
    });
    timeline.to(".hiders", {
      height: "0%",
    });
    timeline.to(".hangBtn", {
      height: window.matchMedia("(max-width:800px)").matches ? "2rem" : "2.3vw",
    });
    timeline.to(".hangText", {
      opacity: 1,
    });
    return () => {
      timeline.kill();
    };
  }, []);

  const handleScrollTo = (target: string) => {
    const targetElement = document.getElementById(target);
    if (targetElement) {
      gsap.to(window, {
        scrollTo: { y: targetElement },
        duration: 1,
        ease: Power1.easeInOut,
      });
    }
  };

  return (
    <>
      <DetailsButtonConatainer id="dtl-btn-wrap">
        <DetailsButton
          y={"first"}
          className="hangBtn"
          onClick={() => handleScrollTo("skills")}
        >
          <span className="sticks">
            <span className="hiders"></span>
          </span>
          <p className="hangText">Skills</p>
        </DetailsButton>
        <DetailsButton
          y={"second"}
          className="hangBtn"
          onClick={() => handleScrollTo("education")}
        >
          <span className="sticks">
            <span className="hiders"></span>
          </span>
          <p className="hangText">Education</p>
        </DetailsButton>
        <DetailsButton
          y={"third"}
          className="hangBtn"
          onClick={() => handleScrollTo("projects")}
        >
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
