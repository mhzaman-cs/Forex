// Import React
import React from 'react';
// Add class
import '../assets/css/main.css';

function Instructions () {
  return (
    <section id="instructions" className="wrapper style2">
      <div className="inner">
        <header className="align-center">
          <p className="special">How it works!</p>
            <h2>Instructions</h2>
        </header>
        <p>
          <h2>Instructions for Using 4X Broker</h2>

          <h3>1. Sign Up or Log In:</h3>
          If you're new to 4X Broker, start by creating an account. Provide your basic information, including a valid email address and password.<br />

          If you're a returning user, simply log in with your registered credentials.<br />

          <h3>2. Create a Currency Exchange Listing:</h3>
          Once logged in, you can create a listing specifying the currencies you have and the ones you desire.<br />

          Include essential details such as the currency amount, your location, and any preferences you may have.<br />

          <h3>3. Browse Listings and Initiate a Chat:</h3>
          Explore the listings posted by other users on the platform. You can filter listings based on your preferences.<br />

          When you find a listing that matches your currency exchange needs, click on it to initiate a chat with the user.<br />

          <h3>4. Negotiate and Finalize Exchange Rates:</h3>
          Use the chat feature to communicate with the other party. Discuss the exchange rate you both agree on based on the current mid-market rate.<br />

          Feel free to negotiate and ask any questions to ensure a smooth exchange process.<br />

          Once you're satisfied with the terms, finalize the exchange rate in the chat.<br />

          <h3>5. Exchange Banking Details:</h3>
          Share your banking details securely within the chat, or use other trusted platforms or methods to transfer funds. Always exercise caution when sharing sensitive information.<br />

          <h3>6. Complete the Currency Exchange:</h3>
          Proceed with the currency exchange using your chosen banking or payment method. Ensure both parties are comfortable with the process before initiating the transaction.<br />

          <h3>7. Rate and Review:</h3>
          After the exchange is completed successfully, you have the option to rate and review the user you traded with. This helps build trust within the 4X Broker community.<br />

          <h2>Why Choose 4X Broker:</h2>
          - 4X Broker is the ideal platform for those looking to avoid high Forex fees.<br />
          - It's particularly beneficial for students and others who frequently exchange currencies, allowing you to save money on conversion fees.<br />
          - Unlike traditional Forex platforms, 4X Broker offers a fee-free and flexible exchange experience.<br />

          Join the 4X Broker community today and start saving on currency conversion fees while connecting with others looking to exchange currency directly. Happy trading!<br />
      </p>
      </div>
    </section>
  );
}

export default Instructions;
