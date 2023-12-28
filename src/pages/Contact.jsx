import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/contact.css";
import "../styles/home.css";
import axios from "axios";
import github from "../Images/icons/github.png";
import linkedin from "../Images/icons/linkedin.png";
import mail from "../Images/icons/mail.png";
import twitter from "../Images/icons/twitter.png";
import { Link } from "react-router-dom";

// all social media links...

const gmail = "tiwarisuraj0852@gmail.com";
const linkedIn = "https://www.linkedin.com/in/cptabhi/";
const gitHub = "https://github.com/Suraj-tiwari973";
const twitterLink = "https://twitter.com/SurajTi36172244";


export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)

    const res = await axios.post("/contact", { name, email, message });

    console.log(res);

    // Clear form fields
    setName("");
    setEmail("");
    setMessage("");
  };


  return (
    <>
      <Navbar />

      <div class="row ">
        <div class="col-md-6">
          <div class="my-5 p-3 contact--details">
            <h3 className="text-center fw-bold text-primary" style={{textDecoration:"underline"}}>Connect with me</h3>
            <div className="contact--btn my-5">
                <div className="mail--container">
                  <img src={mail} alt="..."/>
                  <button onClick={()=>{window.location.href = 'mailto:tiwarisuraj0852@gmail.com;'}}>
                    Gmail
                  </button>
                </div>
                <div className="linkedin--container">
                  <img src={linkedin} alt="..."/>
                  <button onClick={()=>{window.location.href='https://www.linkedin.com/in/cptabhi/'}}>
                    LinkedIn
                  </button>
                </div>
                <div className="github--container">
                  <img src={github} alt="..." backgroundColor="white"/>
                  <button onClick={()=>{window.location.href='https://github.com/Suraj-tiwari973'}}>
                    GitHub
                  </button>
                </div>
                <div className="twitter--container">
                  <img src={twitter} alt="..."/>
                  <button onClick={()=>{window.location.href='https://twitter.com/SurajTi36172244'}}>
                    Twitter
                  </button>
                </div>
            </div>
          </div>
        </div>

      {/* form container */}
      
        <div class="col-md-6 h-100">
          <div class="my-5 p-3 form--container">
            <h3 className="text-center fw-bold text-primary" style={{textDecoration:"underline"}}>Fill this form</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  required
                  rows={5}
                />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <div className="root">
        <div className="form">
          <div className="contact-container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e)=>{setName(e.target.value)}}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e)=>{setMessage(e.target.value)}}
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
}
