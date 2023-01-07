import React, { useState } from "react";
import Cards from "react-credit-cards";
import "../styles/InteractiveCreditCard.css";
import "react-credit-cards/es/styles-compiled.css";

const InteractiveCreditCard = () => {
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [focus, setFocus] = useState("");

  const [cardData, setCardData] = useState([]);

  const dataObj = {
    cardHolder: name,
    cardNumber: number,
    year: year,
    month: month,
    cvc: cvc,
  };

  const handleClick = (e) => {
    e.preventDefault();

    // console.log(dataObj);

    setCardData(dataObj);

    console.log(cardData);
  };

  return (
    <div id="PaymentForm">
      <aside className="credit-card">
        <Cards
          cvc={cvc}
          month={month}
          year={year}
          focused={focus}
          name={name}
          number={number}
        />
      </aside>

      <form className="form-container">
        {/*Card Holder and Number Container */}
        <div className="holder-number-container">
          <div className="form-item">
            <label className="label-item">Card Holder Name </label>
            <input
              className="input-item"
              type="text"
              name="name"
              placeholder="Card Holder Name"
              onChange={(e) => setName(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              value={name}
            />
          </div>
          <div className="form-item">
            <label className="label-item"> Card Number </label>
            <input
              className="input-item"
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={(e) => setNumber(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              value={number}
            />
          </div>
        </div>

        {/* CardEXP CVV */}

        <div className="exp-cvv-container">
          <div className="form-item">
            <label className="label-item">EXP </label>
            <input
              className="input-item"
              type="tel"
              name="month"
              placeholder="month"
              onChange={(e) => setMonth(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              value={month}
            />
          </div>
          <div className="form-item">
            <label className="label-item">YEAR </label>
            <input
              className="input-item"
              type="tel"
              name="year"
              placeholder="Year"
              onChange={(e) => setYear(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              value={year}
            />
          </div>
          <div className="form-item">
            <label className="label-item">CVV </label>
            <input
              className="input-item"
              type="tel"
              name="cvc"
              placeholder="CVV"
              onChange={(e) => setCvc(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              value={cvc}
            />
          </div>
        </div>

        {/* submit button */}
        <input
          type="submit"
          value="PAY"
          className="submit-btn"
          onClick={(e) => handleClick(e)}
        />
      </form>
    </div>
  );
};

export default InteractiveCreditCard;
