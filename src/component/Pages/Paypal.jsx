/* eslint-disable no-unused-vars */
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import fqa from "../../assets/mrfaq.svg";

// import card from "../../assets/creditcard.png";
// import dogo from "../../assets/dogecoin.png";
// import eth from "../../assets/ethereum.png";
// import high from "../../assets/high-5-casino.png";
// import master from "../../assets/mastercard.png";
// import monosping from "../../assets/moonspin-casino.png";
// import payple from "../../assets/paypal.png";
// import skill from "../../assets/skrill.png";
// import visa from "../../assets/visaCard.png";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

import gif4 from "../../assets/1.svg";
import amex from "../../assets/amexpress.png";
import bet from "../../assets/betrivers.png";
import bitcoin from "../../assets/bitcoin.png";
import chan from "../../assets/chan.png";
import chum from "../../assets/chumba.png";
import card from "../../assets/creditcard.png";
import crow from "../../assets/crown.png";
import dogo from "../../assets/dogecoin.png";
import eth from "../../assets/ethereum.png";
import fort from "../../assets/fort.png";
import funz from "../../assets/fun.png";
import fun from "../../assets/funrize.png";
import high from "../../assets/high-5-casino.png";
import lucky from "../../assets/luckybird.png";
import luckyland from "../../assets/luckyland.png";
import master from "../../assets/mastercard.png";
import mcluck from "../../assets/mcluck.png";
import monosping from "../../assets/moonspin-casino.png";
import nolimit from "../../assets/nolimitcoins.png";
import payple from "../../assets/paypal.png";
import plz from "../../assets/pulsz.png";
import skill from "../../assets/skrill.png";
import Stake from "../../assets/stake-us-casino.png";
import sweep from "../../assets/sweep.png";
import sweet from "../../assets/sweeptastiCasino.png";
import tao from "../../assets/taofor.png";
import visa from "../../assets/visaCard.png";
import wow from "../../assets/wow.png";
import zula from "../../assets/zula.png";

const Paypal = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);  // Update showMore to true to reveal all content immediately
  };
    return (
        <>

      {/* hero area  */}
      <div className="container-fluid bg-blue">
        <div className="container">
          <div className="row">
            <div className="online-casino-data">
              <h1 className="roboto-black "> PAYPAL CASINOS 2024</h1>
              <h2 className="roboto-regular">
              ONLINE CASINOS THAT ACCEPT PAYPAL
              </h2>
              <p>
              It is important to find an online casino that is right for you - and if you use PayPal, that means online casinos that accept Paypal. This online wallet is extremely convenient and very popular, so a lot of casinos accept it in order to make it easier for their customers to make deposits and withdrawals. Let's take a look at some of the top PayPal casinos and find out more about the payment method itself.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* top casino  */}
      {/* <div className="top-casino">

      {/* best casino  */}

      <div className="container ">
        <div className="row text-center mt-50">
          <div className="best-casino">
            {/* <h2>BEST ONLINE CASINO BONUSES IN 2024</h2>  */}
            {/* <p>
    Casino.online has been formed by a team of online casino experts
    who have been in the industry for decades. Casinos are in our
    blood and we’ve made it our goal to provide the most comprehensive
    casino review website in the world. We break each casino review
    into detailed sections covering everything you need to know!
  </p> */}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-10">
          <div className="col-md-4">
            <div className="top-casino-data-area">
              <div className="top-casino-header bg-purple text-center">
                <img src={high} alt="" />
              </div>
              <div className="top-casino-body">
                <div className="welcome-package text-center">
                  <h4>Welcome Package</h4>
                  <h2>250 GC Sign Up Bonus</h2>
                </div>
                <div className="rate">
                  <div className="win ">
                    <h4>Win Rate</h4>
                    <h5>95.50%</h5>
                  </div>
                  <div className="win">
                    <h4>Payout Time</h4>
                    <h5>1-3 Days</h5>
                  </div>
                </div>
              </div>
              <div className="top-casino-payment text-center">
                <h3>payment methods</h3>

                <div className="payment-img">
                  <img src={visa} alt="" />
                  <img src={master} alt="" />
                  <img src={skill} alt="" />
                  <img src={payple} alt="" />
                  <img src={amex} alt="" />
                  <img src={card} alt="" />
                </div>
              </div>
              <div className="top-casino-playNow text-center">
                <div className="button">
                  <a
                    href="https://club5.high5casino.com/"
                    className="btn roboto-bold"
                  >
                    Play Now
                  </a>
                </div>
                <a href="/high" className="review">
                  Review{" "}
                </a>
              </div>
            </div>
          </div>
        
          <div className="col-md-4">
            <div className="top-casino-data-area">
              <div className="top-casino-header bg-4 text-center">
                <img src={monosping} alt="" />
              </div>
              <div className="top-casino-body">
                <div className="welcome-package text-center">
                  <h4>Welcome Package</h4>
                  <h2>30000 GC Sign Up Bonus</h2>
                </div>
                <div className="rate">
                  <div className="win ">
                    <h4>Win Rate</h4>
                    <h5>94.50%</h5>
                  </div>
                  <div className="win">
                    <h4>Payout Time</h4>
                    <h5>1-3 Days</h5>
                  </div>
                </div>
              </div>
              <div className="top-casino-payment text-center">
                <h3>payment methods</h3>

                <div className="payment-img">
                  <img src={amex} alt="" />
                  <img src={bitcoin} alt="" />
                  <img src={eth} alt="" />
                  <img src={dogo} alt="" />
                  <img src={payple} alt="" />
                </div>
              </div>
              <div className="top-casino-playNow text-center">
                <div className="button">
                  <a href="https://moonspin.us/" className="btn roboto-bold">
                    Play Now
                  </a>
                </div>
                <a href="/moon" className="review">
                  Review{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="top-casino-data-area">
              <div className="top-casino-header bg-3 text-center">
                <img src={Stake} alt="" />
              </div>
              <div className="top-casino-body">
                <div className="welcome-package text-center">
                  <h4>Welcome Package</h4>
                  <h2>10000 GC Sign Up Bonus</h2>
                </div>
                <div className="rate">
                  <div className="win ">
                    <h4>Win Rate</h4>
                    <h5>96.50%</h5>
                  </div>
                  <div className="win">
                    <h4>Payout Time</h4>
                    <h5>1-2 Days</h5>
                  </div>
                </div>
              </div>
              <div className="top-casino-payment text-center">
                <h3>payment methods</h3>

                <div className="payment-img">
                  <img src={amex} alt="" />
                  <img src={bitcoin} alt="" />
                  <img src={payple} alt="" />
                </div>
              </div>
              <div className="top-casino-playNow text-center">
                <div className="button">
                  <a
                    href="https://stake.us/?c=ee790abf44"
                    className="btn roboto-bold"
                  >
                    Play Now
                  </a>
                </div>
                <a href="/Stake" className="review">
                  Review{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="top-casino-data-area">
              <div className="top-casino-header bg-3 text-center">
                <img src={bet} alt="" />
              </div>
              <div className="top-casino-body">
                <div className="welcome-package text-center">
                  <h4>Welcome Package</h4>
                  <h2>1000$</h2>
                </div>
                <div className="rate">
                  <div className="win ">
                    <h4>Win Rate</h4>
                    <h5>95.40%</h5>
                  </div>
                  <div className="win">
                    <h4>Payout Time</h4>
                    <h5>1-5 Days</h5>
                  </div>
                </div>
              </div>
              <div className="top-casino-payment text-center">
                <h3>payment methods</h3>

                <div className="payment-img">
                  <img src={visa} alt="" />
                  <img src={master} alt="" />
                  <img src={payple} alt="" />
                </div>
              </div>
              <div className="top-casino-playNow text-center">
                <div className="button">
                  <a
                    href="https://us.betrivers.net/"
                    className="btn roboto-bold"
                  >
                    Play Now
                  </a>
                </div>
                <a href="/bet" className="review">
                  Review{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="top-casino-data-area">
              <div className="top-casino-header bg-3 text-center">
                <img src={tao} alt="" />
              </div>
              <div className="top-casino-body">
                <div className="welcome-package text-center">
                  <h4>Welcome Package</h4>
                  <h2>88800 Tao Coins</h2>
                </div>
                <div className="rate">
                  <div className="win ">
                    <h4>Win Rate</h4>
                    <h5>95.40%</h5>
                  </div>
                  <div className="win">
                    <h4>Payout Time</h4>
                    <h5>1-3 Days</h5>
                  </div>
                </div>
              </div>
              <div className="top-casino-payment text-center">
                <h3>payment methods</h3>

                <div className="payment-img">
                  <img src={visa} alt="" />
                  <img src={master} alt="" />
                  <img src={payple} alt="" />
                </div>
              </div>
              <div className="top-casino-playNow text-center">
                <div className="button">
                  <a href="https://taofortune.com/" className="btn roboto-bold">
                    Play Now
                  </a>
                </div>
                <a href="/tao" className="review">
                  Review{" "}
                </a>
              </div>
            </div>
          </div>

          {/* all are same casino  */}
          <div className="col-md-4">
            <div className="top-casino-data-area">
              <div className="top-casino-header bg-3 text-center">
                <img src={plz} alt="" />
              </div>
              <div className="top-casino-body">
                <div className="welcome-package text-center">
                  <h4>Welcome Package</h4>
                  <h2>200% Gold Coins</h2>
                </div>
                <div className="rate">
                  <div className="win ">
                    <h4>Win Rate</h4>
                    <h5>95.40%</h5>
                  </div>
                  <div className="win">
                    <h4>Payout Time</h4>
                    <h5>1-3 Days</h5>
                  </div>
                </div>
              </div>
              <div className="top-casino-payment text-center">
                <h3>payment methods</h3>

                <div className="payment-img">
                  <img src={visa} alt="" />
                  <img src={master} alt="" />
                  <img src={payple} alt="" />
                  <img src={skill} alt="" />
                </div>
              </div>
              <div className="top-casino-playNow text-center">
                <div className="button">
                  <a
                    href="https://stake.us/?c=ee790abf44"
                    className="btn roboto-bold"
                  >
                    Play Now
                  </a>
                </div>
                <a href="/plz" className="review">
                  Review{" "}
                </a>
              </div>
            </div>
          </div>


          <div className="d-flex justify-content-center">
          <div className="">
          {!showMore && (  
            <button id="show-more-btn" onClick={handleShowMore}>
              Show More  
              <FontAwesomeIcon icon={faAngleDown} className='icon_show_more'/>
            </button>
          )}
          </div>
        </div>

        {showMore && (  
              <div className="container">
                <div className="row">
                <div className="col-md-4">
            <div className="top-casino-data-area">
              <div className="top-casino-header bg-3 text-center">
                <img src={sweet} alt="" />
              </div>
              <div className="top-casino-body">
                <div className="welcome-package text-center">
                  <h4>Welcome Package</h4>
                  <h2>27777 Lucky Coins</h2>
                </div>
                <div className="rate">
                  <div className="win ">
                    <h4>Win Rate</h4>
                    <h5>95.40%</h5>
                  </div>
                  <div className="win">
                    <h4>Payout Time</h4>
                    <h5>1-3 Days</h5>
                  </div>
                </div>
              </div>
              <div className="top-casino-payment text-center">
                <h3>payment methods</h3>

                <div className="payment-img">
                  <img src={visa} alt="" />
                  <img src={master} alt="" />
                  <img src={amex} alt="" />
                </div>
              </div>
              <div className="top-casino-playNow text-center">
                <div className="button">
                  <a
                    href="https://sweeptastic.com/"
                    className="btn roboto-bold"
                  >
                    Play Now
                  </a>
                </div>
                <a href="/sweet" className="review">
                  Review{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="top-casino-data-area">
              <div className="top-casino-header bg-purple text-center">
                <img src={wow} alt="" />
              </div>
              <div className="top-casino-body">
                <div className="welcome-package text-center">
                  <h4>Welcome Package</h4>
                  <h2>1.5M Coins</h2>
                </div>
                <div className="rate">
                  <div className="win ">
                    <h4>Win Rate</h4>
                    <h5>96.50%</h5>
                  </div>
                  <div className="win">
                    <h4>Payout Time</h4>
                    <h5>1-3 Days</h5>
                  </div>
                </div>
              </div>
              <div className="top-casino-payment text-center">
                <h3>payment methods</h3>

                <div className="payment-img">
                  <img src={visa} alt="" />
                  <img src={master} alt="" />
                  <img src={skill} alt="" />
                  <img src={amex} alt="" />
                </div>
              </div>
              <div className="top-casino-playNow text-center">
                <div className="button">
                  <a
                    href="https://www.wowvegas.com/"
                    className="btn roboto-bold"
                  >
                    Play Now
                  </a>
                </div>
                <a href="/wow" className="review">
                  Review{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="top-casino-data-area">
              <div className="top-casino-header bg-3 text-center">
                <img src={fun} alt="" />
              </div>
              <div className="top-casino-body">
                <div className="welcome-package text-center">
                  <h4>Welcome Package</h4>
                  <h2>125000 Coins</h2>
                </div>
                <div className="rate">
                  <div className="win ">
                    <h4>Win Rate</h4>
                    <h5>95.40%</h5>
                  </div>
                  <div className="win">
                    <h4>Payout Time</h4>
                    <h5>1-3 Days</h5>
                  </div>
                </div>
              </div>
              <div className="top-casino-payment text-center">
                <h3>payment methods</h3>

                <div className="payment-img">
                  <img src={visa} alt="" />
                  <img src={master} alt="" />
                  <img src={amex} alt="" />
                </div>
              </div>
              <div className="top-casino-playNow text-center">
                <div className="button">
                  <a
                    href="https://funrize.com/en/?invited_by=CASINON"
                    className="btn roboto-bold"
                  >
                    Play Now
                  </a>
                </div>
                <a href="/fun" className="review">
                  Review{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="top-casino-data-area">
              <div className="top-casino-header bg-3 text-center">
                <img src={lucky} alt="" />
              </div>
              <div className="top-casino-body">
                <div className="welcome-package text-center">
                  <h4>Welcome Package</h4>
                  <h2>5000GC </h2>
                </div>
                <div className="rate">
                  <div className="win ">
                    <h4>Win Rate</h4>
                    <h5>94.50%</h5>
                  </div>
                  <div className="win">
                    <h4>Payout Time</h4>
                    <h5>1-3 Days</h5>
                  </div>
                </div>
              </div>
              <div className="top-casino-payment text-center">
                <h3>payment methods</h3>

                <div className="payment-img">
                  <img src={eth} alt="" />
                  <img src={bitcoin} alt="" />
                  <img src={amex} alt="" />
                </div>
              </div>
              <div className="top-casino-playNow text-center">
                <div className="button">
                  <a href="https://luckybird.io/" className="btn roboto-bold">
                    Play Now
                  </a>
                </div>
                <a href="/lucky" className="review">
                  Review{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="top-casino-data-area">
              <div className="top-casino-header bg-3 text-center">
                <img src={sweep} alt="" />
              </div>
              <div className="top-casino-body">
                <div className="welcome-package text-center">
                  <h4>Welcome Package</h4>
                  <h2>1000GC GC</h2>
                </div>
                <div className="rate">
                  <div className="win ">
                    <h4>Win Rate</h4>
                    <h5>94.50%</h5>
                  </div>
                  <div className="win">
                    <h4>Payout Time</h4>
                    <h5>1-3 Days</h5>
                  </div>
                </div>
              </div>
              <div className="top-casino-payment text-center">
                <h3>payment methods</h3>

                <div className="payment-img">
                  <img src={visa} alt="" />
                  <img src={master} alt="" />
                  <img src={skill} alt="" />
                  <img src={amex} alt="" />
                </div>
              </div>
              <div className="top-casino-playNow text-center">
                <div className="button">
                  <a
                    href="https://www.sweepslots.com/"
                    className="btn roboto-bold"
                  >
                    Play Now
                  </a>
                </div>
                <a href="/sweep" className="review">
                  Review{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="top-casino-data-area">
              <div className="top-casino-header bg-3 text-center">
                <img src={nolimit} alt="" />
              </div>
              <div className="top-casino-body">
                <div className="welcome-package text-center">
                  <h4>Welcome Package</h4>
                  <h2>100000 Free Coins</h2>
                </div>
                <div className="rate">
                  <div className="win ">
                    <h4>Win Rate</h4>
                    <h5>96.50%</h5>
                  </div>
                  <div className="win">
                    <h4>Payout Time</h4>
                    <h5>1-3 Days</h5>
                  </div>
                </div>
              </div>
              <div className="top-casino-payment text-center">
                <h3>payment methods</h3>

                <div className="payment-img">
                  <img src={visa} alt="" />
                  <img src={master} alt="" />
                  <img src={amex} alt="" />
                </div>
              </div>
              <div className="top-casino-playNow text-center">
                <div className="button">
                  <a
                    href="https://nolimitcoins.com/"
                    className="btn roboto-bold"
                  >
                    Play Now
                  </a>
                </div>
                <a href="/noLimit" className="review">
                  Review{" "}
                </a>
              </div>
            </div>
          </div>



          <div className="col-md-4">
            <div className="top-casino-data-area">
              <div className="top-casino-header bg-3 text-center">
                <img src={fort} alt="" />
              </div>
              <div className="top-casino-body">
                <div className="welcome-package text-center">
                  <h4>Welcome Package</h4>
                  <h2>18330 GC</h2>
                </div>
                <div className="rate">
                  <div className="win ">
                    <h4>Win Rate</h4>
                    <h5>94.00%</h5>
                  </div>
                  <div className="win">
                    <h4>Payout Time</h4>
                    <h5>1-3 Days</h5>
                  </div>
                </div>
              </div>
              <div className="top-casino-payment text-center">
                <h3>payment methods</h3>

                <div className="payment-img">
                  <img src={visa} alt="" />
                  <img src={master} alt="" />
                  <img src={amex} alt="" />
                  <img src={skill} alt="" />
                </div>
              </div>
              <div className="top-casino-playNow text-center">
                <div className="button">
                  <a
                    href="https://stake.us/?c=ee790abf44"
                    className="btn roboto-bold"
                  >
                    Play Now
                  </a>
                </div>
                <a href="/fort" className="review">
                  Review{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="top-casino-data-area">
              <div className="top-casino-header bg-3 text-center">
                <img src={mcluck} alt="" />
              </div>
              <div className="top-casino-body">
                <div className="welcome-package text-center">
                  <h4>Welcome Package</h4>
                  <h2>5000 GC</h2>
                </div>
                <div className="rate">
                  <div className="win ">
                    <h4>Win Rate</h4>
                    <h5>94.00%</h5>
                  </div>
                  <div className="win">
                    <h4>Payout Time</h4>
                    <h5>1-3 Days</h5>
                  </div>
                </div>
              </div>
              <div className="top-casino-payment text-center">
                <h3>payment methods</h3>

                <div className="payment-img">
                  <img src={visa} alt="" />
                  <img src={master} alt="" />
                </div>
              </div>
              <div className="top-casino-playNow text-center">
                <div className="button">
                  <a
                    href="https://stake.us/?c=ee790abf44"
                    className="btn roboto-bold"
                  >
                    Play Now
                  </a>
                </div>
                <a href="/mcluck" className="review">
                  Review{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="top-casino-data-area">
              <div className="top-casino-header bg-3 text-center">
                <img src={funz} alt="" />
              </div>
              <div className="top-casino-body">
                <div className="welcome-package text-center">
                  <h4>Welcome Package</h4>
                  <h2>250 SC</h2>
                </div>
                <div className="rate">
                  <div className="win ">
                    <h4>Win Rate</h4>
                    <h5>96.40%</h5>
                  </div>
                  <div className="win">
                    <h4>Payout Time</h4>
                    <h5>1-3 Days</h5>
                  </div>
                </div>
              </div>
              <div className="top-casino-payment text-center">
                <h3>payment methods</h3>

                <div className="payment-img">
                  <img src={visa} alt="" />
                  <img src={master} alt="" />
                  <img src={amex} alt="" />
                </div>
              </div>
              <div className="top-casino-playNow text-center">
                <div className="button">
                  <a
                    href="https://stake.us/?c=ee790abf44"
                    className="btn roboto-bold"
                  >
                    Play Now
                  </a>
                </div>
                <a href="/funz" className="review">
                  Review{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="top-casino-data-area">
              <div className="top-casino-header bg-3 text-center">
                <img src={luckyland} alt="" />
              </div>
              <div className="top-casino-body">
                <div className="welcome-package text-center">
                  <h4>Welcome Package</h4>
                  <h2>10 SC</h2>
                </div>
                <div className="rate">
                  <div className="win ">
                    <h4>Win Rate</h4>
                    <h5>94.40%</h5>
                  </div>
                  <div className="win">
                    <h4>Payout Time</h4>
                    <h5>1-3 Days</h5>
                  </div>
                </div>
              </div>
              <div className="top-casino-payment text-center">
                <h3>payment methods</h3>

                <div className="payment-img">
                  <img src={visa} alt="" />
                  <img src={master} alt="" />
                  <img src={amex} alt="" />
                  <img src={skill} alt="" />
                </div>
              </div>
              <div className="top-casino-playNow text-center">
                <div className="button">
                  <a
                    href="https://stake.us/?c=ee790abf44"
                    className="btn roboto-bold"
                  >
                    Play Now
                  </a>
                </div>
                <a href="/luckyland" className="review">
                  Review{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="top-casino-data-area">
              <div className="top-casino-header bg-3 text-center">
                <img src={chum} alt="" />
              </div>
              <div className="top-casino-body">
                <div className="welcome-package text-center">
                  <h4>Welcome Package</h4>
                  <h2>2000000 SC</h2>
                </div>
                <div className="rate">
                  <div className="win ">
                    <h4>Win Rate</h4>
                    <h5>95.40%</h5>
                  </div>
                  <div className="win">
                    <h4>Payout Time</h4>
                    <h5>1-3 Days</h5>
                  </div>
                </div>
              </div>
              <div className="top-casino-payment text-center">
                <h3>payment methods</h3>

                <div className="payment-img">
                  <img src={visa} alt="" />
                  <img src={master} alt="" />
                  <img src={amex} alt="" />
                  <img src={skill} alt="" />
                </div>
              </div>
              <div className="top-casino-playNow text-center">
                <div className="button">
                  <a
                    href="https://stake.us/?c=ee790abf44"
                    className="btn roboto-bold"
                  >
                    Play Now
                  </a>
                </div>
                <a href="/chum" className="review">
                  Review{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="top-casino-data-area">
              <div className="top-casino-header bg-4 text-center">
                <img src={chan} alt="" />
              </div>
              <div className="top-casino-body">
                <div className="welcome-package text-center">
                  <h4>Welcome Package</h4>
                  <h2>10000 GC</h2>
                </div>
                <div className="rate">
                  <div className="win ">
                    <h4>Win Rate</h4>
                    <h5>94.40%</h5>
                  </div>
                  <div className="win">
                    <h4>Payout Time</h4>
                    <h5>1-3 Days</h5>
                  </div>
                </div>
              </div>
              <div className="top-casino-payment text-center">
                <h3>payment methods</h3>

                <div className="payment-img">
                  <img src={visa} alt="" />
                  <img src={master} alt="" />
                  <img src={amex} alt="" />
                  <img src={eth} alt="" />
                </div>
              </div>
              <div className="top-casino-playNow text-center">
                <div className="button">
                  <a
                    href="https://stake.us/?c=ee790abf44"
                    className="btn roboto-bold"
                  >
                    Play Now
                  </a>
                </div>
                <a href="/chan" className="review">
                  Review{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="top-casino-data-area">
              <div className="top-casino-header bg-4 text-center">
                <img src={zula} alt="" />
              </div>
              <div className="top-casino-body">
                <div className="welcome-package text-center">
                  <h4>Welcome Package</h4>
                  <h2>100000 GC</h2>
                </div>
                <div className="rate">
                  <div className="win ">
                    <h4>Win Rate</h4>
                    <h5>95.50%</h5>
                  </div>
                  <div className="win">
                    <h4>Payout Time</h4>
                    <h5>1-3 Days</h5>
                  </div>
                </div>
              </div>
              <div className="top-casino-payment text-center">
                <h3>payment methods</h3>

                <div className="payment-img">
                  <img src={visa} alt="" />
                  <img src={master} alt="" />
                  <img src={amex} alt="" />
                  <img src={skill} alt="" />
                </div>
              </div>
              <div className="top-casino-playNow text-center">
                <div className="button">
                  <a
                    href="https://stake.us/?c=ee790abf44"
                    className="btn roboto-bold"
                  >
                    Play Now
                  </a>
                </div>
                <a href="/zula" className="review">
                  Review{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="top-casino-data-area">
              <div className="top-casino-header bg-4 text-center">
                <img src={crow} alt="" />
              </div>
              <div className="top-casino-body">
                <div className="welcome-package text-center">
                  <h4>Welcome Package</h4>
                  <h2>100000Coins</h2>
                </div>
                <div className="rate">
                  <div className="win ">
                    <h4>Win Rate</h4>
                    <h5>94.40%</h5>
                  </div>
                  <div className="win">
                    <h4>Payout Time</h4>
                    <h5>1-3 Days</h5>
                  </div>
                </div>
              </div>
              <div className="top-casino-payment text-center">
                <h3>payment methods</h3>

                <div className="payment-img">
                  <img src={visa} alt="" />
                  <img src={master} alt="" />
                  <img src={amex} alt="" />
                  <img src={skill} alt="" />
                </div>
              </div>
              <div className="top-casino-playNow text-center">
                <div className="button">
                  <a
                    href="https://stake.us/?c=ee790abf44"
                    className="btn roboto-bold"
                  >
                    Play Now
                  </a>
                </div>
                <a href="/crow" className="review">
                  Review{" "}
                </a>
              </div>
            </div>
          </div>
                </div>
            </div>
          )}



        

        </div>
      </div>

      
      <div className="container-fluid bg-blue pb-50">
        <div className="container new-casino text-center">
          <h4 className="pt-5 color">HOW TO USE PAYPAL TO DEPOSIT AT ONLINE CASINOS
          </h4>
          <div className="row">
            <div className="col-md-12 everyThing">
              <div className="row">
                <div className="facts2">
                  <div className="facts-head">
                    <p className="headerTitle">
                    DIGITAL WALLET
                    </p>

                    <p className="para-data-area">
                    PayPal digital wallet is an online wallet where you can save your cash and make payments whenever you like. It provides a transactional history so that you can keep tabs on your spending and the money that has come in. The wallet is the primary product you get when you join the payment provider.
                      <br /> <br />
                    </p>
                  </div>
                </div>
                <div className="facts2">
                  <div className="facts-head">
                    <p className="headerTitle">
                    PAYPAL MOBILE APP
                    </p>

                    <p className="para-data-area">
                    If you like making deposits on the go, you have a choice of using the PayPal mobile site or the app platform. There is an app for both the Android and iOS mobile platforms. Its app platform has all the features of the main site that including sending and receiving cash, setting up recurring payments, and linking the account to the card and bank accounts.
                      <br /> <br />
                    </p>
                   
                  </div>
                </div>

                <div className="facts2">
                  <div className="facts-head">
                    <p className="headerTitle">
                    PAYPAL ACCESS CARD
                    </p>
                    <p className="para-data-area">
                    PayPal has joined hands with MasterCard to allow its users to access their cash on MasterCard debit cards. This is an excellent way for players to use their PayPal accounts to play at casinos that do not accept PayPal deposits but accept MasterCard payments. Unfortunately, the debit card is not available to all PayPal users around the world.
                      <br /> <br />
                    </p>
                   
                  </div>
                </div>

              
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  pb-50">
        <div className="container new-casino text-center">
          <h4 className="pt-5 color2">STEP BY STEP PROCESS OF MAKING A PAYPAL DEPOSIT
          </h4>
          <div className="row">
            <div className="col-md-12 everyThing">
              <div className="row">
                <div className="facts2">
                  <div className="facts-head">
                    <p className="headerTitle">
                    LOG INTO YOUR PAYPAL CASINO AND HEAD TO THE CASHIER SECTION
                    </p>

                    {/* <p className="para-data-area">
                    PayPal digital wallet is an online wallet where you can save your cash and make payments whenever you like. It provides a transactional history so that you can keep tabs on your spending and the money that has come in. The wallet is the primary product you get when you join the payment provider.
                      <br /> <br />
                    </p> */}
                  </div>
                </div>
                <div className="facts2">
                  <div className="facts-head">
                    <p className="headerTitle">
                    SELECT DEPOSITS AND PICK PAYPAL AS YOUR CHOICE METHOD
                    </p>

                    {/* <p className="para-data-area">
                    If you like making deposits on the go, you have a choice of using the PayPal mobile site or the app platform. There is an app for both the Android and iOS mobile platforms. Its app platform has all the features of the main site that including sending and receiving cash, setting up recurring payments, and linking the account to the card and bank accounts.
                      <br /> <br />
                    </p> */}
                   
                  </div>
                </div>

                <div className="facts2">
                  <div className="facts-head">
                    <p className="headerTitle">
                    ENTER THE AMOUNT THAT YOU WISH TO SPEND IN YOUR FIRST DEPOSIT
                    </p>
                    {/* <p className="para-data-area">
                    PayPal has joined hands with MasterCard to allow its users to access their cash on MasterCard debit cards. This is an excellent way for players to use their PayPal accounts to play at casinos that do not accept PayPal deposits but accept MasterCard payments. Unfortunately, the debit card is not available to all PayPal users around the world.
                      <br /> <br />
                    </p> */}
                   
                  </div>
                </div>

                <div className="facts2">
                  <div className="facts-head">
                    <p className="headerTitle">
                    A POP-UP WINDOW WILL APPEAR WHERE YOU WILL BE ASKED TO ENTER YOUR PAYPAL PASSWORD
                    </p>
                    {/* <p className="para-data-area">
                    PayPal has joined hands with MasterCard to allow its users to access their cash on MasterCard debit cards. This is an excellent way for players to use their PayPal accounts to play at casinos that do not accept PayPal deposits but accept MasterCard payments. Unfortunately, the debit card is not available to all PayPal users around the world.
                      <br /> <br />
                    </p> */}
                   
                  </div>
                </div>

                <div className="facts2">
                  <div className="facts-head">
                    <p className="headerTitle">
                    ONCE COMPLETE, CLICK THE CONTINUE BUTTON
                    </p>
                    {/* <p className="para-data-area">
                    PayPal has joined hands with MasterCard to allow its users to access their cash on MasterCard debit cards. This is an excellent way for players to use their PayPal accounts to play at casinos that do not accept PayPal deposits but accept MasterCard payments. Unfortunately, the debit card is not available to all PayPal users around the world.
                      <br /> <br />
                    </p> */}
                   
                  </div>
                </div>


                <div className="facts2">
                  <div className="facts-head">
                    <p className="headerTitle">
                    PAYPAL WILL SEND THE DEPOSIT INTO YOUR ONLINE CASINO ACCOUNT IN A MINUTE OR TWO
                    </p>
                    {/* <p className="para-data-area">
                    PayPal has joined hands with MasterCard to allow its users to access their cash on MasterCard debit cards. This is an excellent way for players to use their PayPal accounts to play at casinos that do not accept PayPal deposits but accept MasterCard payments. Unfortunately, the debit card is not available to all PayPal users around the world.
                      <br /> <br />
                    </p> */}
                   
                  </div>
                </div>


                <div className="facts2">
                  <div className="facts-head">
                    <p className="headerTitle">
                    CHECK THE EMAIL FROM PAYPAL AS CONFIRMATION
                    </p>
                    {/* <p className="para-data-area">
                    PayPal has joined hands with MasterCard to allow its users to access their cash on MasterCard debit cards. This is an excellent way for players to use their PayPal accounts to play at casinos that do not accept PayPal deposits but accept MasterCard payments. Unfortunately, the debit card is not available to all PayPal users around the world.
                      <br /> <br />
                    </p> */}
                   
                  </div>
                </div>


                <div className="facts2">
                  <div className="facts-head">
                    <p className="headerTitle">
                    START TO PLAY WITH THE FIRST DEPOSIT
                    </p>
                    {/* <p className="para-data-area">
                    PayPal has joined hands with MasterCard to allow its users to access their cash on MasterCard debit cards. This is an excellent way for players to use their PayPal accounts to play at casinos that do not accept PayPal deposits but accept MasterCard payments. Unfortunately, the debit card is not available to all PayPal users around the world.
                      <br /> <br />
                    </p> */}
                   
                  </div>
                </div>

              
                
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="container-fluid bg-blue">
        <div className="container new-casino text-center color">
         
          <div className="row">
            <h4>FEES & TAXES FOR MAKING A CASINO DEPOSIT WITH PAYPAL</h4>
          <div className="col-md-6">
              <div className="casino-img-data">
                <img src={gif4} alt="" />
              </div>
            </div>

            <div className="col-md-6">
              <p>
             
Unfortunately, you will get charged for deposits in some of the PayPal casinos out there. The general cost may vary from between 3% to over 5%. <br /> <br />

If you would like to fund your account using a linked card or bank account, be prepared to pay a small charge. You may have to pay more if the method in question charges for payments into PayPal or transfer of cash to other payment providers. <br /> <br />

There are no added fees for currency conversion, and the money will be shown in your base currency.<br /> <br />
              </p>
            </div>

          
          </div>
        </div>
      </div>


      <div className="container-fluid  pb-50">
        <div className="container new-casino text-center">
          <h4 className="pt-5 color2">STEP BY STEP PROCESS OF MAKING A PAYPAL DEPOSIT
          </h4>
          <div className="row">
            <div className="col-md-12 everyThing">
              <div className="row">
                <div className="facts2">
                  <div className="facts-head">
                    <p className="headerTitle">
                    LOG INTO YOUR CASINO ACCOUNT AND HEAD TO THE CASHIER SECTION
                    </p>

                    {/* <p className="para-data-area">
                    PayPal digital wallet is an online wallet where you can save your cash and make payments whenever you like. It provides a transactional history so that you can keep tabs on your spending and the money that has come in. The wallet is the primary product you get when you join the payment provider.
                      <br /> <br />
                    </p> */}
                  </div>
                </div>
                <div className="facts2">
                  <div className="facts-head">
                    <p className="headerTitle">
                    UNDER THE BANKING SECTION, PICK WITHDRAWALS
                    </p>

                    {/* <p className="para-data-area">
                    If you like making deposits on the go, you have a choice of using the PayPal mobile site or the app platform. There is an app for both the Android and iOS mobile platforms. Its app platform has all the features of the main site that including sending and receiving cash, setting up recurring payments, and linking the account to the card and bank accounts.
                      <br /> <br />
                    </p> */}
                   
                  </div>
                </div>

                <div className="facts2">
                  <div className="facts-head">
                    <p className="headerTitle">
                    SELECT PAYPAL AS THE PREFERRED WITHDRAWAL METHOD
                    </p>
                    {/* <p className="para-data-area">
                    PayPal has joined hands with MasterCard to allow its users to access their cash on MasterCard debit cards. This is an excellent way for players to use their PayPal accounts to play at casinos that do not accept PayPal deposits but accept MasterCard payments. Unfortunately, the debit card is not available to all PayPal users around the world.
                      <br /> <br />
                    </p> */}
                   
                  </div>
                </div>

                <div className="facts2">
                  <div className="facts-head">
                    <p className="headerTitle">
                    ENTER THE AMOUNT THAT YOU WISH TO WITHDRAW
                    </p>
                    {/* <p className="para-data-area">
                    PayPal has joined hands with MasterCard to allow its users to access their cash on MasterCard debit cards. This is an excellent way for players to use their PayPal accounts to play at casinos that do not accept PayPal deposits but accept MasterCard payments. Unfortunately, the debit card is not available to all PayPal users around the world.
                      <br /> <br />
                    </p> */}
                   
                  </div>
                </div>

                <div className="facts2">
                  <div className="facts-head">
                    <p className="headerTitle">
                    CLICK ENTER (OR CONTINUE) TO START THE WITHDRAWAL PROCESS
                    </p>
                    {/* <p className="para-data-area">
                    PayPal has joined hands with MasterCard to allow its users to access their cash on MasterCard debit cards. This is an excellent way for players to use their PayPal accounts to play at casinos that do not accept PayPal deposits but accept MasterCard payments. Unfortunately, the debit card is not available to all PayPal users around the world.
                      <br /> <br />
                    </p> */}
                   
                  </div>
                </div>


              
              
                
              </div>
            </div>
          </div>
        </div>
      </div>



  
      
     

      {/* Online Casinos-area fqa */}

      <div className="container">
        <div className="row mt-50">
          <div className="fqa-data text-center mt-50">
            <p className="headerTitle">FREQUENTLY ASKED QUESTIONS ABOUT PAYPAL DEPOSITS</p>
            <img src={fqa} alt="" />
          </div>

          <div className="row">
            <div className="facts">
              <div className="facts-head">
                <p className="headerTitle">
                  <FontAwesomeIcon icon={faCircleQuestion} className="icon" />{" "}
                  HOW LONG DOES IT TAKE TO RECEIVE WINNINGS WITHDRAWN VIA PAYPAL?

                </p>

                <p className="para-data-area">
                The waiting period may vary according to the casino. When choosing a PayPal casino, go for the one that offers shorter payout times for deposits via PayPal so that you are able to get your cash as soon as possible.<br /> <br />
                   <br />
                </p>
              </div>
            </div>
            <div className="facts">
              <div className="facts-head">
                <p className="headerTitle">
                  <FontAwesomeIcon icon={faCircleQuestion} className="icon" />{" "}
                  WHAT IS THE MINIMUM DEPOSIT AMOUNT REQUIRED TO DEPOSIT VIA PAYPAL?
                </p>

                <p className="para-data-area">
                The minimum deposits that you can make using PayPal are dependent on the PayPal casino. Most casinos that accept PayPal deposits have a minimum deposit requirement of about £10 to £20.
                  <br /> <br />
                </p>
              </div>
            </div>
            <div className="facts">
              <div className="facts-head">
                <p className="headerTitle">
                  <FontAwesomeIcon icon={faCircleQuestion} className="icon" />{" "}
                  IS IT FREE TO OPEN A PAYPAL ACCOUNT?
                </p>

                <p className="para-data-area">
                Yes. You can open a UK PayPal free. Just head to its site using your browser or the app and click the sign-up button. The provider does not require you to make a minimum deposit in order to start using the account. Besides, you can withdraw your entire balance from the account if you so wish.
                  <br /> <br />
                </p>
              </div>
            </div>
            <div className="facts">
              <div className="facts-head">
                <p className="headerTitle">
                  <FontAwesomeIcon icon={faCircleQuestion} className="icon" />{" "}
                  HOW LONG DOES IT TAKE FOR A PAYPAL DEPOSIT TO APPEAR IN MY ACCOUNT?
                </p>

                <p className="para-data-area">
                Payments from your UK PayPal will be reflected almost immediately in your account (it may take a few minutes). Therefore, you can start playing at your favourite online casino as soon as you make the first deposit. Some PayPal casinos replicate the same with the payouts.
                  <br /> <br />
                </p>
              </div>
            </div>
            <div className="facts">
              <div className="facts-head">
                <p className="headerTitle">
                  <FontAwesomeIcon icon={faCircleQuestion} className="icon" />{" "}
                  IN WHICH COUNTRIES CAN I USE PAYPAL FOR ONLINE CASINO DEPOSITS?
                </p>

                <p className="para-data-area">
                PayPal is available in over 100 countries around the world. The e-wallet is available in Africa, Asia, Europe, the Middle East and the Americas.
                  <br /> <br />
                </p>
              </div>
            </div>
            <div className="facts">
              <div className="facts-head">
                <p className="headerTitle">
                  <FontAwesomeIcon icon={faCircleQuestion} className="icon" />{" "}
                  WHY IS PAYPAL THE PREFERRED METHOD OF DEPOSIT FOR ONLINE CASINOS?
                </p>

                <p className="para-data-area">
                PayPal is the preferred method of choice for many customers of online casinos for a number of reasons. For one thing, you will not be charged any fees to deposit with PayPal. Also, PayPal transactions will show on your bank statement when you deposit but it will not be overly obvious that this is a gambling transaction. <br />

Withdrawals to PayPal are usually super quick and depositing with his method is more convenient than other methods. Besides, the payment method is extremely secure.
                  <br /> <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
};

export default Paypal;