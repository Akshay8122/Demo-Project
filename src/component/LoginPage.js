import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { useForm } from "react-hook-form";

function LoginPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    navigate("/");
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
              <h1 className="text-center font-bold max-w-2xl">Login Form</h1>
            </div>

            {/* Usermame */}
            <div className="max-w-fit items-center py-3 mx-auto">
              <label>Username:</label>

              <div className="flex flex-wrap mx-auto w-fit max-w-xs bg-white shadow-transparent  ring ring-gray-300 cursor-pointer items-center p-2 rounded-md">
                <AiOutlineUser className="w-fit text-center" />

                <input
                  {...register("username", { required: true })}
                  className="bg-transparent outline-none ml-2 text-gray-500 "
                  type="text"
                />
              </div>
              {errors.username && (
                <p className="text-red-500">- Username required</p>
              )}
            </div>

            {/* Password */}
            <div className="max-w-fit items-center py-3 mx-auto">
              <label>Password:</label>

              <div className="flex flex-wrap mx-auto w-fit max-w-xs bg-white shadow-transparent  ring ring-gray-300 cursor-pointer items-center p-2 rounded-md">
                <RiLockPasswordLine className="w-fit text-center" />

                <input
                  {...register("password", { required: true })}
                  className="bg-transparent outline-none ml-2 text-gray-500"
                  type="password"
                />
              </div>
              {errors.password && (
                <p className="text-red-500">- Password required!!</p>
              )}
            </div>
            <span
              onClick={() => navigate("/resetpassword")}
              className="text-gray-400 float-right max-w-fit cursor-pointer"
            >
              Forgot Password?
            </span>

            {/* Login Button */}
            <div className=" flex flex-col bg-gray-500 text-white shadow-transparent font-bold  rounded-md my-10 p-2 max-w-fit mx-auto px-32">
              <button>LOGIN</button>
            </div>
            <p className="text-gray-400  text-center max-w-md">
              or Signup with
            </p>
            <p className="text-center p-2 cursor-pointer" onClick={() => navigate("/")}> Sign Up</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
