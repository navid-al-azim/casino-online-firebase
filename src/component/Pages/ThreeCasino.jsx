/* eslint-disable no-unused-vars */
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import amex from "../../assets/amexpress.png";
import bet from "../../assets/betrivers.png";
import bitcoin from "../../assets/bitcoin.png";
import chan from "../../assets/chan.png";
import chum from "../../assets/chumba.png";
import card from "../../assets/creditcard.png";
import crow from "../../assets/crown.png";
import dogo from "../../assets/dogecoin.png";
import eth from "../../assets/ethereum.png";
import fun from "../../assets/funrize.png";
import high from "../../assets/high-5-casino.png";
import master from "../../assets/mastercard.png";
import monosping from "../../assets/moonspin-casino.png";
import nolimit from "../../assets/nolimitcoins.png";
import payple from "../../assets/paypal.png";
import skill from "../../assets/skrill.png";
import Stake from "../../assets/stake-us-casino.png";
import sweep from "../../assets/sweep.png";
import sweet from "../../assets/sweeptastiCasino.png";
import tao from "../../assets/taofor.png";
import visa from "../../assets/visaCard.png";
import wow from "../../assets/wow.png";
import zula from "../../assets/zula.png";

const ThreeCasino = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);  // Update showMore to true to reveal all content immediately
  };
    return (
        
      <>
        <div className="container">
          <div className="row mt-10">



  
            
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
                  <a href="/stake" className="review">
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
                </div>
            </div>
          )}

  
  

  
            {/* all are same casino  */}

  


          </div>
        </div>
      </>
      
    );
};

export default ThreeCasino;