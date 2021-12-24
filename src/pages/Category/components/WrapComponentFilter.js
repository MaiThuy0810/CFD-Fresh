import React from "react";
import "./WrapComponentFilter.scss";
import WrapProduct from "../../../components/WrapProduct/wrapproduct";
import Radio from "../../../components/Button/Radio";
function WrapComponentFilter() {
  return (
    <div className="WrapComponentFilter">
      <div className="container-fluid">
        <div className="WrapComponentFilter__category">
          <WrapProduct
            titleProduct="category menu"
            itemProduct1="Bakery"
            itemProduct2="Fruit and vegetables"
            itemProduct3="Meat and fish"
            itemProduct4="Drinks"
            itemProduct5="Kitchen"
            tagname="180"
            heighTag="small"
            itemColor="black"
          />
        </div>

        <div className="WrapComponentFilter__branch">
          <Radio
            borderButton="none"
            type="checkbox"
            children="Filter text"
            tagname="nbs"
            display="none"
            color="black"
            background="none"
          />
        </div>
      </div>
    </div>
  );
}

export default WrapComponentFilter;
