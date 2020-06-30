import React, { createContext, useState, useMemo } from "react";

export const IntersectContext = createContext({});

export const DokumentConsumer = IntersectContext.Consumer;

export const IntersectProvider = ({ children }) => {
  const [intersect, setIntersect] = useState();

  const handleIntersect = entry => {
    if (
      entry.boundingClientRect?.top < 0 &&
      entry.target?.id === "what" &&
      !entry.isIntersecting
    ) {
      setIntersect(true);
    } else {
      setIntersect(false);
    }
  };

  const state = {
    intersect,
    handleIntersect
  };

  const providerValue = useMemo(() => state, [state]);

  return (
    <IntersectContext.Provider value={providerValue}>
      {children}
    </IntersectContext.Provider>
  );
};