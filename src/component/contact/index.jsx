import React, { useRef, useState } from "react";
import { Animate } from "react-simple-animate";
import emailjs from "emailjs-com";
import "./styles.scss";

const ContactUs = () => {
  const form = useRef();
  const [message, setMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "serviceid",
        "template-id",
        form.current,
        "public-key"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          setMessage("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form className="contact__content__form" ref={form} onSubmit={sendEmail}>
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="user_name"
                  className="inputName"
                  type={"text"}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="user_email"
                  className="inputEmail"
                  type={"text"}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="message"
                  className="inputDescription"
                  type={"text"}
                  rows="5"
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button type="submit">Submit</button>
            {message && <p className="message">{message}</p>}
          </form>
        </Animate>
      </div>
    </section>
  );
};

export default ContactUs;
