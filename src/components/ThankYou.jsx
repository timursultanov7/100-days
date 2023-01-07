import { useContext } from "react";
import { RatingValueContext } from "../Contexts/RatingValueContext";

import "../styles/InteractiveRating.css";
import { Image1 } from "./Images";
import { SetSubmitContext } from "../Contexts/SetSubmitContext";

const ThankYou = () => {
  const { ratingValue } = useContext(RatingValueContext);
  const { setSubmited } = useContext(SetSubmitContext);

  const retryFunc = () => {
    setSubmited(false);
  };

  return (
    <div className="main-wrapper">
      <div className="rating-container">
        <div className="img-h2">
          <Image1 />
          <p className="selected-p">You've selected {ratingValue} out of 5</p>
        </div>

        <h2 className="h2-class">Thank You</h2>

        <p className="paragraph">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
        <button className="btn-retry" onClick={retryFunc}>
          Rate again
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
