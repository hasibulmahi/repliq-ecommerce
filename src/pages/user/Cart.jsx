import { useContext, useState } from "react";
import { CartContext } from "../../context";
import CartItem from "../../components/ui/CartItem";
import { actions } from "../../actions";
import Confirmation from "../../components/ui/Confirmation";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";

const Cart = () => {
  const { state, dispatch, delConfirm, setDelConfirm } = useContext(CartContext);
  const [delPopup, setDelPopup] = useState(null);
  const { auth } = useAuth();
  const { setCheckout, checkout } = useContext(CartContext);

  let totalPrice = state.cart.reduce(
    (total, el) => total + el.price * el.cartQuantity,
    0
  );

  let content;

  const deleteItem = (itemID) => {
    dispatch({
      type: actions.CART_REMOVED,
      id: itemID,
    });
  };

  const increaseItem = (item) => {
    dispatch({
      type: actions.CART_ITEM_INCREASE,
      item,
    });
  };

  const decreaseItem = (item) => {
    dispatch({
      type: actions.CART_ITEM_DECREASE,
      item,
    });
  };

  const handleCheckout = (element) => {
    if (auth === undefined) toast.error("Please login first");
    setCheckout({ ...checkout, mode: "multiple", items: element });
  };

  if (state.cart.length === 0) {
    content = (
      <div className="container mt-16 min-h-[20vh] p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold text-gray-100 mb-6">Cart Items</h2>
        <p className="text-gray-400">No item found in the cart!</p>
      </div>
    );
  } else {
    content = (
      <div className="container mt-32 p-6 bg-gray-800 rounded-lg shadow-lg">
        {/* Delete confirmation */}
        <Confirmation delPopup={delPopup} />

        <h2 className="text-4xl font-semibold text-gray-100 mb-6">Cart Items</h2>

        <div className="flex flex-col-reverse lg:flex-row gap-10 items-start">
          <div className="w-full lg:w-[80%] rounded-lg bg-gray-900 border border-gray-700">
            <div className="border-b border-gray-700 p-4 flex justify-between items-center">
              <p className="font-medium text-gray-100">
                Total Items:{" "}
                <span className="text-lime-400 text-xl">
                  {state.cart.length}
                </span>
              </p>
              <button
                onClick={() => {
                  setDelConfirm({
                    ...delConfirm,
                    status: true,
                    mode: "deleteAll",
                  });
                }}
                className="text-red-500 hover:text-red-400 underline"
              >
                Delete All
              </button>
            </div>

            <div className="p-4">
              {state.cart.map((el) => (
                <CartItem
                  cartElement={el}
                  key={el.id}
                  handleDelete={deleteItem}
                  handleIncrease={increaseItem}
                  handleDecrease={decreaseItem}
                  setDelPopup={setDelPopup}
                />
              ))}
            </div>
          </div>

          <div className="w-full sm:w-1/2 lg:w-[20%] bg-gray-900 border border-gray-700 p-4 rounded-lg">
            <p className="text-xl font-medium text-gray-100 mb-4">Order Summary</p>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-300">Subtotal:</p>
              <p className="text-xl font-medium text-gray-100">tk {totalPrice}</p>
            </div>
            <Link
              to="/checkout"
              onClick={() => handleCheckout(state.cart)}
              className="block text-center bg-neutral-950 text-neutral-100 py-3 rounded-full hover:bg-yellow-500"
            >
              Buy Now ({state.cart.length})
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return content;
};

export default Cart;
