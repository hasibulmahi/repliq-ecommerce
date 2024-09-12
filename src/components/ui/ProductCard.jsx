import { Link } from "react-router-dom";
import { FaCartPlus, FaCartShopping, FaStar } from "react-icons/fa6";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context";
import { actions } from "../../actions";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";

const ProductCard = ({ product }) => {
  const { id, title, description, rating, thumbnail, price, tag } = product;

  const review = Math.round(rating);
  const [inCart, setInCart] = useState(false);
  const { state, dispatch, checkout, setCheckout } = useContext(CartContext);
  const { auth } = useAuth();

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

      toast.success("Product added to the cart");
    }
  };

  const handleBuy = (element) => {
    if (auth === undefined) toast.error("Please login first");
    setCheckout({ ...checkout, mode: "single", items: element });
  };

  return (
    <div className="px-1 md:px-3 pb-3 md:pb-6">
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black hover:shadow-xl duration-300 border border-gray-600 rounded-lg overflow-hidden transform transition-transform hover:scale-105">
        <div className="relative">
          <Link to={`/product/${id}`} className="block overflow-hidden">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-48 md:h-56 object-cover"
            />
          </Link>
          {tag === "new" && (
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
              New
            </span>
          )}
          <div className="absolute top-3 right-3 flex items-center space-x-2">
            {inCart ? (
              <div className="relative cursor-pointer p-2 bg-gray-600 text-yellow-400 rounded-full group">
                <FaCartShopping className="text-xl" />
                <small className="absolute hidden group-hover:block bg-black text-white text-xs rounded-md px-2 py-1 top-0 right-full mr-2">
                  Already in Cart
                </small>
              </div>
            ) : (
              <div
                onClick={handleAddToCart}
                className="cursor-pointer p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
              >
                <FaCartPlus className="text-xl" />
              </div>
            )}
          </div>
        </div>

        <div className="p-4 flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-gray-100 line-clamp-1">
            {title}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-yellow-400 text-xl font-semibold">{price} Tk</p>
            <div className="flex items-center space-x-1">
              {[...Array(review)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
              <p className="text-sm font-medium text-gray-400">{rating}</p>
            </div>
          </div>
          <p className="text-sm text-gray-300 line-clamp-2">{description}</p>

          <Link
            to="/checkout"
            onClick={() => handleBuy(product)}
            className="block text-center w-full bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:from-yellow-600 hover:via-yellow-700 hover:to-yellow-800 text-white rounded-lg py-2 mt-3 font-medium transition-colors"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
