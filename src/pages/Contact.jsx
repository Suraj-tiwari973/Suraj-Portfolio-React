
import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/contact.css";

export default function Contact() {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

    const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      if (!validateEmail(email)) {
      return false;
    }
    console.log("Submitted");
  };



  return (
    <div className="outer-box">
      <div className="container inner-box">
        <Navbar />
        <div class="row">

          <div className="col-12 col-lg-5  image-box">
            <div className="contact-data">
              <h3 style={{color:"white"}}>Email me</h3>
              <p style={{color:"green"}}>tiwarisuraj0852@gmail.com</p>
              <h3 style={{color:"white"}}>Mobile No</h3>
              <p style={{color:"green"}}>8127357060</p>
              <h3 style={{color:"white"}}>Social Media</h3>
              <p><a href="https://www.linkedin.com/in/cptabhi">LinkedIn Profile</a></p>
              <p><a href="https://twitter.com/SurajTi36172244">Twitter</a></p>

            </div>
          </div>

        {/*  This is from section...*/}
          <div className="col-12 col-lg-7 form-box">
            <h3 style={{color:"white",textAlign:"center",marginTop:"0.5em"}}>Leave your message</h3>

            <form onSubmit={handleSubmit} className="form">
                  
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name*"
                  className="form-field"
                  required
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email*"
                  className="form-field"
                  required
                />

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Moblile No*"
                  className="form-field"
                  required
                />

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Leave Your Message*"
                  className="text-area"
                  required

                ></textarea>

              <button type="submit" className="contact-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
