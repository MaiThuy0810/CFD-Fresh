import React from "react";
import "./Confirm.scss";
import Radio from "../../../components/Button/Radio";
import Button from "../../../components/Button/BtnEmtyBack";
import Billing from "./BillingInf";

export const Confirm = () => {
  return (
    <div className="confirm">
      <h3>Payment method</h3>
      <p className="titleSmall">Please enter your bill info</p>

      <Radio
        type="checkbox"
        children="I agree with sending an Marketing and newsletter emails. No spam, promissed!"
        color="default"
      />
      <Radio
        type="checkbox"
        children="I agree with our terms and conditions and privacy policy."
        color="default"
      />

      <Button
        // onClick={onButtonSubmit}
        size="midle"
        color="green"
        colorborder="boldgreen"
      >
        Commlete order
      </Button>
    </div>
  );
};
export default Confirm;
