import { logo } from "../../assets";
import AdminLoginForm from "../../components/authForm/AdminLoginForm";

const AdminLogin = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="bg-gray-800 bg-opacity-80 md:w-3/5 rounded-2xl p-8 md:p-12 border border-gray-600 shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src={logo} alt="logo" className="w-12" />
        </div>

        {/* Form Title */}
        <div className="flex flex-col md:flex-row justify-between gap-6 items-start">
          <div className="md:w-1/2 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold md:text-4xl text-white">
              Admin Login
              <span className="block text-neutral-400 mt-2 md:mt-0 text-lg md:text-2xl">
                Enter your credentials
              </span>
            </h2>
            <p className="text-gray-300 md:text-lg">
              Use your registered email address and password to sign in as an
              admin.
            </p>
          </div>

          {/* Login Form */}
          <div className="w-full md:w-1/2">
            <AdminLoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
