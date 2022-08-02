import React, { createContext, useState } from "react";

interface PaginationContextProps {}
const paginationContext = createContext<PaginationContextProps | null>(null);
const PaginationProvider: React.FC<any> = ({ children }) => {
  return (
    <paginationContext.Provider value={{}}>
      {children}
    </paginationContext.Provider>
  );
};

export default PaginationProvider;
