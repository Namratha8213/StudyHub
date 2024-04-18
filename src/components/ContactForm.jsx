// ContactForm.js
import React from 'react';

function ContactForm() {
  return (
    <section className="contact" id="contact">
      <div className="form">
        <div className="container">
          <h2 className="heading">Get in Touch</h2>
          <form action="contact.php" method="post">
            <div className="row">
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="first-name" placeholder="First name" required />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="last-name" placeholder="Last name" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone-number">Phone Number</label>
                <input type="tel" id="phone-number" name="phone-number" placeholder="Phone number" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="submit-btn" id="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className="form_img">
        <img src="./images/contact.gif" alt="contact" />
      </div>
    </section>
  );
}

export default ContactForm;
