// Import React
import React from 'react';
// Add class
import '../assets/css/main.css';

function Banner () {
  return (
    <section className="banner full">
      <article>
        <img src="images/slide01.jpg" alt="" />
        <div className="inner">
          <header>
            <p>Free Currency Exchange!</p>
            <h2 className="main-head">4X Broker</h2>
          </header>
        </div>
      </article>
      <article>
        <img src="images/Exchange.jpg" alt="" />
        <div className="inner">
          <header>
            <p>Use This Service for Free!</p>
            <h2 className="main-head">Matching Exchange Rates</h2>
          </header>
        </div>
      </article>
      <article>
        <img src="images/slide02.jpg" alt="" />
        <div className="inner">
          <header>
            <p>{/* Once the Pandemic is Over!*/} Forget about the Exchange Rates!</p>
            <h2 className="main-head">Travel!</h2>
          </header>
        </div>
      </article>
      <article>
        <img src="images/money.jpg" alt="" />
        <div className="inner">
          <header>
            <p>Become a Forex Trader</p>
            <h2 className="main-head">Gain!</h2>
          </header>
        </div>
      </article>
      {/* <article>
      <img src="images/peer-to-peer-network.jpg"  alt="" />
      <div class="inner">
        <header>
          <p>Peer-to-Peer Exchange</p>
          <h2>No Thrid Party Involvement!</h2>
        </header>
      </div>
    </article> */}
    </section>

  );
}

export default Banner;
