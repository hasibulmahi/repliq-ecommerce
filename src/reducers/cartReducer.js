import { actions } from "../actions";

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case actions.CART_ADDED: {
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    }

    case actions.CART_REMOVED: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.id),
      };
    }
    case actions.CART_REMOVED_ALL: {
      return {
        ...state,
        cart: [],
      };
    }

    case actions.CART_ITEM_INCREASE: {
      const updateItem = state.cart.map((el) => {
        if (el.id === action.item.id) {
          return {
            ...el,
            cartQuantity: el.cartQuantity + 1,
          };
        } else {
          return el;
        }
      });

      return {
        ...state,
        cart: updateItem,
      };
    }

    case actions.CART_ITEM_DECREASE: {
      const updateItem = state.cart.map((el) => {
        if (el.id === action.item.id) {
          return {
            ...el,
            cartQuantity: el.cartQuantity - 1,
          };
        } else {
          return el;
        }
      });

      return {
        ...state,
        cart: updateItem,
      };
    }

    default:
      return state;
  }
};

export { initialState, cartReducer };