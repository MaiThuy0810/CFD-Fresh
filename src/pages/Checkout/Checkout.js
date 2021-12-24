import React from "react";
import "./Checkout.scss";
import "./Components/BillingInf";
import BillingInf from "./Components/BillingInf";
import LinkToPage from "../../components/LinkToPage/LinkToPage";
import BillingMethod from "./Components/BillingMethod";
import PaymentMethod from "./Components/PaymentMethod";
import AddittionalInf from "./Components/AddittionalInf";
import Confirm from "./Components/Confirm";
import WrapOrderSum from "./Components/WrapOrderSum";

function Checkout() {
  return (
    <div className="checkOut">
      <div className="container">
        <div className="checkOutLink">
          <LinkToPage />
        </div>
        <div className="checkOutWrap">
          <div className="checkOutWrapForm">
            <BillingInf />
            <BillingMethod />
            <PaymentMethod />
            <AddittionalInf />
            <Confirm />
          </div>
          <div className="checkOutWrapOrder">
            <WrapOrderSum />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
