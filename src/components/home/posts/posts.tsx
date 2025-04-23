"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "./posts.css";
import { postList } from "@/services/data/postList";
import { useLoading } from "@/contexts/loadingContext";
import Scrambler from "@/utils/scrambler";
import PostsSwiper from "@/components/swipers/posts/postsSwiper";

export default function Posts(): React.ReactNode {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      try {
        (sliderRef.current as { slideTo: (index: number) => void }).slideTo(
          currentIndex
        );
      } catch (error) {
        console.error("Error sliding to current index:", error);
      }
    }
  }, [currentIndex]);

  return (
    <section className="posts-container" id="posts">
      <PostsHeader
        index={currentIndex}
        setIndex={setCurrentIndex}
        setCompleted={setCompleted}
      />
      <PostsSwiper
        designSliderRef={sliderRef}
        index={currentIndex}
        setIndex={setCurrentIndex}
        completed={completed}
      />
    </section>
  );
}

const PostsHeader = ({
  index,
  setIndex,
  setCompleted,
}: {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { loading } = useLoading();
  const navigateLeft = () => {
    setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const navigateRight = () => {
    setIndex((prevIndex) => Math.min(prevIndex + 1, postList.length - 1));
  };

  return (
    <div className="posts-header">
      <h2>
        <Scrambler
          text={"Our Latest Posts"}
          speed={30}
          canRun={!loading}
          setCompleted={setCompleted}
        />
      </h2>
      <div className="posts-slider-nav">
        <p className="length text-black">
          <span>{index + 1}</span> / <span>{postList.length}</span>
        </p>
        <div className="posts-nav-buttons">
          <button
            className="posts-nav-btn"
            onClick={navigateLeft}
            type="button"
            disabled={index === 0}
            aria-label="previous post"
          >
            <FaArrowLeft />
          </button>
          <button
            className="posts-nav-btn"
            onClick={navigateRight}
            type="button"
            disabled={index + 1 === postList.length}
            aria-label="next post"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
