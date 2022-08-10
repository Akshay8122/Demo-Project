/* eslint-disable no-unused-expressions */
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
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
    <div className="card shadow-md border border-gray-300 bg-slate-50 w-auto mt-20 h-fit  p-3 justify-items-center rounded-md">
      <div className="mb-10 mx-auto text-center">
        <h4 className="font-bold first-letter:text-xl mt-10">SignUp Page</h4>
      </div>
    
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center space-x-4">
          <div>
            <label>First Name</label>
            <input
              {...register("firstName", { required: true })}
              placeholder="John"
              type="text"
              className=" bg-slate-100 pl-2 border border-yellow-700 outline-blue-600 rounded-md my-1 py-1"
            />
            {errors.firstName && (
              <p className="text-red-500">- UserName field is required</p>
            )}
          </div>

          <div>
            <label>Last Name</label>
            <input
              {...register("lastName", { required: true })}
              placeholder="Doe"
              type="text"
              className=" bg-slate-100 pl-2 border border-yellow-700 outline-blue-600 rounded-md my-1 py-1"
            />
            <div>
              {errors.lastName && (
                <p className="text-red-500">- LastName is required</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex flex-col">
            <label>Email address</label>
            <input
              {...register("email", { required: true })}
              placeholder="abc@123.gmail.com"
              type="email"
              className=" bg-slate-100 pl-2 border border-yellow-700 outline-blue-600 rounded-md my-1 py-1 px-2"
            />
            {errors.email && (
              <p className="text-red-500">- Please enter email </p>
            )}
          </div>

          <div className="flex flex-col">
            <label>Phone number</label>
            <input
              {...register("Phone", { required: true })}
              placeholder="123-45-678"
              type="number"
              className=" bg-slate-100 pl-2 border border-yellow-700 outline-blue-600 rounded-md my-1 py-1 px-2"
            />
            {errors.Phone && (
              <p className="text-red-500">- PhoneNo is required field!!</p>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4"></div>

        <div className="flex items-center space-x-4">
          <div className="flex flex-col w-full">
            <label>Password</label>
            <input
              {...register("password", { required: true })}
              type="password"
              className=" bg-slate-100 pl-2 border border-yellow-700 outline-blue-600 rounded-md my-1 py-1 px-2"
            />
            {errors.password && (
              <p className="text-red-500">- Password is required field</p>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex flex-col w-full">
            <label>Confirm password</label>
            <input
              {...register("cpassword", { required: true })}
              type="password"
              className=" bg-slate-100 pl-2 border border-yellow-700 outline-blue-600 rounded-md my-1 py-1 px-2"
            />
            {errors.cpassword && (
              <p className="text-red-500">
                - Always Confirm password must match with password
              </p>
            )}
          </div>
        </div>

        <div className="flex mt-1 py-2">
          <input type="checkbox" className="w-fit outline-blue-600" />
          <p className="ml-2">
            I am agree with &nbsp;
            <span className="text-blue-600">terms and condition</span>
          </p>
        </div>

        {errors && (
          <button
            type="submit"
            className="bg-blue-700 outline-none px-1 py-2 text-white mt-1 rounded-md"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
}

export default SignUpPage;
