import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp() {

  // user state
  const [user, setUser] = useState({});

  // userDetail
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
// getting user data
  const handleChange = (value, name) => {
    let data = { [name]: value };
    setUser({ ...user, ...data });
  };

  return (
    <div className="">
      <div className="container">
        <div className="row justify-content-center mt-4">
          <div className="col-lg-4 col-md-8 col-12">
            <div className="d-flex flex-column justify-content-center mt-3 p-3  shadow-lg bg-white rounded-2 h-100 ">
              <form action="" onSubmit={handleSubmit}>
                <div className="d-flex flex-column gap-4">
                  <img
                    className="img-fluid  mx-auto"
                    style={{ width: "8rem" }}
                    src="https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif"
                    alt=""
                  />
                  <div className="d-flex gap-3">
                    {/* firstname */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="firstname"
                      onChange={(e) =>
                        handleChange(e.target.value, e.target.name)
                      }
                    />
                    {/* lastname */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name="lastname"
                      onChange={(e) =>
                        handleChange(e.target.value, e.target.name)
                      }
                    />
                  </div>
                  {/* email */}
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
                    onChange={(e) =>
                      handleChange(e.target.value, e.target.name)
                    }
                  />
                  {/* password */}
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) =>
                      handleChange(e.target.value, e.target.name)
                    }
                  />
                  <div className="d-flex gap-3">
                    {/* phone no */}
                    <input
                      className="form-control"
                      type="number"
                      name="phoneno"
                      placeholder="Phone No"
                      onChange={(e) =>
                        handleChange(e.target.value, e.target.name)
                      }
                    />
                    {/* pincode */}
                    <input
                      className="form-control"
                      type="number"
                      name="pincode"
                      placeholder="Pincode"
                      onChange={(e) =>
                        handleChange(e.target.value, e.target.name)
                      }
                    />
                  </div>
                  {/* button */}

                  <button type="submit" className="btn btn-danger fw-bold">
                    Sign Up
                  </button>
                  {/* sign in link */}
                  <Link className="text-end text-decoration-none" to="/signin">
                    Are you Exisiting user ? Sign In
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
