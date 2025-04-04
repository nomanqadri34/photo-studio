import { useState, useEffect } from "react";
import "../styles/PopupCard.css";

function PopupCard() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-card">
            <button className="close-btn" onClick={() => setShowPopup(false)}>✖</button>
            <h2>📷 Capture Your Perfect Moments!</h2>
            <p>Book your professional photo session today and create lasting memories.</p>
            <button className="book-btn">Book Now</button>
          </div>
        </div>
      )}
    </>
  );
}

export default PopupCard;
