import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";


function Userland() {
  const navigate = useNavigate();

  return (
    <div>

      {/* Navbar */}
      <div className="flex mx-auto  w-full my-auto py-4 border rounded-md outline-none cursor-pointer bg-black">

        <div className="flex flex-1 items-center p-2 space-x-10">
          <h2 className="font-bold ml-20 font-serif text-white">Akshay</h2>

          <div className="ml-20 space-x-4">
            <button className=" hover:bg-stone-300 px-2 text-white  rounded-md " >
              Home
            </button>

            <button
              className=" hover:bg-stone-300 px-2 text-white rounded-md "
              onClick={() => navigate("/User")}
            >
              User
            </button>

            <button className=" hover:bg-stone-300 px-2 text-white rounded-md " >
              About us
            </button>

            <button className=" hover:bg-stone-300 px-2 text-white rounded-md " >
              Contact
            </button>
          </div>
        </div>

        {/* middle container */}
        <div className="flex flex-col">
          <div className="mx-10  text-center">
            <button className="px-2 mt-2 rounded-md text-white hover:bg-stone-300" onClick={() => navigate("/loginpage")}>Login</button>
          </div>
        </div>
      </div>





      <div className="flex mt-16">
        <Home />
      </div>
    </div>
  );
}

export default Userland;
