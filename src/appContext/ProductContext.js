import { createContext,useContext } from "react";
const StoreContext=createContext();
const StoreProvider=({children})=>{
    return <StoreContext.Provider value={"Mutki"}>{children}</StoreContext.Provider>
};

// customHook
const useProductContext=()=>{
    return useContext(StoreContext);
}

export {StoreProvider,useProductContext}