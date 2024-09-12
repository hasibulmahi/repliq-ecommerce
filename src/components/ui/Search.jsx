import SearchPlaceholder from "./SearchPlaceholder";
import { products } from "../../data/products.json";
import { useEffect, useState } from "react";

const Search = ({ searchText, setSearchKey }) => {
  const [searchProducts, setSearchProducts] = useState([]);

  useEffect(() => {
    const filterProducts = products.filter((item) =>
      item.title.toLowerCase().includes(searchText)
    );

    setSearchProducts(filterProducts);
  }, [searchText]);

  return (
    <div className="fixed top-[8vh] z-30 bg-gray bg-opacity-50 backdrop-blur-md w-full">
      <div className="container py-6 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {searchProducts.map((el, i) => {
          return (
            <SearchPlaceholder el={el} key={i} setSearchKey={setSearchKey} />
          );
        })}
      </div>
    </div>
  );
};

export default Search;