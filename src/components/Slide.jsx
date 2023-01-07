import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "../components/IconsLeftRight";
import { CarouselData } from "./CarouselData";

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? CarouselData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === CarouselData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);

    console.log(currentIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div
      className={
        CarouselData[currentIndex].id - 1 !== currentIndex
          ? "slide"
          : "slide active-anim"
      }
    >
      <div className={"carousel"} key={CarouselData[currentIndex].id}>
        <img src={CarouselData[currentIndex].image} />
        <blockquote className="testimonial">
          <p className="testimonial-text">
            {CarouselData[currentIndex].testimonailText}
          </p>
          <p className="testimonial-author">
            {CarouselData[currentIndex].testimonialAuthor}
          </p>
          <p className="testimonial-job">
            {CarouselData[currentIndex].testimonialJob}
          </p>
        </blockquote>
        <button className="btn-control btn--left" onClick={goToPrev}>
          <ChevronLeft className="btn-icon" />
        </button>
        <button className="btn-control btn--right" onClick={goToNext}>
          <ChevronRight className="btn-icon" />
        </button>
        <div className="dots-control">
          {CarouselData.map((slide, slideIndex) => {
            return (
              <button
                onClick={() => goToSlide(slideIndex)}
                key={slide.id}
                className={
                  currentIndex === slideIndex
                    ? "dot-control dot--active"
                    : "dot-control"
                }
              >
                &nbsp;
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slide;
