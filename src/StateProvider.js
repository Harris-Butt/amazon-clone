import { createContext, useContext, useReducer } from "react";
import React from "react";

export const StateContenxt = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContenxt.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContenxt.Provider>
);

export const useStateValue = () => useContext(StateContenxt);
