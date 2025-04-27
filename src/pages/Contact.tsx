import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const mailtoLink = `mailto:mgathoni.gathoni9@gmail.com?subject=New Message from ${formData.name}&body=${formData.message}%0AFrom: ${formData.email}`;
  //   window.location.href = mailtoLink;
  // };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2>Get in Touch</h2>
        <div className="contact-grid">
          {/* Left Side: Social Links */}
          <div className="contact-info">
            <p>Looking to hire or collaborate? </p>
            <p>Let’s build something amazing together!</p>
            <ul className="contact-links">
              <li>
                <a href="mailto:mgathoni.gathoni9@gmail.com">
                  <FaEnvelope className="icon" /> Email Me
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/margaret-gathoni/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="icon" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/dynasty-29" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="icon" /> GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Right Side: Message Form */}
          <form 
            className="contact-form" 
            action="https://formsubmit.co/mgathoni.gathoni9@gmail.com" 
            method="POST"
          >
            <h3 className="form-title">Send me a Message</h3>

            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New message from your Portfolio Website" />

            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required 
            />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              required 
              rows={5}
            ></textarea>

            <button type="submit" className="contact-button">Send Message</button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
