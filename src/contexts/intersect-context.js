import React, { createContext, useState, useMemo } from "react";

export const IntersectContext = createContext({});

export const IntersectConsumer = IntersectContext.Consumer;

export const IntersectProvider = ({ children }) => {
  const [intersect, setIntersect] = useState();

  const handleIntersect = entry => {
    if (entry.boundingClientRect && entry.rootBounds) {
      const isUnder = entry.boundingClientRect.y < entry.rootBounds.y;
      if (isUnder) {
        setIntersect(true);
      } else {
        setIntersect(false);
      }
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
