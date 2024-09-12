import { Link } from "react-router-dom";
import { logo } from "../../assets";
import RegisterForm from "../../components/authForm/RegisterForm";
import { FaArrowRight } from "react-icons/fa6";

const Register = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      <div className="w-full max-w-4xl p-6 md:p-12 bg-white bg-opacity-10 rounded-2xl shadow-lg backdrop-blur-md border border-gray-700">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <img src={logo} alt="logo" className="w-12" />
        </div>

        {/* Register Form Section */}
        <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
          {/* Left: Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              Join Us Today!
              <span className="block text-neutral-400 font-medium">
                Register as a User
              </span>
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Create your account by filling in your valid information. It's quick and easy.
            </p>
          </div>

          {/* Right: Form Section */}
          <div className="w-full md:w-1/2">
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
              <RegisterForm />
            </div>
          </div>
        </div>

        {/* Login Link */}
        <div className="mt-6">
          <Link
            to="/login"
            className="flex items-center gap-2 text-sm md:text-base font-medium text-yellow-400 hover:underline"
          >
            <span>Already have an account? Login</span>
            <FaArrowRight className="text-base" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
