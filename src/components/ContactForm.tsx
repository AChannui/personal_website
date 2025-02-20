// src/components/Contact.js
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center">Get in Touch</h2>
        <form className="mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
            </div>
          </div>
          <div className="form-group mt-3">
            <label>Message</label>
            <textarea className="form-control" rows={5} placeholder="Your Message"></textarea>
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;