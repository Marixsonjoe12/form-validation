import React from "react";

function Inputform() {
  return (
    <div className="bg-white rounded-md shadow-lg w-fit p-5">
      <form>
        <div className="mb-3">
          <div>
            <label className="font-sans font-normal text-lg text-slate-700" htmlFor="name">Name</label>
          </div>

          <div>
            <input className="border-2 p-2 w-80 rounded-md focus:outline-none focus:border-pink-500" type="text" id="name" />
          </div>
        </div>

        <div className=" mb-3">
          <div>
            <label className="font-sans font-normal text-lg text-slate-700" htmlFor="dob">Date of Birth</label>
          </div>

          <div>
            <input className="border-2 p-2 w-80 rounded-md focus:outline-none focus:border-pink-500" type="text" id="dob" />
          </div>
        </div>

        <div className="mb-3">
          <div>
            <label className="font-sans font-normal text-lg text-slate-700" htmlFor="mobileNumber">Mobile Number</label>
          </div>
          <div>
            <input className="border-2 p-2 w-80 rounded-md focus:outline-none focus:border-pink-500" type="number" id="mobileNumber" />
          </div>
        </div>

        <div className="mb-3">
          <div>
            <label className="font-sans font-normal text-lg text-slate-700" htmlFor="email">Email</label>
          </div>
          <div>
            <input className="border-2 p-2 w-80 rounded-md focus:outline-none focus:border-pink-500" type="email" id="emailId" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Inputform;
