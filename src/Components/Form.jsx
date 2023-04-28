import React from "react";
import Name from "./Name";
import Dob from "./Dob";
import Mobile from "./Mobile";
import Email from "./Email";

function Inputform() {
  return (
    <div className="bg-white rounded-md shadow-lg w-fit p-5">
      <form>
        <Name />
        <Dob />
        <Mobile />
        <Email />
      </form>
    </div>
  );
}

export default Inputform;
