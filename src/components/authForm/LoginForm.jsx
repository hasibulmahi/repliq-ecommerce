import { Link, useNavigate } from "react-router-dom";
import Field from "../common/Field";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { AuthContext } from "../../context";
import toast from "react-hot-toast";
import { checkRegisterdUser } from "../../utils";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { saveLoginData } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const onLogin = (formData) => {
    setLoading(true);
    const findUser = checkRegisterdUser(formData.number, formData.password);
    if (findUser !== undefined) saveLoginData(findUser);

    setTimeout(() => {
      if (findUser !== undefined) {
        toast.success("Successfully logged in");
        navigate("/");
        setLoading(false);
      } else {
        setError("root.loginError", {
          type: "loginError",
          message: "User not found. Please try with valid information",
        });
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onLogin)} className="space-y-6">
      {/* Mobile Number Field */}
      <Field regId="number" error={errors.number}>
        <input
          {...register("number", {
            required: "Mobile number is required",
            minLength: {
              value: 11,
              message: "Mobile number must be 11 characters long",
            },
          })}
          type="number"
          placeholder="Mobile Number"
          name="number"
          className={`input-field bg-transparent text-white border-gray-700 rounded-lg px-4 py-3 w-full focus:border-yellow-400 focus:ring-yellow-400 ${
            errors.number && "border-red-500"
          }`}
        />
      </Field>

      {/* Password Field */}
      <Field regId="password" error={errors.password}>
        <input
          {...register("password", { required: "Password is required" })}
          type="password"
          placeholder="Enter Password"
          name="password"
          className={`input-field bg-transparent text-white border-gray-700 rounded-lg px-4 py-3 w-full focus:border-yellow-400 focus:ring-yellow-400 ${
            errors.password && "border-red-500"
          }`}
        />
      </Field>

      {/* Login Error */}
      <small className="block italic text-red-500">
        {errors?.root?.loginError?.message}
      </small>

      {/* Button & Link Section */}
      <div className="flex justify-between items-center mt-4">
        <Link
          to="/register"
          className="text-yellow-400 hover:text-yellow-500 font-medium"
        >
          Create account
        </Link>

        <button
          type="submit"
          className="px-6 py-3 bg-yellow-500 text-white font-medium rounded-full flex items-center justify-center gap-2 hover:bg-yellow-600 transition-colors duration-300"
        >
          {loading ? (
            <AiOutlineLoading3Quarters className="animate-spin" />
          ) : (
            "Login"
          )}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
