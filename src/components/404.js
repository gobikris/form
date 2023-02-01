import React from 'react'
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <div>
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-lg-9 col-md-4 col-12 mt-3">
                    <Link to="/signin">
                        <img className='img-fluid' src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="" />
                        </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Error404