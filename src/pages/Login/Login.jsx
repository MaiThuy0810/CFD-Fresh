import { React, useState } from "react";
import "./Login.scss";
import Button from "../../components/Button/BtnEmtyBack";
import TextField from "../../components/TextField/TextField";

export const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState({
    // username: "Username khong duoc de trong",
    // password: "Password khong duoc de trong",
  });

  //   console.log("re-render");
  const submit = (ev) => {
    ev.preventDefault();
    // console.log(form);
    let errorObject = {};
    if (!form.username.trim()) {
      errorObject.username = "Username khong duoc de trong";
    } else if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        form.username
      )
    ) {
      errorObject.username = "Username la email";
    }
    if (!form.password) {
      errorObject.password = "Password khong duoc de trong";
    } else if (form.password.length < 6 || form.password.length > 10) {
      errorObject.password = "Password phai tu 6-10 ky tu";
    }
    setError(errorObject);
    if (Object.keys(errorObject).length === 0) {
      alert("success");
    }
  };

  const onChange = (ev) => {
    let name = ev.currentTarget.name;
    let value = ev.currentTarget.value;
    setForm({ ...form, [name]: value });
  };
  //   const onClickButtonSubmit = (ev) => {
  //     ev.prevenDefault();
  //     console.log(form);
  //   };

  return (
    <div className="login">
      <div className="container">
        <h3>Login</h3>
        <form onSubmit={submit}>
          <TextField
            type="text"
            label="Username"
            placeholder="uẻname"
            name="username"
            value={form.username}
            onChange={onChange}
            errorText={error.username}
          />
          <TextField
            label="Password"
            placeholder="password"
            value={form.password}
            name="password"
            type="password"
            onChange={onChange}
            errorText={error.password}
          />
          {/* <label>
            <div className="">Username</div>
            <input
              type="text"
              value={form.username}
              name="username"
              placeholder="Username"
              onChange={onChange}
            />
            <p className="error-text">{error.username}</p>
          </label>
          <label>
            <div className="">Password</div>
            <input
              type="password"
              value={form.password}
              name="password"
              placeholder="Password"
              onChange={onChange}
            />
            <p className="error-text">{error.password}</p>
          </label> */}

          <Button round size="small" color="green" colorborder="boldgreen">
            Button
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
