import React from "react";
import reactDom from "react-dom";
import { IconRemove } from "../Icons/icon";
import "./CartModel.scss";
import Modal from "../Modal/Modal";

export const CartModel = ({ isOpen }) => {
  return (
    <Modal isOpen={isOpen}>
      <div className="cartModel">
        <IconRemove />
        <h1>this is cart model</h1>
      </div>
    </Modal>
  );
};
export default CartModel;
