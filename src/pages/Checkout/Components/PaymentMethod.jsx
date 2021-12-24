import React from "react";
import "./PaymentMethod.scss";
import Radio from "../../../components/Button/Radio";
import { IconFedEx } from "../../../components/Icons/icon";
import TextField from "../../../components/TextField/TextField";

export const PaymentMethod = () => {
  return (
    <div className="paymentMethod">
      <h3>Payment method</h3>
      <p className="titleSmall">Please enter your bill info</p>
      <div className="wrapCreditCard">
        <Radio
          type="radio"
          children="FexEd"
          color="default"
          colorLabel="blackbold"
          icon2={<IconFedEx />}
          icon1={<IconFedEx />}
          borderButton="none"
        />
        <TextField
          type="text"
          label="Card number"
          placeholder="Card number"
          name="username"
          //   value={form.username}
          //   onChange={onChange}
          //   errorText={error.username}
        />

        <div className="wrapInput">
          <TextField
            type="text"
            label="Card holder"
            placeholder="Card holder"
            name="username"
            //   value={form.username}
            //   onChange={onChange}
            //   errorText={error.username}
          />
          <TextField
            type="text"
            label="Day"
            placeholder="DD/MM/YY"
            name="username"
            //   value={form.username}
            //   onChange={onChange}
            //   errorText={error.username}
          />
          <TextField
            type="text"
            label="CVC"
            placeholder="CVC"
            name="username"
            //   value={form.username}
            //   onChange={onChange}
            //   errorText={error.username}
          />
        </div>
      </div>
      <div className="paymentMethodPaypal">
        <Radio
          type="radio"
          children="FexEd"
          color="default"
          colorLabel="blackbold"
          icon2={<IconFedEx />}
        />
      </div>
      <div className="paymentMethodBitcoin">
        <Radio
          type="radio"
          children="FexEd"
          color="default"
          colorLabel="blackbold"
          icon2={<IconFedEx />}
        />
      </div>
    </div>
  );
};
export default PaymentMethod;
