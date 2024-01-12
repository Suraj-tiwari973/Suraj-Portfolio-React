import { useState } from "react";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/contact.css";
import "../styles/home.css";
import axios from "axios";
import github from "../Images/icons/github.png";
import linkedin from "../Images/icons/linkedin.png";
import mail from "../Images/icons/mail.png";
import twitter from "../Images/icons/twitter.png";
import { Link,useNavigate} from "react-router-dom";


export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    
    const uri = process.env.REACT_APP_API_URI || process.env.REACT_APP_API_URL;

    try {
      // Make a POST request to the backend API
      const response = await axios.post(
        uri + "/contact", // Update the URL with the correct port
        { name, email, message }, // Include any additional fields as needed
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Log the response from the server
      console.log(response.data);
      toast.success(response.data.message);

      // navigate to home page..
      setTimeout(()=>{ 
        navigate('/');
      },6000)

      // Clear form fields
      setName("");
      setEmail("");
      setMessage("");

    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Internal Server Error.");
    }
  };

  return (
    <>
      <Navbar />

      <div class="row ">
        <div class="col-md-6">
          <div class="my-5 p-3 contact--details">
            <h3
              className="text-center fw-bold text-primary"
              style={{ textDecoration: "underline" }}
            >
              Connect with me
            </h3>
            <div className="contact--btn my-5">
              <div className="mail--container">
                <img src={mail} alt="..." />
                <button
                  onClick={() => {
                    window.location.href = "mailto:tiwarisuraj0852@gmail.com;";
                  }}
                >
                  Gmail
                </button>
              </div>
              <div className="linkedin--container">
                <img src={linkedin} alt="..." />
                <button
                  onClick={() => {
                    window.location.href =
                      "https://www.linkedin.com/in/cptabhi/";
                  }}
                >
                  LinkedIn
                </button>
              </div>
              <div className="github--container">
                <img src={github} alt="..." backgroundColor="white" />
                <button
                  onClick={() => {
                    window.location.href = "https://github.com/Suraj-tiwari973";
                  }}
                >
                  GitHub
                </button>
              </div>
              <div className="twitter--container">
                <img src={twitter} alt="..." />
                <button
                  onClick={() => {
                    window.location.href =
                      "https://twitter.com/SurajTi36172244";
                  }}
                >
                  Twitter
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* form container */}

        
        <div class="col-md-6 h-100">
          <div class="my-5 p-3 form--container">
            <h3
              className="text-center fw-bold text-primary"
              style={{ textDecoration: "underline" }}
            >
              Send your message
            </h3>
            <form onSubmit={handleSubmit} className="my-3">
              <div>
                <label htmlFor="name">Your Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Your Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Your Message:</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Type yor message..."
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  required
                  rows={5}
                  maxLength={1000}
                />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}
