import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      {/* ✅ Contact Header with Professional Quote */}
      <header className="contact-header">
        <h1>Get in Touch</h1>
        <p>"Photography is the art of frozen time... the ability to store emotion and feelings within a frame." – Reach out to us to create your timeless memories.</p>
      </header>

      {/* ✅ Contact Form Section */}
      <section className="contact-form">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.</p>
        
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;

