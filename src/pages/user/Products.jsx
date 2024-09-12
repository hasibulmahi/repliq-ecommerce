import { useEffect, useState } from "react";
import ProductCard from "../../components/ui/ProductCard";
import { products } from "../../data/products.json";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Products = () => {
  const [filterKey, setFilterKey] = useState("all");
  const [loading, setLoading] = useState(false);
  const [filterProducts, setFilterProducts] = useState(products);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      if (filterKey === "new") {
        const newProducts = products.filter((el) => el.tag === "new");
        setFilterProducts(newProducts);
      } else {
        setFilterProducts(products);
      }

      setLoading(false);
    }, 1000);
  }, [filterKey]);

  return (
    <div className="container mt-[10vh]">
      <h2 className="text-xl font-medium md:text-3xl">
        All Products
        <span className="text-yellow-500"> New Arrivals</span>
      </h2>

      <div className="mt-6 flex flex-col md:flex-row gap-y-6 justify-between items-start text-white">
        <div className="md:w-[20%]">
          <h2 className="text-xl font-medium text-white">Filters</h2>
          <ul className="mt-3">
            <li
              onClick={() => setFilterKey("all")}
              className={`cursor-pointer duration-300 hover:underline font-regular ${
                filterKey === "all" && "text-yellow-500 underline"
              }`}
            >
              All items
            </li>
            <li
              onClick={() => setFilterKey("new")}
              className={`cursor-pointer duration-300 hover:underline font-regular flex items-center gap-2 ${
                filterKey === "new" && "text-yellow-500 underline"
              }`}
            >
              New items{" "}
              <span className="text-sm px-2 py-1 bg-red-500 text-white rounded-md font-medium">
                New
              </span>
            </li>
          </ul>
        </div>
        {loading ? (
          <div className="w-full h-[50vh] flex justify-center items-center">
            <p className="flex justify-center items-center gap-2">
              <AiOutlineLoading3Quarters className="animate-spin" /> Loading...
            </p>
          </div>
        ) : (
          <div className="md:w-[80%] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {filterProducts.map((el, i) => {
              return <ProductCard key={i} product={el} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;