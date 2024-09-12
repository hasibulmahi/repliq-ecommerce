import { Link, useParams } from "react-router-dom";
import { getSingleProduct } from "../../utils";
import { FaStar } from "react-icons/fa6";
import toast from "react-hot-toast";
import { actions } from "../../actions";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context";
import { BsCartDashFill } from "react-icons/bs";
import { FaCartPlus, FaBagShopping } from "react-icons/fa6";
import { useAuth } from "../../hooks/useAuth";

const SingleProduct = () => {
  const { id } = useParams();
  const product = getSingleProduct(id);
  const { title, description, rating, thumbnail, price, tag } = product;

  const review = Math.round(rating);
  const { auth } = useAuth();
  const [inCart, setInCart] = useState(false);
  const { state, dispatch, checkout, setCheckout } = useContext(CartContext);

  useEffect(() => {
    state.cart.some((element) => {
      if (element.id === +id) {
        setInCart(true);
      }
    });
  }, [id, state.cart]);

  const handleAddToCart = () => {
    if (!inCart) {
      dispatch({
        type: actions.CART_ADDED,
        item: { ...product, cartQuantity: 1 },
      });

      toast.success("Product added to cart");
    }
  };

  const handleRemove = () => {
    dispatch({
      type: actions.CART_REMOVED,
      id: product.id,
    });

    setInCart(false);
    toast.success("Product removed from cart");
  };

  const handleCheckout = (element) => {
    if (auth === undefined) toast.error("Please login first");
    setCheckout({ ...checkout, mode: "single", items: element });
  };

  return (
    <div className="mt-[10vh] container flex flex-col md:flex-row items-center justify-between min-h-fit bg-black text-white">
      <div className="md:w-1/2 flex justify-center p-4">
        <img src={thumbnail} alt={title} className="rounded-lg shadow-lg" />
      </div>
      <div className="md:w-1/2 p-4 sm:p-6 md:p-10 gap-2 flex flex-col items-start bg-gray-800 bg-opacity-60 rounded-xl border border-yellow-500">
        {tag === "new" && (
          <p className="text-sm px-3 py-1 bg-red-500 rounded-md font-medium text-black">
            New
          </p>
        )}
        <div className="w-full flex justify-between items-center">
          <h2 className="font-bold text-yellow-500 text-3xl">{title}</h2>
          <p className="py-2 px-4 text-center rounded-md text-yellow-500 font-bold text-2xl bg-gray-900 border border-yellow-500">
            {price} tk
          </p>
        </div>
        <p className="text-gray-300">{description}</p>

        <div className="flex gap-1 items-center">
          {[...Array(review)].map((_, i) => {
            return (
              <span key={i}>
                <FaStar className="text-yellow-400" />
              </span>
            );
          })}
          <p className="font-medium text-gray-400">{rating} reviews</p>
        </div>

        <div className="mt-4 flex w-full md:w-3/4 gap-4">
          {inCart ? (
            <button
              onClick={handleRemove}
              className="w-1/2 text-sm md:text-base py-2 bg-red-600 rounded-md flex items-center justify-center gap-2 text-white"
            >
              <BsCartDashFill /> Remove from cart
            </button>
          ) : (
            <button
              onClick={handleAddToCart}
              className="w-1/2 text-sm md:text-base py-2 bg-yellow-500 rounded-md flex items-center justify-center gap-2 font-medium text-black"
            >
              <FaCartPlus /> Add to cart
            </button>
          )}

          <Link
            to="/checkout"
            onClick={() => handleCheckout(product)}
            className="flex items-center justify-center rounded-md gap-2 w-1/2 bg-yellow-500 text-black font-medium p-2"
          >
            <FaBagShopping />
            <span>Buy Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
