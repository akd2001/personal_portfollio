"use client";

import { useEffect, useState } from "react";
import LandLoader from "../components/LandLoader";
import {
  HomeImageWrapper,
  MainWrapper,
  StickOne,
  StickTwo,
} from "@/styles/Main.styled";
import Image from "next/image";
import MyImage from "../assets/images/profile.png";
import HomeDetails from "../components/HomeDetails";
import { Expo, gsap } from "gsap";

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

  if (isLandLoad) {
    return <LandLoader />;
  }

  return (
    <>
      <MainWrapper>
        <HomeImageWrapper>
          <Image src={MyImage} alt="Sayandeep Karak" id="myImg" />
          {window.matchMedia("(max-width:800px)").matches && (
            <>
              <p id="mobText">{"<@developer>"}</p>
            </>
          )}
          <StickOne id="stickOne"></StickOne>
          <StickTwo id="stickTwo"></StickTwo>
        </HomeImageWrapper>
        <HomeDetails />
      </MainWrapper>
    </>
  );
}
