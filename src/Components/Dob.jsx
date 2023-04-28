import React from "react";

function Dob() {
  return (
    <div className=" mb-3">
      <div>
        <label
          className="font-sans font-normal text-lg text-slate-700"
          htmlFor="dob"
        >
          Date of Birth
        </label>
      </div>

      <div>
        <input
          className="border-2 p-2 w-80 rounded-md focus:outline-none focus:border-pink-500"
          type="text"
          id="dob"
          placeholder="Enter Date of Birth"
        />
      </div>
    </div>
  );
}

export default Dob;
