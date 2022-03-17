import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "./style.css";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l5aan6o",
        "template_fpbj17n",
        form.current,
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Ooops, something went wrong",
            text: error.text,
          });
        }
      );
  };

  return (
    <section className="contact-container" id="contact-us">
      <div className="contact-title-div">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-description">
          Interested in learning more?
          <br />
          Booking questions?
          <br />
        </p>
      </div>
      <div className="contact-form-div">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label className="contact-label">Name</label>
          <input className="contact-input" type="text" name="name" />
          <label className="contact-label">Email</label>
          <input className="contact-input" type="email" name="email" />
          <label className="contact-label">Message</label>
          <textarea className="contact-text" name="message" />
          <input
            className="contact-submit"
            type="submit"
            value="Send"
            disabled
          />
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
