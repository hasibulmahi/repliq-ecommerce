import { Link, NavLink, useNavigate } from "react-router-dom";
import { avatar, logo } from "../../assets";
import { FaOpencart } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { AuthContext, CartContext } from "../../context";
import toast from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";
import Search from "./Search";
import { useDebounce } from "../../hooks/useDebounce";
import { LiaSignInAltSolid, LiaSignOutAltSolid } from "react-icons/lia";

const Navbar = ({ role }) => {
  const navigate = useNavigate();
  const { removeLoginData } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const { auth, loginUser } = useAuth();
  const { state } = useContext(CartContext);

  useEffect(() => {
    if (auth !== undefined) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [auth, isLogin]);

  const handleLogout = () => {
    removeLoginData();
    setIsLogin(false);
    navigate("/login");
    toast.success("Successfully logged out");
  };

  const debounceText = useDebounce(searchKey);

  const handleSearch = (e) => {
    setSearchKey(e.target.value);
  };

  if (role) {
    return null;
  }

  return (
    <>
      <nav className="h-[8vh] w-full fixed z-30 top-0 left-0 bg-black border-b border-borderColor bg-opacity-50 backdrop-blur-md flex items-center">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-10">
            <ul className="flex items-center gap-12">
              <Link to="/" className="logo flex items-center gap-2">
                <img src={logo} alt="logo" className="w-8" />
              </Link>
              <NavLink
                to="/products"
                className="text-sm  font-medium text-white"
              >
                Products
              </NavLink>
              <NavLink
                to="/products"
                className="text-sm  font-medium text-white"
              >
                Shop All
              </NavLink>
            </ul>
          </div>
          <div className="flex justify-between items-center gap-6">
            <div>
              <input
                type="text"
                name="search"
                value={searchKey}
                onChange={handleSearch}
                placeholder="Search here to find.."
                className="hidden text-sm lg:block px-4 py-2 w-[12rem] rounded-md outline-none bg-transparent border text-white"
              />
            </div>
            <ul className="flex items-center gap-6">
              <Link to="/cart" className="flex items-center gap-3">
                <FaOpencart className="text-xl text-white" />
                <span className="text-white text-sm ">
                  {state.cart.length}
                </span>
              </Link>

              {isLogin ? (
                <div className="group relative cursor-pointer">
                  <img
                    src={avatar}
                    alt=""
                    width={35}
                    className="rounded-full"
                  />

                  <div className="absolute opacity-0 invisible top-1/2 z-10 right-0 w-[12rem] duration-300 ease-in-out group-hover:opacity-100 group-hover:top-full group-hover:visible">
                    <div className="mt-3 rounded-md border bg-white border-borderColor overflow-hidden">
                      <div className="p-3 text-right">
                        <p className="text-base font-medium">
                          {loginUser?.fName} {loginUser?.lName}
                        </p>
                        <p className="text-sm font-medium text-neutral-400">
                          {loginUser?.number}
                        </p>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="flex justify-center items-center gap-2 px-3 py-2 text-black"
                      >
                        <span className="text-sm">logout</span>{" "}
                        <LiaSignOutAltSolid />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-2 p-2 md:px-3 md:py-2  text-white"
                >
                  <span className="hidden text-sm md:block">Login</span>{" "}
                  <LiaSignInAltSolid />
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {debounceText.length > 0 && (
        <Search searchText={debounceText} setSearchKey={setSearchKey} />
        
      )}
    </>
  );
};

export default Navbar;
