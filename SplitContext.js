import React, {createContext, useState} from "react";

export const SplitContext = createContext();

export const SplitProvider = ({children}) => {
    const [splits,setSplits] = useState([]);
    return (
        <SplitContext.Provider value={{ splits, setSplits }}>
        {children}
      </SplitContext.Provider>
    );
};