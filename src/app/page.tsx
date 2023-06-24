"use client";

import { useEffect, useState } from "react";
import LandLoader from "../components/LandLoader";
import { HomeImageWrapper, MainWrapper } from "@/styles/Main.styled";
import Image from "next/image";
import MyImage from "../assets/images/profile.png";
import HomeDetails from "../components/HomeDetails";

export default function Home() {
  const [isLandLoad, setIsLandLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLandLoad(false);
    }, 6000);
  }, []);

  if (isLandLoad) {
    return <LandLoader />;
  }

  return (
    <>
      <MainWrapper>
        <HomeImageWrapper>
          <Image src={MyImage} alt="Sayandeep Karak" />
        </HomeImageWrapper>
        <HomeDetails />
      </MainWrapper>
    </>
  );
}
