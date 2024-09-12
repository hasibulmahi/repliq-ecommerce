import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Homepage from "./pages/user/Homepage";
import Register from "./pages/auth/Register";
import PrivateRoute from "./components/common/PrivateRoute";
import Checkout from "./pages/user/Checkout";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import SingleProduct from "./pages/user/SingleProduct";
import ScrollToTop from "./components/ui/ScrollToTop";
import Cart from "./pages/user/Cart";
import Products from "./pages/user/Products";
import AdminLogin from "./pages/auth/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import { useContext } from "react";
import { AuthContext } from "./context";
import AdminRoutes from "./components/common/AdminRoutes";
import CustomerList from "./pages/admin/CustomerList";
import ProductList from "./pages/admin/ProductList";
import OrderList from "./pages/admin/OrderList";

const Pages = () => {
  const { showNav } = useContext(AuthContext);

  return (
    <>
      <Navbar role={!showNav} />
      <ScrollToTop />

      <Routes>
        {/* Private routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/checkout" element={<Checkout />} />
        </Route>

        {/* Admin routes */}
        <Route element={<AdminRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/customers" element={<CustomerList />} />
          <Route path="/dashboard/products" element={<ProductList />} />
          <Route path="/dashboard/orders" element={<OrderList />} />
        </Route>

        {/* Public routes */}
        <Route path="/" element={<Homepage />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      
      <Footer role={!showNav} />
    </>
  );
};

export default Pages;