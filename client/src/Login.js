import React from "react";
import { useHistory } from "react-router-dom";
import { login } from "./api"

function Login () {
  const history = useHistory();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await login(event.target.email.value, event.target.password.value)
      console.log(token)
      history.push("/");
    } catch (error) {
      console.error(error);
      alert("Incorrect Password Please Try Again");
    }
  };

  return (
    <><div><h1>Login with your Credentials</h1>
                <form id="login" onSubmit={onSubmit}>
                  <div>
                    <label>
                  <input name="email" type="email" placeholder="Email" className="input_bar" autoComplete="off" placeholder="Email" />
                    </label>
                  </div>

                  <div>
                    <label>
                  <input name="password" type="password" className="input_bar" autoComplete="off" id="password" placeholder="Password" />
                    </label>
                  </div>

                  <input type="submit" className="sumbit_button" defaultValue="Submit Form" />
                </form>
    </div></>
  );
};

export default Login;
