/* eslint-disable no-unused-vars */
import React from "react";
import eightPlus from "../../assets/18+.svg";
import ask from "../../assets/askme.png";
import img from "../../assets/visa.png";

const Footer = () => {
  return (
    
    
    <div className="mt-100">

<div className="container-fluid bg-color-two">
        <div className="container">
          <div className="row text-center">
            <div className="visa-data2">
              <img src={ask} />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-color-two">
        <div className="container">
          <div className="row text-center">
            <div className="visa-data">
              <img src={img} />
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="container-fluid bg-color-one">
        <div className="container">
          <div className="row p1">
            <div className="col-md-3">
              <div className="footer-link text-center">
                <h5>TOP ONLINE CASINOS</h5>
                <ul>
                  <li>
                  <a className="dropdown-item" href='/'>
                            Online Casinos
                          </a>
                  </li>
                  <li>
                  <a className="dropdown-item" href="/new-online-casinos">
                            New Online Casinos
                          </a>
                  </li>
                  <li>
                  <a className="dropdown-item" href="/fast-withdrawal-casinos">
                            Fast Withdrawal Casinos
                          </a>
                  </li>
                 
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-link text-center">
                <h5>Casino Bonus</h5>
                <ul>
                  <li>
                    <a  className="dropdown-item" href="/no-deposit"> No Deposit Bonus</a>
                  </li>
                  <li>
                  <a className="dropdown-item" href="/fast-withdrawal-casinos">
                          First Deposit Bonus
                  </a>
                  </li>
                  <li>
                  <a className="dropdown-item" href='/casino-bonus'>
                          Casino Bonus
                          </a>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-link text-center">
                <h5>CASINO GAMES</h5>
                <ul>
                  <li>
                  <a className="dropdown-item" href="/slot">
                          Slots
                          </a>
                  </li>
                  <li>
                  <a className="dropdown-item" href="/Roulette">
                          Roulette
                          </a>
                  </li>
                  <li>
                  <a className="dropdown-item" href="/Blackjack">
                          Blackjack
                          </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-link text-center">
                <h5>TOP Best CASINOS</h5>
                <ul>
                  <li>
                  <a
                        className="dropdown-item"
                        href="/mobile"
                        role=""
                        data-bs-toggle=""
                        aria-expanded=""
                      >
                       Best Mobile Casino
                    </a>
                  </li>
                  <li>
                  <a className="dropdown-item" href='/paypal'>
                          PayPal Casinos
                          </a>
                  </li>
                  <li>
                  <a className="dropdown-item" href="/skill">
                          Skrill Casinos
                          </a>
                  </li>
                  <li>
                  <a className="dropdown-item" href="/Debit">
                          Debit Card Casinos
                          </a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-fluid bg-color-two">
        <div className="container">
          <div className="row text-center">
            <div className="eightPlus">
              <div className="eightPlusData">
                <img src={eightPlus} className="visa-data3" />
                <p>Play/Gamble Responsibly For questions and help</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
