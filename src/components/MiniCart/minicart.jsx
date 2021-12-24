import React from "react";
import { usePage } from "../../context/PageContext";
import { IconMiniCart } from "../Icons/icon";
import "./minicart.scss";

export const MiniCart = () => {
  const { isOpenCart, opentCart } = usePage();

  return (
    <div className="minicart">
      <IconMiniCart></IconMiniCart>
      <div className="count__item">
        <p>4</p>
      </div>
    </div>
  );
};

export default MiniCart;
