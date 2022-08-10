import React from "react";
import { useNavigate } from "react-router-dom";
import SignUpPage from "../component/SignUpPage";
function Userland() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex mx-auto  w-full my-auto py-4 border rounded-md outline-none cursor-pointer bg-sky-400">
        <h2 className="font-bold ml-5 font-serif ">Akshay</h2>
        <button
          className="ml-5 border rounded-md border-yellow-200 hover:bg-white px-2 bg-"
          onClick={() => navigate("/User")}
        >
          Users
        </button>
      </div>

      {/* Title */}

      {/* Form */}

      <div className="flex max-w-sm container justify-center items-center mx-auto mt-10">
        <SignUpPage />
      </div>
    </div>
  );
}

export default Userland;
