import { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";
import { RiHome7Fill } from "react-icons/ri";
import { HiMiniUsers } from "react-icons/hi2";
import { FaBoxesPacking } from "react-icons/fa6";
import { HiDocumentCheck } from "react-icons/hi2";
import { IoLogOut } from "react-icons/io5";

const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { setShowNav } = useContext(AuthContext);

  const handleLogoutAdmin = () => {
    setShowNav(true);
    navigate("/admin-login");
  };

  return (
    <div className="w-80 h-full bg-gray-800 p-6 border-r border-gray-700 shadow-lg flex flex-col justify-between transition-transform transform hover:translate-x-0">
      <div>
        <h2 className="text-lg font-semibold text-gray-100">Welcome</h2>
        <div className="mt-8 flex flex-col gap-4">
          <Link
            to="/dashboard"
            className={`flex items-center gap-3 py-2 px-4 rounded-lg transition-colors duration-200 ${
              pathname === "/dashboard" ? "bg-gray-900 text-white" : "text-gray-400 hover:bg-gray-700"
            }`}
          >
            <RiHome7Fill className="text-xl" />
            <span className="font-medium">Home</span>
          </Link>
          <NavLink
            to="/dashboard/customers"
            className={`flex items-center gap-3 py-2 px-4 rounded-lg transition-colors duration-200 ${
              pathname === "/dashboard/customers" ? "bg-gray-900 text-white" : "text-gray-400 hover:bg-gray-700"
            }`}
          >
            <HiMiniUsers className="text-xl" />
            <span className="font-medium">Customers</span>
          </NavLink>
          <NavLink
            to="/dashboard/products"
            className={`flex items-center gap-3 py-2 px-4 rounded-lg transition-colors duration-200 ${
              pathname === "/dashboard/products" ? "bg-gray-900 text-white" : "text-gray-400 hover:bg-gray-700"
            }`}
          >
            <FaBoxesPacking className="text-xl" />
            <span className="font-medium">Products</span>
          </NavLink>
          <NavLink
            to="/dashboard/orders"
            className={`flex items-center gap-3 py-2 px-4 rounded-lg transition-colors duration-200 ${
              pathname === "/dashboard/orders" ? "bg-gray-900 text-white" : "text-gray-400 hover:bg-gray-700"
            }`}
          >
            <HiDocumentCheck className="text-xl" />
            <span className="font-medium">Orders</span>
          </NavLink>
        </div>
      </div>
      <div>
        <button
          onClick={handleLogoutAdmin}
          className="w-full py-2 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200"
        >
          <IoLogOut className="text-lg" />
          <span className="ml-2">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
