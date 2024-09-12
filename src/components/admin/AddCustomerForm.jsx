import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context";
import { useForm } from "react-hook-form";
import Field from "../common/Field";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const AddCustomerForm = () => {
  const [loading, setLoading] = useState(false);
  const { saveRegisterData } = useContext(AuthContext);
  const navigate = useNavigate();

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
      toast.success("New customer created");
      navigate("/dashboard/customers");
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit(onRegister)}
      className="bg-white bg-opacity-50 p-6  border border-borderColor"
    >
      <Field regId="fName" error={errors.fName}>
        <input
          {...register("fName", { required: "First name is required" })}
          type="text"
          placeholder="First Name"
          name="fName"
          className={`input-field2 ${errors.fName && "border-red-500"}`}
        />
      </Field>
      <Field regId="lName" error={errors.lName}>
        <input
          {...register("lName", { required: "Last name is required" })}
          type="text"
          placeholder="Last Name"
          name="lName"
          className={`input-field2 ${errors.lName && "border-red-500"}`}
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
          className={`input-field2 ${errors.number && "border-red-500"}`}
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
          className={`input-field2 ${errors.password && "border-red-500"}`}
        />
      </Field>

      <div className="flex justify-end items-center gap-3">
        <button
          type="submit"
          className="px-6 py-2.5 mt-3 bg-title rounded-full text-white font-medium hover:bg-brandHover duration-300"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <AiOutlineLoading3Quarters className="animate-spin" /> Loading
            </span>
          ) : (
            "Register"
          )}
        </button>
      </div>
    </form>
  );
};

export default AddCustomerForm;