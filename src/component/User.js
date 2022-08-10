import React from "react";
import home from "../../src/cartoon1.jpeg";
import cartoon from "../../src/cartoon2.jpeg";
export default function User() {
  return (
    <div className="">
      <div className="border-4 border-b-green-200 w-full flex items-center p-2 rounded-md outline-none cursor-pointer bg-white">
        <div className="flex flex-1 items-center p-2 space-x-10">
          <h2 className="text-5xl mb-5 ml-40 text-gray-900 hover:scale-75">
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

        <div className="mx-7">
          <img
            src={cartoon}
            alt=""
            className="w-10 h-10 rounded-full object-bottom"
          />
          {/* <select name = "example">
             <img src={home} alt="" />
            <option selected="selected">Choice 1</option>
            <option value="one">Choice 1</option>
            <option value="two">Choice 1</option>
            
            </select> */}
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
