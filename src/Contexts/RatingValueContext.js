import React, { createContext, useState } from "react";

export const RatingValueContext = createContext();

export const RatingValueProvider = ({ children }) => {
  const [ratingValue, setRatingValue] = useState(1);

  return (
    <RatingValueContext.Provider value={{ ratingValue, setRatingValue }}>
      {children}
    </RatingValueContext.Provider>
  );
};
