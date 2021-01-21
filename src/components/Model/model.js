import React from "react";
import { ContextProvider } from "../Hero/Context";
import "./model.css";
export default function Model() {
  const { model, closeModel, register, login } = React.useContext(
    ContextProvider
  );
  const [state, setState] = React.useState({
    register: true,
    login: false,
  });
  const formToggle = () => {
    setState({
      ...state,
      register: !state.register,
      login: !state.login,
    });
  };
  const [inputs, setInputs] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const closeForm = (e) => {
    const className = e.target.getAttribute("class");
    if (className === "model") {
      closeModel();
    }
  };
  const registerUser = (e) => {
    e.preventDefault();
    register(inputs);
    console.log(inputs);
  };
  const userLogin = (e) => {
    e.preventDefault();
    login(inputs);
  };
  return (
    <>
      {model ? (
        <div className="model" onClick={closeForm}>
          <div className="model-container">
            {state.register ? (
              <div className="model-model-form">
                <form onSubmit={registerUser}>
                  <div className="model-group">
                    <img
                      className="Logo-icon"
                      src="images/Logo.png"
                      alt="logo"
                    />
                  </div>
                  <div className="model-group">
                    <input
                      type="text"
                      name="username"
                      className="model-input"
                      placeholder="Username"
                      onChange={handleInput}
                      value={inputs.username}
                      required
                    />
                  </div>
                  <div className="model-group">
                    <input
                      type="text"
                      name="email"
                      className="model-input"
                      placeholder="Email"
                      onChange={handleInput}
                      value={inputs.email}
                      required
                    />
                  </div>
                  <div className="model-group">
                    <input
                      type="text"
                      name="password"
                      className="model-input"
                      placeholder="Create A Password"
                      onChange={handleInput}
                      value={inputs.password}
                      required
                    />
                  </div>
                  <div className="model-group">
                    <input
                      type="submit"
                      value="register"
                      className="btn btn-smart"
                    />
                  </div>
                  <div className="model-group">
                    <span onClick={formToggle}>Already Have An Account</span>
                  </div>
                </form>
              </div>
            ) : (
              <div className="model-model-form">
                <form onSubmit={userLogin}>
                  <div className="model-group">
                    <img
                      className="Logo-icon"
                      src="images/Logo.png"
                      alt="logo"
                    />
                  </div>
                  <div className="model-group">
                    <input
                      type="text"
                      name="email"
                      className="model-input"
                      placeholder="Email"
                      onChange={handleInput}
                      value={inputs.email}
                    />
                  </div>
                  <div className="model-group">
                    <input
                      type="text"
                      name="password"
                      className="model-input"
                      placeholder="Password"
                      onChange={handleInput}
                      value={inputs.password}
                    />
                  </div>
                  <div className="model-group">
                    <input
                      type="submit"
                      value="Login"
                      className="btn btn-smart"
                    />
                  </div>
                  <div className="model-group">
                    <span onClick={formToggle}>Create an account</span>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
