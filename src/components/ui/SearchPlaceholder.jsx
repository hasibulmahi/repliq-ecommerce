import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SearchPlaceholder = ({ el, setSearchKey }) => {
  const { id, title, rating, price } = el;
  const navigate = useNavigate();
  const handleViewProduct = () => {
    setSearchKey("");
    navigate(`product/${id}`);
  };
  return (
    <div
      onClick={handleViewProduct}
      className="w-full bg-white rounded-xl bg-opacity-50 hover:bg-opacity-80 duration-300 cursor-pointer flex justify-between pr-4 items-center border border-borderColor"
    >
      <div>
        <img src="/images/plant1.png" alt="" width={70} />
      </div>
      <div className="w-3/4 flex justify-between items-start">
        <div>
          <h2 className="font-medium">{title}</h2>
          <p>{price} tk</p>
        </div>
        <p className="flex items-center gap-2">
          <FaStar /> {rating}
        </p>
      </div>
    </div>
  );
};

export default SearchPlaceholder;