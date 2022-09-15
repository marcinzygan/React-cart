import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = function () {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeItem = function (id) {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const increaseItem = function (id) {
    dispatch({ type: "INCREASE_ITEM", payload: id });
  };
  const decreaseItem = function (id) {
    dispatch({ type: "DECREASE_ITEM", payload: id });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
