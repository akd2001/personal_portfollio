import { ProjectGroup } from "@/styles/Project.styled";
import { gsap, Expo } from "gsap";
import React, { useRef, useEffect } from "react";

interface props {
  children: React.ReactNode;
  title: string;
}

const DisplayProject = ({ children, title }: props) => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      scrollTrigger: {
        trigger: titleRef.current,
        scroller: "body",
        start: "top 90%",
      },
      ease: Expo.easeOut,
    });
  }, []);
  return (
    <>
      <>
        <ProjectGroup>
          <h1 ref={titleRef}>{title}</h1>
          {children}
        </ProjectGroup>
      </>
    </>
  );
};

export default DisplayProject;
