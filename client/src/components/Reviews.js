// Import React
import React from 'react';
// Add class
import '../assets/css/main.css';

function Reviews () {
  return (
    <section id="userReviews" className="wrapper style2">
      <div className="inner testimonials">
        <header className="align-center">
          <p className="special">Our Users Have Never Been Happier!</p>
          <h2>User Reviews!</h2>
        </header>
        <div className="gallery">
          <div className="cover-img">
            <div className="image fit">
              <a href="#"><img src="images/pic01.jpg" alt="" /></a>
            </div>
          </div>
          <div className="cover-img">
            <div className="image fit">
              <a href="#"><img src="images/pic03.jpg" alt="" /></a>
            </div>
          </div>
          <div className="cover-img">
            <div className="image fit">
              <a href="#"><img src="images/pic03.jpg" alt="" /></a>
            </div>
          </div>
          <div className="cover-img">
            <div className="image fit">
              <a href="#"><img src="images/pic04.jpg" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Reviews;
