import React from "react";
import { useState } from "react";
import "./Instagram.css";
const Instagram = () => {
  let [login, setLogin] = useState(true);
  const switchLogin = () => {
    setLogin(!login);
  };
  return (
    <>
      <div id="container">
        <div id="user">
          <input
            hidden={login}
            type="text"
            name="text"
            placeholder="Mobile Number or Email"
            id=""
          />{" "}
          <br />
          <input
            hidden={login}
            type="text"
            name=""
            placeholder="Full Name"
            id=""
          />{" "}
          <br />
          <input
            type="text"
            name=""
            placeholder="phone number ,username,or email"
            id=""
          />{" "}
          <br />
          <input type="password" name="password" id="" placeholder="Password" />
          <br />
          <button>{login ? "Sign -in" : "Sign-up"}</button> <br />
          <div id="footer">
          {" "}
          <br />
          {login ? "dont have an Account" : "Have an Account"}{" "}
          <span onClick={switchLogin}>{login ? "Sign up" : "login"}</span>
        </div>
        </div>

       
      </div>
    </>
  );
};

export default Instagram;
