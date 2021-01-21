import React from "react";
import { NavLink } from "react-router-dom";
import { ContextProvider } from "../../Hero/Context";
import "./Routernavbar.css";
export default function RouteNavbar() {
  const { model, openModel, user, loading, logout } = React.useContext(
    ContextProvider
  );
  console.log("model", model);
  const openForms = () => {
    openModel();
  };
  const userLogout = () => {
    logout();
  };
  const checkUser = () => {
    return !loading ? (
      !loading && user ? (
        <li>
          {user.displayName} / <span onClick={userLogout}>Logout</span>{" "}
        </li>
      ) : (
        <NavLink to="/" onClick={openForms}>
          Register/Login
        </NavLink>
      )
    ) : (
      "..."
    );
  };
  return (
    <div className="nav-wrapper">
      <div className="nav-container">
        <NavLink className="nav-logo" to="/">
          FriendImages
        </NavLink>
        <div className="space-between-empty">
          <input
            className="search"
            placeholder="&#61447; Search "
            type="text"
          />
        </div>
        <ul className="navigation">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Settings">Settings</NavLink>
          </li>
          <li className="AccountDisplay">{checkUser()}</li>
        </ul>
      </div>
    </div>
  );
}
