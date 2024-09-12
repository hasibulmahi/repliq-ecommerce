import { useReducer, useState } from "react";
import { CartContext } from "../context";
import { cartReducer, initialState } from "../reducers/cartReducer";

const CartProviders = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [checkout, setCheckout] = useState({
    mode: "",
    items: null,
  });
  const [delConfirm, setDelConfirm] = useState({
    mode: "",
    status: false,
  });

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        delConfirm,
        setDelConfirm,
        checkout,
        setCheckout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProviders;