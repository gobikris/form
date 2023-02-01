import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function SignIn() {
  // login userstate
  const [log, setLog] = useState({});

  // userDetail in console
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(log);
  };
// getting data 
  const handleChange = (value, name) => {
    let data = { [name]: value };
    setLog({ ...log, ...data });
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center mt-4 align-items-center p-4">
          <div className="col-lg-4 col-md-3 col-12 ">
            <div className="d-flex flex-column justify-content-center mt-5 p-4 align-items-center shadow-lg bg-white rounded-2 h-100 ">
              <form action="" onSubmit={handleSubmit}>
                <div className="d-flex flex-column gap-4">
                  <img
                    className="img-fluid w-50 mx-auto"
                    src="https://cdn.dribbble.com/users/291221/screenshots/1425333/helper.gif"
                    alt=""
                  />

                  <input
                    className="form-control p-2"
                    type="email"
                    name="email"
                    placeholder="Username or Email Address"
                    onChange={(e) =>
                      handleChange(e.target.value, e.target.name)
                    }
                  />
                  <input
                    className="form-control p-2"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) =>
                      handleChange(e.target.value, e.target.name)
                    }
                  />
                  <button type="submit" className="btn btn-danger fw-bold">Sign In</button>

                  <Link className="text-decoration-none" to="/signup">
                    Don't have an account ?
                  </Link>

                  <div className="d-flex gap-3 justify-content-center">
                    <Link to="/404">
                      <i
                        class="bi bi-envelope-at text-danger"
                        style={{ fontSize: "26px" }}
                      ></i>
                    </Link>
                    <Link to="/404">
                      <i
                        class="bi bi-whatsapp text-success "
                        style={{ fontSize: "26px" }}
                      ></i>
                    </Link>
                    <Link to="/404">
                      <i
                        class="bi bi-facebook text-primary "
                        style={{ fontSize: "26px" }}
                      ></i>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
