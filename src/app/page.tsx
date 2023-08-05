"use client";
import { useEffect, useState } from "react";
import LandLoader from "../components/LandLoader";
import {
  HomeImageWrapper,
  MainSection,
  StickOne,
  StickTwo,
} from "@/styles/Main.styled";
import Image from "next/image";
import MyImage from "../assets/images/profile.png";
import HomeDetails from "./HomeDetails";
import { Expo, gsap } from "gsap";
import Skills from "./Skills";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Education from "./Education";
import Project from "./Project";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isLandLoad, setIsLandLoad] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLandLoad(false);
    }, 6000);
  }, []);

  useEffect(() => {
    const timeline = gsap.timeline();
    const md = gsap.matchMedia();
    if (!isLandLoad) {
      timeline.to("#myImg", {
        x: 0,
        opacity: 1,
        duration: 0.6,
      });
      gsap.to("#stickOne", {
        width: "70%",
        duration: 0.8,
        delay: 0.5,
        ease: Expo.easeOut,
      });
      gsap.to("#stickTwo", {
        height: "58%",
        duration: 0.8,
        delay: 0.5,
        ease: Expo.easeOut,
      });
      md.add("(max-width:800px)", () => {
        gsap.to("#mobText", {
          duration: 0.9,
          opacity: 1,
          y: 0,
          ease: Expo.easeOut,
        });
      });
    }
    return () => {
      timeline.kill();
    };
  }, [isLandLoad]);

  return (
    <>
      <main>
        {isLandLoad ? (
          <LandLoader />
        ) : (
          <>
            <MainSection>
              <HomeImageWrapper>
                <Image src={MyImage} alt="Sayandeep Karak" id="myImg" />
                <p id="mobText">{"<@developer>"}</p>
                <StickOne id="stickOne"></StickOne>
                <StickTwo id="stickTwo"></StickTwo>
              </HomeImageWrapper>
              <HomeDetails />
            </MainSection>
            <Skills />
            <Education />
            <Project />
            <Footer />
          </>
        )}
      </main>
    </>
  );
}
