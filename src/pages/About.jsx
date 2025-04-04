import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      {/* ✅ Welcome Section with Background Image */}
      <header className="welcome-section">
        <h1>Welcome to Our Studio</h1>
        <p>Capturing moments, creating lifelong memories.</p>
      </header>

      {/* ✅ Our Journey */}
      <section className="journey">
        <h2>Our Journey</h2>
        <p>
          Founded in 2010, our studio has been dedicated to providing exceptional 
          photography services, capturing the essence of every moment.
        </p>
        <img src="/images/journey.jpg" alt="Our Journey" />
      </section>

      {/* ✅ Our Founder's Vision */}
      <section className="vision">
        <h2>Our Founder's Vision</h2>
        <p>
          "Our mission is to bring your stories to life through the lens. 
          Every photo should tell a unique and powerful story." - John Doe, Founder
        </p>
        <img src="/images/founder.jpg" alt="Founder's Vision" />
      </section>

      {/* ✅ Who We Are */}
      <section className="who-we-are">
        <h2>Who We Are</h2>
        <p>
          A team of passionate photographers and creative minds committed to delivering 
          high-quality visuals tailored to your needs.
        </p>
      </section>

      {/* ✅ Why Us? */}
      <section className="why-us">
        <h2>Why Choose Us?</h2>
        <div className="why-us-content">
          <img src="/images/why-us.jpg" alt="Why Choose Us?" />
          <ul>
            <li>✅ Professional and experienced photographers</li>
            <li>✅ High-quality images with creative vision</li>
            <li>✅ Affordable and customizable packages</li>
            <li>✅ 100% client satisfaction guarantee</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
