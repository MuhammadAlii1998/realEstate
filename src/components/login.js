import React from "react";
import { Link } from "react-router-dom";

const login = () => {
  const alertForgetPass = () => {
    alert("Will be added, Test version");
  };
  return (
    <div>
      <div class="wrapper lightshowDown">
        <div id="formContent">
          <div class="lightshow first">
            <img
              className="rounded p-4"
              src="https://media.istockphoto.com/photos/home-with-blue-siding-and-stone-faade-on-base-of-home-picture-id1272128530?b=1&k=20&m=1272128530&s=170667a&w=0&h=k9lT5-DEmkmehDb-EKRHoP1-op2DTgz4ibiWGXmj7h8="
              id="icon"
              alt="User Icon"
            />
          </div>

          <form>
            <input
              type="text"
              id="login"
              class="lightshow second"
              name="login"
              placeholder="Login"
            />
            <input
              type="password"
              id="password"
              class="lightshow third"
              name="login"
              placeholder="Password"
            />
            <Link to="/catalogue">
              <input type="submit" class="lightshow fourth" value="Log In" />
            </Link>
          </form>

          <div id="formFooter">
            <button
              class="btn underlineHover Restpass"
              onClick={alertForgetPass}
            >
              Forgot Password?
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/signup">
              <button class="btn btn-outline-success">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
