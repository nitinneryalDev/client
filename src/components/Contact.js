import React, { useEffect, useState } from "react";

function Contact() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const userContact = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userContact();
  }, []);

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // send the data to the backend

  const contactForm = async (e) => {
    e.preventDefault(); 

    const { name, email, phone, message } = userData;
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });
    console.log( "the response data",await res.json())
    const data = await res.json();


    if (!data) {
      console.log("message not send ");
    } else {
      alert("Message Send");
      setUserData({ ...userData, message: "" });
    }
  };

  return (
    <>
      <div className="row p-5">
        <div className="col-sm-4">
          <div className="card" style={{ borderRadius: "10px" }}>
            <div className="card-body">
              <h5 className="card-title">Phone</h5>
              <p className="card-text">{userData.phone}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card" style={{ borderRadius: "10px" }}>
            <div className="card-body">
              <h5 className="card-title">Email</h5>
              <p className="card-text">{userData.email}</p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card" style={{ borderRadius: "10px" }}>
            <div className="card-body">
              <h5 className="card-title">Address</h5>
              <p className="card-text">Shimla , Himachal Pradesh</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-xl-7">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <h3 className="mb-4">Contact Us</h3>

                <form method="POST">
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row mb-4">
                    <div className="col">
                      <div data-mdb-input-init className="form-outline">
                        <h6 className="mb-0 mb-2 me-4">First name: </h6>
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          value={userData.name}
                          onChange={handleInputs}
                          name="name"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email input */}
                  <div data-mdb-input-init className="form-outline mb-4">
                    <h6 className="mb-0 mb-2 me-4">Email address: </h6>
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                      value={userData.email}
                      onChange={handleInputs}
                      name="email"
                    />
                  </div>

                  {/* Phone input */}
                  <div data-mdb-input-init className="form-outline mb-4">
                    <h6 className="mb-0 mb-2 me-4">Phone number: </h6>
                    <input
                      type="phone"
                      id="phone"
                      className="form-control"
                      value={userData.phone}
                      onChange={handleInputs}
                      name="phone"
                    />
                  </div>

                  {/* Password input */}
                  <div data-mdb-input-init className="form-outline mb-4">
                    <h6 className="mb-0 mb-2 me-4">text: </h6>
                    <textarea
                      type="password"
                      id="message"
                      className="form-control"
                      cols="10"
                      rows="10"
                      placeholder="message"
                      onChange={handleInputs}
                      value={userData.message}
                      name="message"
                    />
                  </div>

                  {/* Checkbox */}
                  <div className="form-check d-flex justify-content-center mb-4">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example33"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="form2Example33"
                    >
                      Subscribe to our newsletter
                    </label>
                  </div>

                  {/* Submit button */}
                  <div className="d-flex jusify-center align-center">
                    <button
                      data-mdb-ripple-init
                      type="button"
                      className="btn mx-auto btn-dark btn-block mb-4"
                      onClick={contactForm}
                    >
                      Connect
                    </button>
                  </div>
                  {/* Register buttons */}
                  <div className="text-center">
                    <p>or connect with us:</p>
                    <button
                      data-mdb-ripple-init
                      type="button"
                      className="btn btn-secondary btn-floating mx-1"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </button>

                    <button
                      data-mdb-ripple-init
                      type="button"
                      className="btn btn-secondary btn-floating mx-1"
                    >
                      <i className="fab fa-google"></i>
                    </button>

                    <button
                      data-mdb-ripple-init
                      type="button"
                      className="btn btn-secondary btn-floating mx-1"
                    >
                      <i className="fab fa-twitter"></i>
                    </button>

                    <button
                      data-mdb-ripple-init
                      type="button"
                      className="btn btn-secondary btn-floating mx-1"
                    >
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
