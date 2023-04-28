import React from "react";

function Mobile() {
  return (
    <div className="mb-3">
      <div>
        <label
          className="font-sans font-normal text-lg text-slate-700"
          htmlFor="mobileNumber"
        >
          Mobile Number
        </label>
      </div>
      <div>
        <input
          className="border-2 p-2 w-80 rounded-md focus:outline-none focus:border-pink-500"
          type="number"
          id="mobileNumber"
          placeholder="Enter your Mobile Number"
        />
      </div>
    </div>
  );
}

export default Mobile;
