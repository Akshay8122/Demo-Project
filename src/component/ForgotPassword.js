import React from "react";
import { RiLockPasswordLine, RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function ForgotPassword() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/loginpage");
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
              <h1 className="text-center font-bold max-w-2xl">Set Password</h1>
            </div>

            {/* Usermame */}
            <div className="max-w-fit items-center py-3 mx-auto">
              <label>Password:</label>

              <div className="flex flex-wrap mx-auto w-fit max-w-xs bg-white shadow-transparent  ring ring-gray-300 cursor-pointer items-center p-2 rounded-md">
                <RiLockPasswordLine className="w-fit text-center" />

                <input
                  {...register("password", { required: true })}
                  className="bg-transparent outline-none ml-2 text-gray-500 "
                  type="password"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 mt-2">- Please enter valid pass</p>
              )}
            </div>

            {/* Password */}
            <div className="max-w-fit items-center py-3 mx-auto">
              <label>Confirm Password:</label>

              <div className="flex flex-wrap mx-auto w-fit max-w-xs bg-white shadow-transparent  ring ring-gray-300 cursor-pointer items-center p-2 rounded-md">
                <RiLockPasswordFill className="w-fit text-center" />

                <input
                  {...register("cpassword", { required: true })}
                  className="bg-transparent outline-none ml-2 text-gray-500"
                  type="password"
                />
              </div>
              {errors.password !== errors.cpassword && (
                <p className="text-red-500 mt-2">
                  - Confirm Pass must match with Password
                </p>
              )}
            </div>

            {/* RESET Button */}
            <div className=" flex flex-col bg-gray-500 text-white shadow-transparent font-bold  rounded-md my-5 p-2 max-w-fit mx-auto px-32">
              <button className="cursor-pointer" type="submit">
                RESET
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
