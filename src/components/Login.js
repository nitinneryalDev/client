import React ,{useContext, useState}  from "react";
import { NavLink , useNavigate } from "react-router-dom";

import { UserContext } from "../App";

function Login() {

const { state , dispatch } = useContext(UserContext)


  const navigate  = useNavigate();

const [email , setEmail] = useState('');
const [password , setPassword] = useState('')


const loginUser = async(e) => {
  e.preventDefault()

const res = await  fetch("/signin"  , {
  method:"POST" ,
  headers: {
    "Content-Type":"application/json"
  },
  body:JSON.stringify(
    {email , password}
  )
}  )
console.log( "coming from the login page" , res)
const data = res.json();

if(res.status === 400 || !data ) {
  window.alert("Invalid Credentials")
}else {
  dispatch({type:'USER' , payload:true})
  window.alert("Login Successfull")
  navigate("/")
}}

  return (
    <>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center align-items-center ">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <h3 className="mb-5 text-center text-uppercase">  Sign in</h3>
                    <form method="POST"  className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <h6 className="mb-0 mb-2 me-4">Your Email: </h6>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)  }
                            id="form3Example3c"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                        <h6 className="mb-0 mb-2 me-4">Your Password: </h6>
                          <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)  }
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                          />
                        </div>
                        </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          onClick={loginUser}
                          className="btn btn-dark btn-lg" >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex flex-column align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample"
                    />
                   <NavLink to="/Signup" className="signup-image-link mx-auto text-center"  >Create An Account</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
