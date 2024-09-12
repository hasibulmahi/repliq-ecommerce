import { useAuth } from "../../hooks/useAuth";
import { FaBox, FaUser } from "react-icons/fa6";
import { products } from "../../data/products.json";
import { GiBoxUnpacking } from "react-icons/gi";

const Dashboard = () => {
  const { registerUser } = useAuth();

  return (
    <div className="container mx-auto py-12">
      {/* Dashboard Heading */}
      <div className="text-center mb-12">
        <h2 className="font-bold text-4xl md:text-5xl text-white">
          Dashboard
        </h2>
        <p className="mt-4 text-sm md:text-base text-neutral-400 max-w-lg mx-auto">
          Stay on top of your business metrics with an overview of customers, products, and orders.
        </p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Customers Card */}
        <div className="p-8 flex flex-col justify-between bg-gradient-to-br from-indigo-600 to-blue-500 rounded-2xl shadow-lg text-white hover:scale-105 transition-transform">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Customers</h3>
            <FaUser className="text-3xl" />
          </div>
          <p className="text-6xl font-bold">{registerUser.length}</p>
        </div>

        {/* Products Card */}
        <div className="p-8 flex flex-col justify-between bg-gradient-to-br from-green-500 to-teal-400 rounded-2xl shadow-lg text-white hover:scale-105 transition-transform">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Products</h3>
            <FaBox className="text-3xl" />
          </div>
          <p className="text-6xl font-bold">{products.length}</p>
        </div>

        {/* Orders Card */}
        <div className="p-8 flex flex-col justify-between bg-gradient-to-br from-yellow-500 to-orange-400 rounded-2xl shadow-lg text-white hover:scale-105 transition-transform">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Orders</h3>
            <GiBoxUnpacking className="text-3xl" />
          </div>
          <p className="text-6xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
