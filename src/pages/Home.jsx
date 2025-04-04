import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <header className="hero-section">
        <h1>Welcome to Our Studio</h1>
        <p>Explore our services and photography work.</p>
        <button className="cta-button">Book a Session</button>
      </header>

      <section className="featured-gallery">
        <h2>Featured Photography</h2>
        <div className="gallery">
          <img src="/images/photo1.jpg" alt="Gallery 1" />
          <img src="/images/photo2.jpg" alt="Gallery 2" />
          <img src="/images/photo3.jpg" alt="Gallery 3" />
        </div>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Wedding Photography</li>
          <li>Portrait Sessions</li>
          <li>Event Coverage</li>
          <li>Commercial Shoots</li>
        </ul>
      </section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <blockquote>
          "Amazing photography! Truly captured our special moments." - Sarah K.
        </blockquote>
        <blockquote>
          "Professional and artistic—highly recommended!" - James P.
        </blockquote>
      </section>
    </div>
  );
}

export default Home;
