import React from "react";
import { Link } from "react-router-dom";
import { IconUser } from "../Icons/icon";

function useraccount() {
  return (
    <div>
      <Link to="/login">
        <IconUser />
      </Link>
    </div>
  );
}

export default useraccount;
