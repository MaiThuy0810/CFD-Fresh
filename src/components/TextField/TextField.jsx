import React from "react";
import "./TextField.scss";

export const TextField = ({
  label,
  value,
  placeholder,
  errorText,
  ...rest
}) => {
  return (
    <label>
      <div className="label">{label}</div>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        {...rest}
        // onChange={(ev) =>
        //   setForm({ ...form, username: ev.currentTarget.value })
        // }
      />
      <p className="error-text">{errorText}</p>
    </label>
  );
};
export default TextField;
