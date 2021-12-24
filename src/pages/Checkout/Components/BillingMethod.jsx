import React from "react";
import "./BillingMethod.scss";
import Radio from "../../../components/Button/Radio";
import { IconFedEx } from "../../../components/Icons/icon";

function BillingMethod() {
  return (
    <div className="billingMethod">
      <h3>Billing Info</h3>
      <p className="titleSmall">Please enter your bill info</p>
      <div className="billingMethod__fed">
        <Radio
          type="radio"
          children="FexEd"
          color="default"
          colorLabel="blackbold"
          text1="+32USD"
          text2="Additional price"
          colorText1="green"
          colorText2="blackbold"
          icon2={<IconFedEx />}
        />
      </div>

      <div className="billingMethod__dhl">
        <Radio
          type="radio"
          children="FexEd"
          color="default"
          colorLabel="blackbold"
          text1="+32USD"
          text2="Additional price"
          colorText1="green"
          colorText2="blackbold"
          icon2={<IconFedEx />}
        />
      </div>
    </div>
  );
}

export default BillingMethod;
