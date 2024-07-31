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
import amex from "../../assets/amexpress.png";
import card from "../../assets/creditcard.png";
import high from "../../assets/high-5-casino.png";
import master from "../../assets/mastercard.png";
import payple from "../../assets/paypal.png";
import skill from "../../assets/skrill.png";
import visa from "../../assets/visaCard.png";

import bet from "../../assets/betrivers.png";
import chan from "../../assets/chan.png";
import chum from "../../assets/chumba.png";
import crow from "../../assets/crown.png";
import eth from "../../assets/ethereum.png";
import fort from "../../assets/fort.png";
import funz from "../../assets/fun.png";
import fun from "../../assets/funrize.png";
import luckyland from "../../assets/luckyland.png";
import mcluck from "../../assets/mcluck.png";
import nolimit from "../../assets/nolimitcoins.png";
import plz from "../../assets/pulsz.png";
import sweep from "../../assets/sweep.png";
import sweet from "../../assets/sweeptastiCasino.png";
import tao from "../../assets/taofor.png";
import wow from "../../assets/wow.png";
import zula from "../../assets/zula.png";

const DebitReview = () => {
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
                <h1 className="roboto-black "> FIND ALL ONLINE CASINOS THAT ACCEPT DEBIT CARDS</h1>
                <h2 className="roboto-regular">
                PLAY WITH VISA & MASTERCARD
                </h2>
                <p>
                Debit card deposits are the most common form of online payment, including depositing at online casinos. All of the main UK online casinos accepting debit cards will do so without charge. Encryption at Debit Card casino sites has now also come along leaps and bounds so customers can have peace of mind for security.
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
  
         <div className="container-fluid bg-blue">
      <div className="container ">
          <div className="row text-center mt-50">
            <div className="best-casino">
              <h2 className="color">WHAT ARE DEBIT CARDS AND HOW DO THEY WORK?</h2> 
              <p className="pt-3 color">
              Debit cards are the main cashless payment system that works across the world. A debit card is linked to your bank, and the funds will come out of your available balance. For online transactions, such as shopping and online casinos, debit cards are the main and most popular payment method. Because of their ease of use, many people use them to deposit funds into their online casino accounts. All you need to do is sign up for the online casinos that accept debit cards you wish to use, and deposit using your card by entering the details. <br /> <br />

            When you use a debit card to deposit, you are entitled to all of the casino bonuses and promotions and offers that customers get that are depositing with another method. So for example, if you decided to pick the Ladbrokes live games casino coupon, you would be entitled to get this if you were depositing and withdrawing using a card.<br /> <br />

            There are many people who do not like the idea of using their card online, but casinos are aware of how important customer security is, and they do everything they can to ensure your details are secure. If you are thinking of using a debit card with an online casino account, you will be able to find somewhere in their small print the type of encryption they use, and how they keep your card details safe. Most debit cards will also have an additional layer of safety built within the terms and conditions of the bank itself, which you can check with your bank.<br /> <br />
    </p>
            </div>
          </div>
        </div>
        </div>
       
        
        <div className="container-fluid  pb-50">
          <div className="container new-casino text-center">
            <h4 className="pt-5 color2">5 THINGS YOU SHOULD KNOW ABOUT DEBIT CARDS
            </h4>
            <div className="row">
              <div className="col-md-12 everyThing">
                <div className="row">
                  <div className="facts2">
                    <div className="facts-head">
                      <p className="headerTitle">
                      PAYMENTS PROCESSED INSTANTLY
                      </p>
  
                      <p className="para-data-area">
                      Payments made through debit cards are processed instantly, so you can start enjoying your favourite game immediately
                        <br /> <br />
                      </p>
                    </div>
                  </div>
                  <div className="facts2">
                    <div className="facts-head">
                      <p className="headerTitle">
                      NO HEFTY FEES
                      </p>
  
                      <p className="para-data-area">
                      Unlike other payment methods, deposits made through debit cards are not charged hefty fees so that you won't accumulate losses
                        <br /> <br />
                      </p>
                     
                    </div>
                  </div>
  
                  <div className="facts2">
                    <div className="facts-head">
                      <p className="headerTitle">
                      UNCOMPLICATED PAYMENTS PROCESS
                      </p>
                      <p className="para-data-area">
                      No complicated processes are involved in making payments through all sorts of debit cards to your online gambling websites
                        <br /> <br />
                      </p>
                     
                    </div>
                  </div>
  
                  <div className="facts2">
                    <div className="facts-head">
                      <p className="headerTitle">
                      CHOICE OF CARDS
                      </p>
                      <p className="para-data-area">
                      There are many types of debit cards, so you will be spoilt for choice each time you need to deposit money to your online gambling account
                        <br /> <br />
                      </p>
                     
                    </div>
                  </div>

                  <div className="facts2">
                    <div className="facts-head">
                      <p className="headerTitle">
                      NO STRICT T&CS
                      </p>
                      <p className="para-data-area">
                      Players don't have to deal with strict terms and conditions when using debit cards to deposit money into their online gambling accounts
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
            <h4 className="pt-5 color2">HOW TO WITHDRAW YOUR ONLINE GAMBLING WINNINGS USING A DEBIT CARD
            </h4>
            <div className="row">
              <div className="col-md-12 everyThing">
                <div className="row">
                  <div className="facts2">
                    <div className="facts-head">
                      <p className="headerTitle">
                      HEAD TO THE CASHIER
                      </p>
  
                      <p className="para-data-area">
                      If you have cash funds, you would like to withdraw, head to the cashier section and hit the button. The name of the section might vary based on the site you are using. Open the cashier section and choose to withdraw funds
                        <br /> <br />
                      </p>
                    </div>
                  </div>
                  <div className="facts2">
                    <div className="facts-head">
                      <p className="headerTitle">
                      SELECT OPTION
                      </p>
  
                      <p className="para-data-area">
                      You will see that there are many withdrawal options available, a debit card being one of them. Choose your ideal debit card and key in the amount you would like to withdraw and complete the process.
                        <br /> <br />
                      </p>
                     
                    </div>
                  </div>
  
                  <div className="facts2">
                    <div className="facts-head">
                      <p className="headerTitle">
                      WITHDRAW FUNDS
                      </p>
                      <p className="para-data-area">
                      Wait for your funds to be processed. You should receive your money immediately, but some companies might need 2-5 business days to process your withdrawal request and deposit funds to your bank account.
                        <br /> <br />
                      </p>
                     
                    </div>
                  </div>
  
                  <div className="facts2">
                    <div className="facts-head">
                      <p className="headerTitle">
                      5 TIPS FOR MAKING THE MOST OUT OF DEBIT CARD CASINO DEPOSITS
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
                      USE THE SAME DEBIT CARD FOR BOTH PAYMENT AND WITHDRAWAL REQUESTS AND DEBIT CARD DEPOSITS, AND YOU WON'T HAVE TO DEAL WITH HEFTY SERVICE FEES
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
                      CLAIM YOUR WELCOME BONUS AS SOON AS YOU HAVE MADE YOUR FIRST DEPOSIT AT THE DEBIT CARD CASINO SITE
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
                      TAKE ADVANTAGE OF THE CURRENT DEBIT CARD CASINO BONUSES AND PROMOTIONS AT THE AVAILABLE DEBIT CARD CASINOS
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
                      BECOME A LOYAL CUSTOMER, AND THE COMPANY IS HIGHLY LIKELY TO SHOWER YOU WITH BONUSES AND AMAZING PRIZES
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
                      USE YOUR DEBIT CARD CASINO BONUSES AS SOON AS THEY ARE APPROVED SINCE MOST OF THEM HAVE EXPIRY DATES
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
              <p className="headerTitle">FREQUENTLY ASKED QUESTIONS ABOUT DEBIT CARD DEPOSITS</p>
              <img src={fqa} alt="" />
            </div>
  
            <div className="row">
              <div className="facts">
                <div className="facts-head">
                  <p className="headerTitle">
                    <FontAwesomeIcon icon={faCircleQuestion} className="icon" />{" "}
                    HOW LONG DOES IT TAKE TO RECEIVE WINNINGS WITHDRAWN VIA CARD?
  
                  </p>
  
                  <p className="para-data-area">
                  The duration depends on the type of card through which you intend to receive the funds. While some cards might receive funds within 24 hours, in some cases, you will have to wait between 2 and 5 working days for the money to reflect on your card. If the duration takes longer than usual, be sure to contact the customer support team for assistance.<br /> <br />
                    <br /> <br />
                  </p>
                </div>
              </div>
              <div className="facts">
                <div className="facts-head">
                  <p className="headerTitle">
                    <FontAwesomeIcon icon={faCircleQuestion} className="icon" />{" "}
                    WHAT IS THE MINIMUM DEPOSIT AMOUNT REQUIRED TO DEPOSIT VIA CARD?
                  </p>
  
                  <p className="para-data-area">
                  The minimum amount you are expected to pay via card varies from site to site. In most cases, you will be required to make a minimum deposit of €10. Be sure to check the terms of use before making your first deposit. Note that if you are looking to get the welcome bonus, you might have to pay more.
                    <br /> <br />
                  </p>
                </div>
              </div>
              <div className="facts">
                <div className="facts-head">
                  <p className="headerTitle">
                    <FontAwesomeIcon icon={faCircleQuestion} className="icon" />{" "}
                    HOW LONG DOES IT TAKE FOR A CARD DEPOSIT TO APPEAR IN MY ACCOUNT?
                  </p>
  
                  <p className="para-data-area">
                  Card deposit mostly reflects immediately after you have approved the transaction. However, based on your bank's terms and conditions, the payment might take some time to reflect in your online gambling account.
                    <br /> <br />
                  </p>
                </div>
              </div>
              <div className="facts">
                <div className="facts-head">
                  <p className="headerTitle">
                    <FontAwesomeIcon icon={faCircleQuestion} className="icon" />{" "}
                    IN WHICH COUNTRIES CAN I USE A DEBIT CARD FOR ONLINE CASINO DEPOSITS?
                  </p>
  
                  <p className="para-data-area">
                  You can use cards in any country to make casino deposits. But it would be best if you made sure that your residence's country is not restricted from accessing the online casino of your choice. If that is the case, you might not be able to make debit card payments.
                    <br /> <br />
                  </p>
                </div>
              </div>
              <div className="facts">
                <div className="facts-head">
                  <p className="headerTitle">
                    <FontAwesomeIcon icon={faCircleQuestion} className="icon" />{" "}
                    HOW TO CHECK IF AN ONLINE CASINO HAS AN EXCLUSIVE DEBIT CARD BONUS?
                  </p>
  
                  <p className="para-data-area">
                  To confirm this information, you must visit the website of the debit card casino. Go to the bonus and promotions section and see what they say about payments made via a debit card. If there is no clear information about that, consider engaging the support team for details.
                    <br /> <br />
                  </p>
                </div>
              </div>
              <div className="facts">
                <div className="facts-head">
                  <p className="headerTitle">
                    <FontAwesomeIcon icon={faCircleQuestion} className="icon" />{" "}
                    CAN I GET CASINO BONUSES SUCH AS FREE SPINS WHEN I DEPOSIT AT AN ONLINE CASINO WITH MY DEBIT CARD?
                  </p>
  
                  <p className="para-data-area">
                  Nearly all top online casinos will offer new customers a welcome bonus when they deposit at the casino. What bonuses are available for UK players at online casinos that accept debit cards? The casino bonuses can come in various forms such as free spins to play on the online slot games. Most casinos offer free spins that can only be used to play a specific slot game. <br /> <br />

No deposit bonuses whereby new players can take advantage of a casino bonus without actually having to hand over any of their hard-earned cash, and a deposit bonus where the casino may match the amount of money deposited into a casino account by a new customer with bonus funds. Any bonus funds obtained from a debit card casino deposit can then be played at various casino games on online casino sites.
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

export default DebitReview;