import React from "react";

function Name() {
  return (
    <div className="mb-3">
      <div>
        <label
          className="font-sans font-normal text-lg text-slate-700"
          htmlFor="name"
        >
          Name
        </label>
      </div>

      <div>
        <input
          className="border-2 p-2 w-80 rounded-md focus:outline-none focus:border-pink-500"
          type="text"
          id="name"
          placeholder="Enter your Name"
        />
      </div>
    </div>
  );
}

export default Name;
