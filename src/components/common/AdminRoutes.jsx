import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../context";
import Sidebar from "../admin/Sidebar";

const AdminRoutes = () => {
  const { showNav } = useContext(AuthContext);

  return (
    <>
      {!showNav ? (
        <>
          <div className="container mt-[5vh] ">
            <div className="bg-white bg-opacity-50 h-[90vh] overflow-y-auto rounded-xl border border-borderColor flex justify-between items-start overflow-hidden">
              <Sidebar />
              <div className="w-4/5 p-6">
                <Outlet />
              </div>
            </div>
          </div>
        </>
      ) : (
        <Navigate to="/admin-login" />
      )}
    </>
  );
};

export default AdminRoutes;