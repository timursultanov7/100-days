import React, { createContext, useState } from "react";
export const SetSubmitContext = createContext();

export const SetSubmitProvider = ({ children }) => {
  const [submited, setSubmited] = useState(false);

  return (
    <SetSubmitContext.Provider value={{ submited, setSubmited }}>
      {children}
    </SetSubmitContext.Provider>
  );
};
