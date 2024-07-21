import emailjs from "@emailjs/browser";
import React, { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7hn04hj",
        "template_u76eg7s",
        form.current,
        "YXOxOlbrGUvWDY95t"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact">
      <div className="section-header">
        <span className="section-title">/ contact</span>
      </div>
      <div className="contact-form-header">
        <h2>
          Feel free to send me an email!{" "}
          <span className="contact-form-header-email">
            debojeetdam.business@gmail.com
          </span>
        </h2>
      </div>
      <div className="contact-form-container">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" required />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" required />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
