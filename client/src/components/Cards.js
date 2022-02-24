// Import React
import React from 'react';
// Add class
import '../assets/css/main.css';

function Cards () {
  return (
    <section id="one" className="wrapper style2">
      <div className="inner">
        <div className="grid-style">
          <div className="reactive-adjustment">
            <div className="box">
              <div className="image fit">
                <img src="images/forum.jpg" alt="" />
              </div>
              <div className="content">
                <header className="align-center">
                  <p>The forum is free and open to everyone</p>
                  <h2>Access the Forum</h2>
                </header>
                <p> This is where all the desired and expendable currencies are posted. Please remember to add a possible way for people to contact you. Please be as specific as possible. Be sure to mention the currency you wish to trade and how much you will be trading.</p>
                <footer className="align-center">
                  <a href="#forum" className="button alt">Click Here to Join the Forum!</a>
                </footer>
              </div>
            </div>
          </div>
          <div className="reactive-adjustment">
            <div className="box">
              <div className="image fit">
                <img src="images/directions.jpg" alt="" />
              </div>
              <div className="content">
                <header className="align-center">
                  <p>How it works!</p>
                  <h2>Instructions</h2>
                </header>
                <p> A quick and simple guide to understand how the currency exchange works! Be sure to look at this article before posting on the forum. It speaks to the directions, rules, regulations, benafits and legality behind this Forex trading process.</p>
                <footer className="align-center">
                  <a href="#instructions" className="button alt">Learn More</a>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
