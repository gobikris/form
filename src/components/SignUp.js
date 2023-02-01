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
        <div className="row justify-content-center mt-5 ">
          <div className="col-lg-4 col-md-8 col-12 mt-4">
            <div className="d-flex flex-column justify-content-center mt-5 p-4 shadow-lg bg-white rounded-2  ">
              <form action="" onSubmit={handleSubmit}>
                <div className="d-flex flex-column gap-4">
                  <img
                    className="img-fluid  mx-auto"
                    style={{ width: "8rem" }}
                    src="https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif"
                    alt=""
                  />
                  
                  {/* fullname */}
                  <input
                    className="form-control p-2 "
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                    onChange={(e) =>
                      handleChange(e.target.value, e.target.name)
                    }
                  />

                  {/* email */}
                  <input
                    className="form-control p-2"
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
                    onChange={(e) =>
                      handleChange(e.target.value, e.target.name)
                    }
                  />
                  {/* password */}
                  <input
                    className="form-control p-2"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) =>
                      handleChange(e.target.value, e.target.name)
                    }
                  />
                 
                  {/* button */}

                  <button type="submit" className="btn btn-danger fw-bold">
                    Sign Up
                  </button>
                  {/* sign in link */}
                  <Link className="text-end text-decoration-none" to="/">
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
