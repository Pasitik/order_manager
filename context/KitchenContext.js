import { createContext, useReducer } from "react";
import { useEffect } from "react";

export const kitchenContext = createContext()


export const KitchenContextProvider =({children})=>{
    const[state, dispatch] = useReducer(kitchenReducer)
}