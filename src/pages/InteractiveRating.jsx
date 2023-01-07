import { useState, useContext } from "react";
import "../styles/InteractiveRating.css";
import RatingSelect from "../components/RatingSelect";

import ThankYou from "../components/ThankYou";
import { Image2 } from "../components/Images";
import { SetSubmitContext } from "../Contexts/SetSubmitContext";

const InteractiveRating = () => {
  const { submited, setSubmited } = useContext(SetSubmitContext);

  return (
    <>
      {!submited ? (
        <div className="main-wrapper">
          <div className="rating-container">
            <div className="star">
              <Image2 className="star-image" />
            </div>

            <div className="h1-paragraph">
              <h1 className="h1-class">How did we do?</h1>

              <p className="paragraph">
                Please let us know how we did with your support request. All
                feedback appreciated to help us improve our offering!
              </p>
            </div>
            <div className="rating-and-btn">
              <RatingSelect />

              <button onClick={() => setSubmited(true)} className="btn">
                Submit
              </button>
            </div>
          </div>
        </div>
      ) : (
        <ThankYou />
      )}
    </>
  );
};

export default InteractiveRating;
