"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// define the type for the loading context
type LoadingContextType = {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isFirstLoading: boolean;
  setIsFirstLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

// create the loading provider
const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  const [loading, setLoading] = useState(false);
  const [isFirstLoading, setIsFirstLoading] = useState(false);

  useEffect(() => {
    // set loading to true on the first render
    if (isFirstLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [isFirstLoading]);

  return (
    <LoadingContext.Provider value={{ loading, setLoading, isFirstLoading, setIsFirstLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

// create a custom hook to access the loading context
const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

export { LoadingProvider, useLoading };
