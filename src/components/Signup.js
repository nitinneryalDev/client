import React , { useState } from "react";

import regImg from "../images/registration.svg";
import { NavLink , useNavigate } from "react-router-dom";

function Signup() {

const navigate  = useNavigate();
  const [user , setUser] = useState({

  name:"", email:"", phone:"" , work:"" , password:"", cpassword:""

  })

let name , value ;

  const handleInputs = (e) => {
    console.log(e)
    name = e.target.name;
    value = e.target.value;
  

setUser({...user , [name]:value});

  
  }

  const postData = async (e) => {

    e.preventDefault();

    const { name , email , phone , work , password , cpassword } = user;
    
    const res =  await fetch("/register" , {
      method:"POST",
      headers: {
       "Content-Type":"application/json"
      }, 
      body:JSON.stringify({
        name , email , phone , work , password , cpassword 
      })

    }  )

    const data = await res.json()

    if(data.status === 422 || !data ) {
      window.alert("Invalid Registration")
      console.log("Invalid Registration")
    } else {
      window.alert("sucessfull Registration")
      console.log("sucessfull Registration")

     navigate("/login")
    }
      
  }


  return (
    <>
      <div className="container py-5 h-100">
        <form  method="POST"   className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none flex-column d-xl-flex">
                  <img
                    src={regImg}
                    alt="Sample"
                    className="img-fluid"
                    style={{
                      borderTopLeftRadius: ".25rem",
                      borderBottomLeftRadius: ".25rem",
                    }}
                  />
                  <NavLink to="/login" className="signup-image-link mx-auto"  >I am already Registered</NavLink>
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase">Registration Form</h3>

                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <h6 className="mb-0 mb-2 me-4">Your Name: </h6>
                        <div className="form-outline">
                          <input
                            type="text"
                            name="name"
                            value={user.name}
                            onChange={handleInputs}
                            id="form3Example1m"
                            className="form-control form-control-lg"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <h6 className="mb-0 mb-2 me-4">Your Email: </h6>
                        <div className="form-outline">
                          <input
                            type="email"
                            name="email"
                            onChange={handleInputs}
                            value={user.email}
                            id="form3Example1m1"
                            className="form-control form-control-lg"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <h6 className="mb-0 mb-2 me-4">Mobile No: </h6>

                      <input
                        type="number"
                        value={user.phone}
                        name="phone"
                        onChange={handleInputs}
                        id="form3Example8"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <h6 className="mb-0 mb-2 me-4">Your Profession: </h6>
                      <input
                        type="text"
                        id="work"
                        onChange={handleInputs}
                        value={user.work}
                        name="work"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <h6 className="mb-0 mb-2 me-4">Password: </h6>

                      <input
                        type="password"
                        value={user.password}
                        onChange={handleInputs}
                        name="password"
                        id="password"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <h6 className="mb-0 mb-2 me-4">Confirm Password: </h6>
                      <input
                        type="password"
                        name="cpassword"
                        value={user.cpassword}
                        onChange={handleInputs}
                        id="cpassword"
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="d-flex justify-content-end pt-3">
                      {/* <button type="button" className="btn btn-light btn-lg">
                        Reset All
                      </button> */}
                      <input
                        type="submit"
                        name="signup"
                        onClick={postData}
                        id="signup"
                        className="btn btn-dark btn-lg ms-2 form-submit"
                        value="Register"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
