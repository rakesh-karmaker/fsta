"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./postsSwiper.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import initPostsAnimations from "@/components/animations/postsAnimation";
import { postList } from "@/services/data/postList";
import Link from "next/link";
import React from "react";

const PostsSwiper = ({ designSliderRef, setIndex, index, completed }: {
  designSliderRef: React.MutableRefObject<typeof Swiper | null>,
  setIndex: React.Dispatch<React.SetStateAction<number>>,
  index: number,
  completed: boolean
}) => {
  const [maxWidth, setMaxWidth] = React.useState(1550);
  const [offset, setOffset] = React.useState(0);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const newMaxWidth =
        window
          .getComputedStyle(document.body)
          .getPropertyValue("--max-width") === "1650px"
          ? 1650
          : (90 * window.innerWidth) / 100;
      setMaxWidth(newMaxWidth);
      setOffset((window.innerWidth - newMaxWidth) / 2);
    }
  }, []);

  useGSAP(() => {
    initPostsAnimations(completed);
  }, [completed]);

  return (
    <Swiper
      //* configuration for the posts swiper
      onSwiper={(swiper) => {
        designSliderRef.current = swiper as unknown as typeof Swiper;
      }}
      onSlideChange={(swiper) => {
        setIndex(swiper.realIndex);
      }}
      slidesPerView={"auto"}
      spaceBetween={typeof window !== 'undefined' && window.innerWidth >= 1600 ? 100 : 50}
      className="posts-swiper"
      slidesOffsetBefore={
        typeof window !== 'undefined' && window.innerWidth > 950 && window.innerWidth < 1250
          ? 50
          : index === 0 && typeof window !== 'undefined' && window.innerWidth > 950
          ? offset
          : 0
      }
      centeredSlides={index === 0 && typeof window !== 'undefined' && window.innerWidth > 950 ? false : true}
      allowTouchMove={typeof window !== 'undefined' && window.innerWidth > 1250 ? false : true}
      slidesOffsetAfter={
        typeof window !== 'undefined' && window.innerWidth > 950 && window.innerWidth < 1250 ? 50 : 0
      }
    >
      {postList.map((post) => (
        <SwiperSlide key={post.title} className="post-slide">
          <div className="post">
            <Link href={post.link}>
              <img
                src={"/posts/" + post.image}
                alt={post.title}
                height="100%"
                width="100%"
              />
            </Link>
            <p className="post-info">
              <span className="font-bold">{post.title}</span>, {post.description}
            </p>
            <Link href={post.link} target="_blank" className="post-link">
              See post <FaArrowRightLong />
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PostsSwiper;
