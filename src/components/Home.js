import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";



function Home() {

  const [userName, setUserName] = useState(null);
  const [show , setShow] = useState(false);

  const homePage = async () => {
    try {
      const res = await fetch("/getData", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      
      setUserName(data.name);
      setShow(true)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    homePage();
  }, []);

  
  return (
    <>
        <div className="home_page bg-dark text-white position-relative" style={{ height: '100vh' }}>
      <div className="position-absolute top-0 start-0 p-4 fs-3">
        N.T.N
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center h-100">
        <h1 className="display-1 animate-top">MERN</h1>
        <h2 className="display-5" >Welcome {userName ? userName : "Guest"} </h2>
        <hr className="border-gray" style={{ width: '40%' }} />
        <p className="fs-4 text-center">
        <q>{show ? `A simple MERN project for fun` : `Hi Developers` }</q>
     
       <i> Nitin Neryal</i> 
   </p>
        <br></br>
      </div>
      <div className="position-absolute bottom-0 start-0 p-4">
        Powered by <NavLink href="https://www.w3schools.com/w3css/default.asp" target="_blank" rel="noopener noreferrer">N.T.N</NavLink>
      </div>
    </div>
    </>
  );
}

export default Home;
