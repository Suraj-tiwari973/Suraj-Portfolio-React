
import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/contact.css";
import axios from "axios";
import "../styles/home.css"

export default function Contact() {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const Submit = async(e)=>{
    e.preventDefault();
    try{
      await axios.post("http://localhost/3002",{
        name,
        email,
        phone,
        message

      });

    }
    catch(e){
      console.log(e);
    }
  }

  return (
    
      <div className="outer-box">
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
            <h3 style={{color:"white",textAlign:"center",marginTop:"1em"}}>Send the message</h3>

            <form className="form" action="POST" onSubmit={Submit}>
                  
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

              <button type="submit" className="contact-btn" >Send</button>
            </form>
          </div>
        </div>
      </div>
  
  );
}
