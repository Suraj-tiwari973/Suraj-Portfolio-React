import React from "react";
import Navbar from "../components/Navbar";
import "../styles/achievement.css";
import Cards from "../components/Cards";
import Cloud from "../Images/Cloud.jpg";
import Git from "../Images/Git.jpg";
import IBM from "../Images/IBM Project Certificate.jpg";
import TCR from "../Images/TCR_certificate.png";
import NCC from "../Images/NCC.jpg";
import Tcr_Campus from "../Images/Tcr_Campus.jpg";
import Ibm_FSD from "../Images/IBM_FSD.jpg";
import Deepalgo from "../Images/Deepalgo_intern.jpg";
import Java_HackerRank from "../Images/Java_HackerRank.jpg";
import Intership_Offer from "../Images/Internship_Offer.jpg";

export default function Acheivements() {
  return (
    <>
      <Navbar />
      <div>
        <div className="heading py-3">
          <h2 className="text-center text-decoration-underline font-weight-bold text-primary">
            My Acheivements
          </h2>
        </div>
        <div className="card--container">
          <div class="row ">
            <div class="col-md-6 d-flex align-items-center justify-content-center">
              <div class="my-4 p-3 bg-light rounded">
                <Cards
                  image={Deepalgo}
                  link={
                    "https://drive.google.com/file/d/1ZwOdzs53Hd8rMxruLRFScD1rgtyAPg1o/view?usp=drive_link"
                  }
                  text="I did an internship in Deepalgorithms Solutions located in Hyderabad. I worked here as a React JS developer where i was working on developing the UI which was real-time projects in the company."
                />
              </div>
            </div>

            <div class="col-md-6 d-flex align-items-center justify-content-center">
              <div class="my-4 p-3 bg-light rounded">
                <Cards
                  image={Git}
                  link={
                    "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI3NTgiLCJjZXJ0aWZpY2F0ZV91cmwiOiJodHRwczpcL1wvY2VydGlmaWNhdGVzLnNpbXBsaWNkbi5uZXRcL3NoYXJlXC90aHVtYl80MTY5MzEyXzE2NzY2NDExMjUucG5nIiwidXNlcm5hbWUiOiJBYmhpc2hlayBLdW1hciBUaXdhcmkifQ&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2Fthumb_4169312_1676641125.png&_branch_match_id=1267050158364159430&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1ncJzjSPKApwKa1IAgC6CNwMIwAAAA%3D%3D"
                  }
                  text="I did the training from SkillUp in Fundamentals of Git and successfully completed that course and got a certification after qualifying all the tests."
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 d-flex align-items-center justify-content-center">
              <div class="my-4 p-3 bg-light rounded">
                <Cards
                  image={IBM}
                  link={
                    "https://drive.google.com/file/d/1F693OVpMUzSD0fNyZQYazb6zqMv2oPL0/view?usp=drive_link"
                  }
                  text="I did the training in Full Stack Developemt using JavaScript from IBM where i learned the MERN stack technology and made an E-Challan Project based on that."
                />
              </div>
            </div>

            <div class="col-md-6 d-flex align-items-center justify-content-center">
              <div class="my-4 p-3 bg-light rounded">
                <Cards
                  image={TCR}
                  link={
                    "https://drive.google.com/file/d/1yIneVVWzTgToKLtrvelOORrY4Ke-eOqz/view?usp=drive_link"
                  }
                  text="I did an internship at TCR Innovation in Data Science and Machine Learning with Python. I did a project also which was about predicting the Botson house prices on given dataset."
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 d-flex align-items-center justify-content-center">
              <div class="my-4 p-3 bg-light rounded">
                <Cards
                  image={NCC}
                  link={
                    "https://drive.google.com/file/d/1MxSwZDUMFJQ5fOgO6EarRIznMQWdyKba/view?usp=drive_link"
                  }
                  text="I did NCC as an extra curicullar activity from 16 UP BN NCC Allahabad and succesfully qualified the 'C' certification examination with 'A' grade."
                />
              </div>
            </div>

            <div class="col-md-6 d-flex align-items-center justify-content-center">
              <div class="my-4 p-3 bg-light rounded">
                <Cards
                  image={Cloud}
                  link={
                    "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNTExIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvdGh1bWJfNDE3NDMyMV8xNjc2ODE0MTMwLnBuZyIsInVzZXJuYW1lIjoiQWJoaXNoZWsgS3VtYXIgVGl3YXJpIn0&utm_source=shared-certificate&utm_medium=app_lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Fcertificates.simplicdn.net%2Fshare%2Fthumb_4174321_1676814130.png&_branch_match_id=1267050158364159430&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1g93NPHITPaNqqhIAgCsQQ4IIwAAAA%3D%3D"
                  }
                  text="I did the training from SkillUp in Fundamentals of Git and successfully completed that course and got a certification after qualifying all the tests."
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 d-flex align-items-center justify-content-center">
              <div class="my-4 p-3 bg-light rounded">
                <Cards
                  image={Ibm_FSD}
                  link={
                    "https://drive.google.com/file/d/1aHcpMuMMAnrX0paEl4kEOB0EKJrQTjzN/view?usp=drive_link"
                  }
                  text="I did the training in Full Stack Developemt using JavaScript from IBM where i learned the MERN stack technology and made an E-Challan Project based on that."
                />
              </div>
            </div>

            <div class="col-md-6 d-flex align-items-center justify-content-center">
              <div class="my-4 p-3 bg-light rounded">
                <Cards
                  image={Tcr_Campus}
                  link={
                    "https://drive.google.com/file/d/1vs0a4La_sk_Ckqw3mlwB3T-l_bZ5fuO-/view?usp=drive_link"
                  }
                  text="I worked as Campus Ambassoder of TCR Innovation in my college where i involved in the promotion of the courses offered by the company by taking the sessions of the juniors and collegues."
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 d-flex align-items-center justify-content-center">
              <div class="my-4 p-3 bg-light rounded">
                <Cards
                  image={Java_HackerRank}
                  link={"https://www.hackerrank.com/certificates/3d8bd2113471"}
                  text="I learned the Basics of Java form United College of Enginnering and Research and also learned it from Hacker Rank and succesfully passed the certification examination on Hacker Rank."
                />
              </div>
            </div>
            <div class="col-md-6 d-flex align-items-center justify-content-center">
              <div class="my-4 p-3 bg-light rounded">
                <Cards
                  image={Intership_Offer}
                  link={
                    "https://drive.google.com/file/d/1nSesOzOaQ59xcGTTBIIz6md7fA0PwJpy/view?usp=drive_link"
                  }
                  text="I got my first Internship offer as React JS developer intern at Deepalgorithms Solutions which was for three months and i succesfully completed my internship from here."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
