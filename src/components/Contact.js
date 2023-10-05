import React, { Component } from "react";
import emailjs from "emailjs-com";
import * as EmailValidator from "email-validator";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: {},
    };
  }

  render() {
    const about = this.props.about[0];

    //based on below form, give me email js intergration code
    function sendEmail(e) {
      e.preventDefault();
      const from_name = document.getElementById("name").value;
      const from_email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      //if any of the fields are empty, alert the user to fill out all fields
      if (!from_name || !from_email || !subject || !message) {
        alert("Please fill out all fields.");
        return;
      }

      //if the email is not valid, alert the user to enter a valid email
      if (!EmailValidator.validate(from_email)) {
        alert("Please enter a valid email.");
        return;
      }

      var templateParams = {
        from_name: from_name,
        from_email: from_email,
        subject: subject,
        message: message,
      };

      emailjs
        .send(
          "service_v13xzfv",
          "template_6tvto51",
          templateParams,
          "9gZrbZ7p3rz8JKBri"
        )
        .then(
          (result) => {
            alert("Your message has been sent. Thank you!");
            document.getElementById("contact-form").reset();
          },
          (error) => {
            alert("Sorry, something went wrong. Please try again later.");
          }
        );
    }

    return (
      <div id="contactForm">
        <div className="col-md-12 mx-auto">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span className="text-black" style={{ textAlign: "center" }}>
                Contact
              </span>
            </h1>
          </div>
        </div>
        <p className="text-center w-responsive mx-auto mb-5 h3">
          Let's get in touch!
        </p>

        <div className="row">
          <div className="col-md-9 mb-md-0 mb-5">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />
                    <label htmlFor="name" className="">
                      Your name
                    </label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                    <label htmlFor="email" className="">
                      Your email
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                    />
                    <label htmlFor="subject" className="">
                      Subject
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="5"
                      className="form-control md-textarea"
                    ></textarea>
                    <label htmlFor="message">Your message</label>
                  </div>
                </div>
              </div>
            </form>

            <div className="text-center text-md-left">
              <button className="btn btn-primary" onClick={sendEmail}>
                Send
              </button>
            </div>
            <div className="status"></div>
          </div>
          <div className="col-md-3 text-center condet">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fas fa-map-marker-alt fa-3x"></i>
                <p className="contact-detail">{about.address}</p>
              </li>

              <li>
                <i className="fas fa-phone mt-4 fa-3x"></i>
                <p className="contact-detail">
                  {about.phone.map((phone) => (
                    <span key={phone}>+{phone}, </span>
                  ))}
                </p>
              </li>

              <li>
                <i className="fas fa-envelope mt-4 fa-3x"></i>
                <p className="contact-detail">{about.email}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
