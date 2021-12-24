import React from "react";
import { IconWish, IconCompare, IconRemove, IconStar } from "../Icons/icon";
import "./ItemCart.scss";

export const ItemCart = () => {
  return (
    <div className="itemCart">
      <div className="cartImage">
        <div className="image"></div>
        <div className="choose">
          <div className="wishlist">
            <IconWish />
            <p className="titleSmall">Wishlist</p>
          </div>
          <div className="compare">
            <IconCompare />
            <p className="titleSmall">Compare</p>
          </div>
          <div className="remove">
            <IconRemove />
            <p className="titleSmall">Remove</p>
          </div>
        </div>
      </div>

      <div className="cartInfItem">
        <p className="title">Product title</p>
        <div className="info">
          <div className="infoLeft">
            <p className="titleSmall">Farm:</p>
            <p className="titleSmall">Fressheness:</p>
          </div>
          <div className="infoRight">
            <p>Tharam farm</p>
            <p>1 years ago</p>
          </div>
        </div>
        <div className="wrapStar">
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
          <IconStar />
        </div>
        <h3>349USD</h3>
        <p className="discount">23.44USD</p>
      </div>
    </div>
  );
};
export default ItemCart;
