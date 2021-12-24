import React from "react";
import "./AddittionalInf.scss";

export const AddittionalInf = () => {
  return (
    <div className="addittionalInf">
      <h3>Additional Information</h3>
      <p className="titleSmall">Please enter your bill info</p>
      <label>
        <div className="label">First Name</div>
        <textarea
          placeholder="Need a specific delivery day? Sending a gitf? Let’s say ..."
          rows="5"
          className=""
        ></textarea>
      </label>
    </div>
  );
};
export default AddittionalInf;
