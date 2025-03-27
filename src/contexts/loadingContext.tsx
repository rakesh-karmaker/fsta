"use client";

import React, { createContext, useContext, useState } from "react";

const LoadingContext: React.Context<any> = createContext(null);

const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  const [loading, setLoading] = useState(true);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

export { LoadingProvider, useLoading };
