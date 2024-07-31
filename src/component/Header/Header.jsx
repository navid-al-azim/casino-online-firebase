import React from "react";
import logo from '../../assets/logo.svg';
import "./Header.css";



const Header = () => {
  return (
    <div>
       <header className="navber_header">
       <div className="container-fluid bg-blue">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">
                  <img src={logo} alt="" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Online Casinos
                      </a>
                      <ul className="dropdown-menu">
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
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Bonuses
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="/casino-bonus">
                          Casino Bonus
                          </a>
                        </li>
                        {/* <li>
                          <a className="dropdown-item" href="/new-online-casinos">
                          Free Spins Without Deposit
                          </a>
                        </li> */}
                        <li>
                          <a className="dropdown-item" href="/no-deposit">
                          No Deposit Bonus
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/first-deposit">
                          First Deposit Bonus
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Casino Games
                      </a>
                      <ul className="dropdown-menu">
                     
                        <li>
                          <a className="dropdown-item" href="/slot">
                          Slots
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/roulette">
                          Roulette
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/blackjack">
                          Blackjack
                          </a>
                        </li>
                      </ul>
                    </li>

                    <a
                        className="nav-link "
                        href="/mobile"
                        role=""
                        data-bs-toggle=""
                        aria-expanded=""
                      >
                        Mobile
                    </a>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                       
                       Payments
 
                      </a>
                      <ul className="dropdown-menu">
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
                          <a className="dropdown-item" href="/debit">
                          Debit Card Casinos
                          </a>
                        </li>
                      </ul>
                    </li>
                 

                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
       </header>
    </div>
  );
};

export default Header;