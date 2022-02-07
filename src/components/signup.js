import React from "react";

const signup = () => {
  return (
    <div>
      <div className="wrapper lightshowDown">
        <div id="formContent">
          <div className="lightshow first">
            <img
              className="rounded p-4"
              src="https://media.istockphoto.com/photos/home-with-blue-siding-and-stone-faade-on-base-of-home-picture-id1272128530?b=1&k=20&m=1272128530&s=170667a&w=0&h=k9lT5-DEmkmehDb-EKRHoP1-op2DTgz4ibiWGXmj7h8="
              id="icon"
              alt="User Icon"
            />
          </div>

          <form>
            <h3>Create Account</h3>
            <input
              type="text"
              id="fName"
              className="lightshow second"
              name="fName"
              placeholder="First Name"
            />
            <input
              type="text"
              id="lastName"
              className="lightshow second"
              name="lastName"
              placeholder="Last Name"
            />
            <input
              type="text"
              id="Email"
              className="lightshow second"
              name="email"
              placeholder="Email"
            />
            <input
              type="password"
              id="password"
              className="lightshow third"
              name="pass"
              placeholder="Password"
            />
            <input type="submit" className="lightshow fourth" value="Sign Up" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default signup;
