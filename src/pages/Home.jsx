import React from 'react'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="outer-box">
            <div className="container inner-box">
            <Navbar/>
            <div className="row">
              <div className="col-12 col-lg-5 column1 img-parent">
                  <img src="../suraj 1.jpg" alt='Not found' className='img'/>
                  <h3 style={{color:"blue"}}>MERN Stack Developer</h3>
              </div>


              <div className="col-12 col-lg-7 column2">
                <div className='data'>
                  <h6>Hello</h6>
                  <h2>I'm <font style={{color:"blue"}}>Abhishek</font> Kumar <font style={{color:"red"}}>Tiwari</font></h2>
                  <p>I am presuing Batchlor of Technology (B-TECH) in Computer Science from <strong>United College of Engineering and Research, Prayagraj.</strong></p>

                  <p>I have done my schooling from <strong>MAHARISHI VIDYA MANDIR</strong> Prayagraj. I had scored '91%' in my high school and '71%' in Intermediate. </p>

                  <p>I am a certified <strong>(IBM)</strong> Full Stack developer (MERN). I have the good knowledge of Data Structures and Algorithms and Object oriented programing languages like JAVA and PYTHON, also I have acheived <strong>three stars ✨✨✨ </strong>in problem solving on Hacker Rank and also I have done the internship in Machine Learning from TCR INNOVATION.</p>

                  <p>I have been the Campus ambassador of <strong>"TCR INNOVATION".</strong> I am a person with good communication skills and having the good leadership quality.</p>

                  <a href="https://drive.google.com/file/d/1VNqPcpkQ6pCjLPNovZkPTQL00yMsIxJo/view?usp=sharing" class="btn btn-primary">Resume</a>
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}
