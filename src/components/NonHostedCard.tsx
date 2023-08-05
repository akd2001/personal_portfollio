"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ProjectDetailsCard from "./ProjectDetailsCard";
import { NonHostedCardWrap, SliderWrapper } from "@/styles/Project.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Power2, gsap } from "gsap";
import { nonHostedObject } from "@/data/projectData";

const NonHostedCard = ({
  title,
  description,
  images,
  technologies,
}: nonHostedObject) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 90%",
        scroller: "body",
      },
      ease: Power2.easeOut,
    });
  }, []);

  return (
    <>
      <NonHostedCardWrap ref={cardRef}>
        <SliderWrapper>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {images.map((e, i) => (
              <SwiperSlide key={i}>
                <Image src={e} alt="x" className="slideImages" />
              </SwiperSlide>
            ))}
          </Swiper>
        </SliderWrapper>
        <ProjectDetailsCard
          title={title}
          description={description}
          techs={technologies}
          isHosted={false}
        />
      </NonHostedCardWrap>
    </>
  );
};

export default NonHostedCard;
