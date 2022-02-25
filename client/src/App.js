import React from 'react';

import Chat from './components/Chat';

import './assets/css/main.css';

import './assets/js/main.js';

import CurrencyInput from "./components/CurrencyInput";

import {useState, useEffect} from "react";

import Instructions from './components/Instructions';

import Reviews from './components/Reviews';

import Cards from './components/Cards';

import Banner from './components/Banner';

import Login from './Login';

import axios from "axios";

import styled from "styled-components";

const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593"
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457"
  }
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: #f2f2f2;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

const ButtonToggle = styled(Button)`
  opacity: 0.7;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;

const Tab = styled.button`
  padding: 10px 30px;
  cursor: pointer;
  opacity: 0.6;
  background: #f2f2f2;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;


function TabGroup() {

  const [active, setActive] = useState(types[0]);

  if (active == "Change Password"){
  var result = <><div>
        <h1>Change Password</h1>
        <form id="reg-form">
          // <input type="text" autoComplete="off" id="username" placeholder="Username" />
          <input type="password" className="input_bar" autoComplete="off" id="password" placeholder="Password" />
          <input type="submit" defaultValue="Submit Form" />
        </form>
  </div></>

  } else if (active == "Register") {
  var result = <><div>
        <h1>Register by Entering your Preferred Username and Password</h1>
        <form id="reg-form">
          <input type="text" className="input_bar" autoComplete="off" id="username" placeholder="Username" />
          <input type="password" className="input_bar" autoComplete="off" id="password" placeholder="Password" />
          <input type="submit" className="sumbit_button" defaultValue="Submit Form" />
        </form>
      </div>
  </>

  } else {
    var result = <Login></Login>
  }


    return (
      <>
        <div>
          {types.map((type) => (
            <Tab key={type} active={active === type} onClick={() => setActive(type)} >
              {type}
            </Tab>
          ))}
        </div>
        <p />
        <p> {result} </p>
      </>
    );
  }

const types = ["Login", "Register"]; //, "Change Password"

function App() {

  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('CAD');
  const [rates, setRates] = useState([]);

  useEffect(() => {
    axios.get('http://data.fixer.io/api/latest?access_key=c5b3d3b532bb3b81d1b19d0eeb93529b')
      .then(response => {
        setRates(response.data.rates);
      })
  }, []);

  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmount1Change(1);
      }
      init();
    }
  }, [rates]);



  function format(number) {
    return number.toFixed(4);
  }

  function handleAmount1Change(amount1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setCurrency2(currency2);
  }

  const [show,setShow]=useState(true)

  return (
    <>
    {/* Banner */}
    <Banner></Banner>
    {/* Header */}
    <div className="home">
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <header id="header" className="alt">
              <div className="logo"><a href="index.html">Peer-to-Peer<span> Currency Exchange<span /></span></a></div>
              <a href="#menu">Menu</a>
            </header>
            {/* Nav */}
            <nav id="menu">
              <ul className="links">
                <li><a href="#instructions">Instructions</a></li>
                <li><a href="#forum">Forum</a></li>
                <li><a href="#userReviews">Reviews</a></li>
                <li><a href="#footer">Contact us</a></li>
              </ul>
            </nav>

            {/* Cards */}
            <Cards></Cards>

            <section id="two" className="wrapper style3">
              <div className="inner">
                <header className="align-center">
                  <p>The Best Currency Exchange Rates</p>
                  <h2>Direct Decentralized Forex</h2>
                </header>
              </div>
            </section>

            {/* Instructions */}
            <Instructions></Instructions>

            <section id="Dashboard" className="wrapper align-center stylen">
            <>
              <TabGroup />
            </>
            </section>

            {/* Four */}
            <div id="exchange_rate" class="coversion-rates wrapper">
            <h2 className = "header-rate">Currency Exchange Rates</h2>
              <CurrencyInput
                onAmountChange={handleAmount1Change}
                onCurrencyChange={handleCurrency1Change}
                currencies={Object.keys(rates)}
                amount={amount1}
                currency={currency1} />
              <CurrencyInput
                onAmountChange={handleAmount2Change}
                onCurrencyChange={handleCurrency2Change}
                currencies={Object.keys(rates)}
                amount={amount2}
                currency={currency2} />
            </div>

            {/* Five */}
            <div id="forum">
              <Chat></Chat>
            </div>

            <Reviews></Reviews>

            {/* Footer */}
            <footer id="footer">
              <div className="container">
                <ul className="icons">
                  <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                  <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                  <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                  <li><a href="#" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                </ul>
              </div>
              <div className="copyright">
                © Forex. All rights reserved.
              </div>
            </footer>
          </div>
    </>
  );
}

export default App;
