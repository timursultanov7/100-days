import React, { useState, useContext } from "react";
import { RatingValueContext } from "../Contexts/RatingValueContext";
import "../styles/InteractiveRating.css";

const RatingSelect = () => {
  const { setRatingValue } = useContext(RatingValueContext);
  const [activeRating, setActiveRating] = useState({
    oneStar: false,
    twoStars: false,
    threeStars: false,
    fourStars: false,
    fiveStars: false,
  });

  return (
    <div className="dots-container">
      <div
        className={activeRating.oneStar ? "active dot" : "dot"}
        onClick={() => {
          setActiveRating({
            oneStar: true,
            twoStars: false,
            threeStars: false,
            fourStars: false,
            fiveStars: false,
          });
          setRatingValue(1);
        }}
      >
        1
      </div>
      <div
        className={activeRating.twoStars ? "active dot" : "dot"}
        onClick={() => {
          setActiveRating({
            oneStar: false,
            twoStars: true,
            threeStars: false,
            fourStars: false,
            fiveStars: false,
          });
          setRatingValue(2);
        }}
      >
        2
      </div>
      <div
        className={activeRating.threeStars ? "active dot" : "dot"}
        onClick={() => {
          setActiveRating({
            oneStar: false,
            twoStars: false,
            threeStars: true,
            fourStars: false,
            fiveStars: false,
          });
          setRatingValue(3);
        }}
      >
        3
      </div>
      <div
        className={activeRating.fourStars ? "active dot" : "dot"}
        onClick={() => {
          setActiveRating({
            oneStar: false,
            twoStars: false,
            threeStars: false,
            fourStars: true,
            fiveStars: false,
          });
          setRatingValue(4);
        }}
      >
        4
      </div>
      <div
        className={activeRating.fiveStars ? "active dot" : "dot"}
        onClick={() => {
          setActiveRating({
            oneStar: false,
            twoStars: false,
            threeStars: false,
            fourStars: false,
            fiveStars: true,
          });
          setRatingValue(5);
        }}
      >
        5
      </div>
    </div>
  );
};

export default RatingSelect;
