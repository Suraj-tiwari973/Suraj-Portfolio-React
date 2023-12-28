import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import resume from "../Resume/final_resume.pdf";

export default function Home() {
  return (

    <>
      <Navbar/>
      <div className="container-fluid inner-box my-5">
      <div className="row">
      <div className="col-12 col-lg-5 column1 img-parent">
          <img src="../suraj 1.jpg" alt='...' className='img'/>
          <h3 className='text-primary'>Frontend Developer</h3>
      </div>


      <div className="col-12 col-lg-7 column2">
        <div className='data'>
          
          <h2>I'm <font style={{color:"blue"}}>Abhishek</font> Kumar <font style={{color:"red"}}>Tiwari</font></h2>
          <p>I am presuing Batchlor of Technology (B-TECH) in Computer Science from <strong>United College of Engineering and Research, Prayagraj.</strong></p>

          <p>I did my schooling from <strong>MAHARISHI VIDYA MANDIR</strong> Prayagraj. I had scored '91%' in my high school and '71%' in Intermediate. </p>

          <p>I am a certified <strong>(IBM)</strong> Full Stack developer (MERN). I have the good knowledge of Data Structures and Algorithms and Object oriented programing languages like JAVA and PYTHON, also I have acheived <strong>three stars ✨✨✨ </strong>in problem solving on Hacker Rank and also I have done the internship in Machine Learning from TCR INNOVATION.</p>

          <p>I have been the Campus ambassador of <strong>"TCR INNOVATION".</strong> I am a person with good communication skills and having the good leadership quality.</p>

          <div style={{display:'flex',justifyContent:"space-between"}}>
          <a href={resume} className="btn" target="_blank" rel='noopener noreferrer'>Resume</a>
          <Link className='btn' to={"/contact"}>Contact Me</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

// drive link of resume...
// https://drive.google.com/file/d/1XNCqs1XxpJ-JSd8cogmfKqNFJ45Vx9Fg/view?usp=drive_link
