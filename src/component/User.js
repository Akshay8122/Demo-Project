import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import home from "../../src/cartoon1.jpeg";
import cartoon from "../../src/cartoon2.jpeg";
import { IoMdArrowDropdown } from "react-icons/io"


export default function User() {

  let [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div className="border-4 border-b-green-200 w-full flex items-center p-2 rounded-md outline-none cursor-pointer bg-white">
        <div className="flex flex-1 items-center p-2 space-x-10">
          <h2 className="text-5xl mb-5 ml-12 text-gray-900 hover:scale-75">
            𝒜𝓀𝓈𝒽𝒶𝓎
          </h2>

          <div className="text-center space-x-5">
            <button className="font-mono text-xl my-3 rounded-md hover:bg-slate-50 ">
              Home
            </button>
            <button className="font-mono   rounded-md hover:bg-slate-50 ">
              About Me
            </button>
            <button className="font-mono   rounded-md hover:bg-slate-50 ">
              Contact Us
            </button>
          </div>
        </div>

        <div>
          <div className="w-fit border rounded-full bg-stone-500">
            <div onClick={handleClick} className="space-x-1 flex mx-1 text-center">
              <img
                src={cartoon}
                alt=""
                className="w-8 h-8 rounded-full"
              />

              <h1 className="text-white text-center my-1 font-bold">Akshay</h1>
              <IoMdArrowDropdown className="my-1 text-white text-center w-fit text-2xl" />
            </div>
          </div>

          {isOpen && <div className="shadow-md font-bold bg-stone-500 rounded-md  fixed  text-white px-8 mx-2 my-1">
            <ul>
              <li>
                <button className="">Profile</button>
              </li>
              <li>
                <button className="mt-1" onClick={() => navigate("/")}>Logout</button>
              </li>

            </ul>
          </div>}
        </div>
      </div>






      {/* <hr /> */}
      <div className="flex justify-center my-52">
        <div>
          <p className="font-mono text-5xl mt-24 ">
            My, name is Akshay
            <br />
            nice to see you :){" "}
          </p>
        </div>

        <div>
          <img
            className="h-40 w-40 ml-10 mt-16 rounded-full border border-yellow-100 outline-none"
            src={home}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
