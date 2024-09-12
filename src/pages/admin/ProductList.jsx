import { useEffect, useState } from "react";
import { products as mainProducts } from "../../data/products.json";
import { MdDelete, MdModeEdit } from "react-icons/md";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(mainProducts);
  }, []);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl font-semibold text-white mb-8">Product List</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-300 border-collapse">
          <thead className="bg-gray-800 text-xs uppercase text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Image</th>
              <th scope="col" className="px-6 py-3">Title</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-gray-700 divide-y divide-gray-600">
            {products.slice(0, 5).map((p, i) => (
              <tr key={i} className="hover:bg-gray-600">
                {/* Product Image */}
                <td className="px-6 py-4">
                  <img
                    src={p.thumbnail}
                    alt="product"
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </td>
                
                {/* Product Title */}
                <td className="px-6 py-4 font-medium text-white">{p.title}</td>
                
                {/* Product Price */}
                <td className="px-6 py-4 text-yellow-400">{p.price} tk</td>

                {/* Action Buttons */}
                <td className="px-6 py-4 flex items-center gap-3">
                  <button className="p-2 rounded-full hover:bg-gray-500 transition">
                    <MdModeEdit className="text-blue-400" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-500 transition">
                    <MdDelete className="text-red-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
