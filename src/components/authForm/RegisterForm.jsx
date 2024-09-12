import { Link, useNavigate } from "react-router-dom";
import Field from "../common/Field";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import toast from "react-hot-toast";
import { AuthContext } from "../../context";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { saveRegisterData } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onRegister = (formData) => {
    setLoading(true);
    setTimeout(() => {
      saveRegisterData(formData);
      setLoading(false);
      toast.success("Your account has been created");
      navigate("/login");
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onRegister)}>
      <Field regId="fName" error={errors.fName}>
        <input
          {...register("fName", { required: "First name is required" })}
          type="text"
          placeholder="First Name"
          name="fName"
          className={`input-field ${errors.fName && "border-red-500"}`}
        />
      </Field>
      <Field regId="lName" error={errors.lName}>
        <input
          {...register("lName", { required: "Last name is required" })}
          type="text"
          placeholder="Last Name"
          name="lName"
          className={`input-field ${errors.lName && "border-red-500"}`}
        />
      </Field>
      <Field regId="number" error={errors.number}>
        <input
          {...register("number", {
            required: "Mobile Number is required",
            minLength: {
              value: 11,
              message: "Mobile number must 11 characters long",
            },
          })}
          type="number"
          placeholder="Mobile Number"
          name="number"
          className={`input-field ${errors.number && "border-red-500"}`}
        />
      </Field>

      <Field regId="password" error={errors.password}>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be 8 characters long",
            },
          })}
          type="password"
          placeholder="Enter Password"
          name="password"
          className={`input-field ${errors.password && "border-red-500"}`}
        />
      </Field>

      <div className="flex justify-end items-center gap-3">
        <Link
          to="/login"
          className="px-6 py-2.5 mt-3 rounded-full hover:bg-yellow-500 duration-300 text-sm "
        >
          Already have an account
        </Link>
        <button
          type="submit"
          className="px-6 py-2.5 mt-3 bg-yellow-500 rounded-full text-white font-medium hover:bg-yellow-700 duration-300"
        >
          {loading ? (
            <span className="flex items-center gap-2 text-sm md:text-base">
              <AiOutlineLoading3Quarters className="animate-spin" /> Loading
            </span>
          ) : (
            <span className=" text-sm md:text-base">Register</span>
          )}
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;