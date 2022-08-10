import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { useForm } from "react-hook-form";

function ResetPassword() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/forgotpassword");
  };

  return (
    <div>
      <div className="flex mx-auto  w-full my-auto py-4 border rounded-md outline-none cursor-pointer bg-green-500">
        <h2 className="font-bold ml-5 font-serif ">Akshay</h2>
        <button
          className="ml-5 border rounded-md border-yellow-200 hover:bg-white px-2 bg-"
          onClick={() => navigate("/User")}
        >
          fechUser
        </button>
      </div>
      {/* Form */}

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card shadow-md py-10  px-4 border bg-white max-w-sm mt-40 mx-auto rounded-md">
            <div>
              <h1 className="text-center font-bold max-w-2xl">
                Reset Password
              </h1>
              <p className="text-center my-2">
                Enter your email for reset password
              </p>
            </div>

            {/* Email */}
            <div className="max-w-fit items-center py-3 mx-auto">
              <label>Email:</label>

              <div className="flex flex-wrap mt-2 mx-auto w-fit max-w-xs bg-white shadow-transparent  ring ring-gray-300 cursor-pointer items-center p-2 rounded-md">
                <MdOutlineMarkEmailRead className="w-fit text-center" />

                <input
                  {...register("email", { required: true })}
                  className="bg-transparent outline-none ml-2 text-gray-500 "
                  type="email"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 mt-2">- Email is required</p>
              )}
            </div>

            {/* Submit Button */}
            <div className=" flex flex-col bg-gray-500 text-white shadow-transparent font-bold  rounded-md my-5 p-2 max-w-fit mx-auto px-32">
              <button type="submit">SUBMIT</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
