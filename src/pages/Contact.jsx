import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/contact.css";
import "../styles/home.css";
import axios from "axios";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)

    const res = await axios.post('/contact', { name, email, message });

    console.log(res);


    // Clear form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
    <Navbar/>
      <div className="root">
        <div className="details"></div>

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
      </div>
    </>
  );
}
