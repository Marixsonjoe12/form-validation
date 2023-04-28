import React from "react";

function Email() {
  return (
    <div className="mb-3">
      <div>
        <label
          className="font-sans font-normal text-lg text-slate-700"
          htmlFor="email"
        >
          Email
        </label>
      </div>
      <div>
        <input
          className="border-2 p-2 w-80 rounded-md focus:outline-none focus:border-pink-500"
          type="email"
          id="emailId"
          placeholder="Enter your Email"
        />
      </div>
    </div>
  );
}

export default Email;
