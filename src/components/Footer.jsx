import React from "react";

export default function Footer() {
  return (

    <footer className="bg-dark text-white text-center text-lg-start">
  {/* Grid container */}
  <div className="container p-4">
    {/*Grid row*/}
    <div className="row">
      {/*Grid column*/}
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0 ">
        <h4>Connect with me</h4>
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="fab fa-facebook-f"></i
          ></a>

          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="fab fa-twitter"></i
          ></a>

          
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="fab fa-linkedin-in"></i
          ></a>

          <a class="btn btn-outline-light btn-floating m-1" href="https://cptabhi.vercel.app" role="button"
          ><i class="fab fa-github"></i
          ></a>


      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        
        <h4 className="text-center pt-4">
          Made By Abhishek Kumar Tiwari
        </h4>
      </div>
      {/*Grid column*/}
    </div>
    {/*Grid row*/}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  <div
    className="text-center p-3"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
  >
    © 2023 Copyright: <br />
    <a className="text-blue" href="https://cptabhi.vercel.app">
      My Portfolio
    </a>
  </div>
  {/* Copyright */}
</footer>

  );
}
