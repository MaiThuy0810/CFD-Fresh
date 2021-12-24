import { React, useState } from "react";
import "./Billing.scss";
import Radio from "../../../components/Button/Radio";

function BillingInf() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
  });
  const [error, setError] = useState();

  // const onButtonSubmit = (ev) => {
  //   ev.preventDefault();
  //   // console.log(form);
  //   let errorObject = {};
  //   if (!form.username.trim()) {
  //     errorObject.username = "Username khong duoc de trong";
  //   }

  //   if (!form.lastName.trim()) {
  //     errorObject.lastName = "last name khong duoc de trong";
  //   }
  //   setError(errorObject);
  //   if (Object.keys(errorObject).length === 0) {
  //     alert("success");
  //   }
  // };

  return (
    <div className="billingInf">
      <h3>Billing Info</h3>
      <p className="titleSmall">Please enter your bill info</p>
      <form>
        <div className="formLeft">
          <label>
            <div className="label">First Name</div>
            <input
              type="text"
              value={form.firstName}
              placeholder="First Name"
              name="username"
              onChange={(ev) =>
                setForm({ ...form, firstName: ev.currentTarget.value })
              }
            ></input>
          </label>
          <label>
            <div className="label">Email address</div>
            <input placeholder="Email address"></input>
          </label>
          <label>
            <div className="label">Address</div>
            <input placeholder="Address"></input>
          </label>
          <label>
            <div className="label">Address</div>
            <select>
              <option>Choose a state or value</option>
              <option>Saab</option>
              <option>Fiat</option>
              <option>Audi</option>
            </select>
          </label>

          <Radio
            type="checkbox"
            children="Ship to a different address?"
            color="default"
          />
        </div>
        <div className="formRight">
          <label>
            <div className="label">Last Name</div>
            <input
              type="text"
              value={form.lastName}
              placeholder="Lats Name"
              name="lastname"
              onChange={(ev) =>
                setForm({ ...form, lastName: ev.currentTarget.value })
              }
            ></input>
          </label>
          <label>
            <div className="label">Phone number</div>
            <input placeholder="Phone number"></input>
          </label>
          <label>
            <div className="label">Town/City</div>
            <input placeholder="Town or city"></input>
          </label>
          <label>
            <div className="label">Zip/Poscal code</div>
            <input placeholder="Poscal code or zip"></input>
          </label>
        </div>
      </form>
    </div>
  );
}

export default BillingInf;
