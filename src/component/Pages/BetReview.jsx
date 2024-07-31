/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import bet from "../../assets/betrivers.png";

import master from "../../assets/mastercard.png";
import payple from "../../assets/paypal.png";
import gameProvider from "../../assets/pragmaticplay.png";
import visa from "../../assets/visaCard.png";
import Footer from '../Footer/Footer';
import Header from "../Header/Header";

// import card from "../../assets/creditcard.png";
// import dogo from "../../assets/dogecoin.png";
// import eth from "../../assets/ethereum.png";
// import high from "../../assets/high-5-casino.png";
// import master from "../../assets/mastercard.png";
// import monosping from "../../assets/moonspin-casino.png";
// import payple from "../../assets/paypal.png";
// import skill from "../../assets/skrill.png";
// import visa from "../../assets/visaCard.png";
import { faCircleQuestion, faHashtag, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideArea from "./SideArea";


const BetReview = () => {
    return (
        <div>
        <Header></Header>
        {/* hero-area  */}
        <div className="container-fluid bg-blue">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="review-data">
                  <h1>BETRIVERS.NET REVIEW</h1>
                  <h3>LEGIT SOCIAL CASINO? GET FREE VC$</h3>
  
                  <p>
                  BetRivers.net Casino is an online gambling site owned by Rush Street interactive that has attracted a large number of players. This online casino offers a wide range of quality games, easy to use software, convenient payment options, and some great promotions for new players.

                    There are many reasons why this online gambling site is great - the comprehensive BetRivers.net Casino Review below will tell you everything you need to know about the online casino and why you should spend your play casino games time here.
                                
                </p>
                </div>
              </div>
  
              <div className="col-md-2"></div>

              <div className="col-md-4">
       <div className="top-casino-data-area mt-50">
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
            </div>
          </div>
        </div>
        {/* pro and con  */}
        <div className="container">
          <div className="row g-4">
            <div className="col-md-8">
              <div className="proAndCon-data-area">
                <h1>Pros & Cons of BetRivers Casino</h1>
  
                <div className="row">
                  <div className="col-md-6">
                    <h3 className="pro-head">what we like</h3>
                    <div className="like">
                      <ul>
                        <li>
                        Great welcome bonuses
                        </li>
                        <li>Community features and various tournaments</li>
                        <li>An easy-to-navigate interface</li>
                        <li>1x wagering requirement on all bonus money</li>
                        <li>Instant withdrawals</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="pro-head">what we don't like</h3>
                    <div className="like">
                      <ul>
                        <li>Players can’t exchange virtual credits for real money</li>
                        <li>
                        Limited payment methods
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="game-provider">
                <div className="game-data">
                  <h2>Game Providers:</h2>
                  <img src={gameProvider} alt="" />
                </div>
                <div className="game-data">
                  <h2>Popular Slots:</h2>
  
                  <p>
                  Starburst, Dead or Alive 2, Mega Fortune
                  </p>
                </div>
                <div className="game-data game-data-payment">
                  <h2>Payment Methods:</h2>
                  <img src={visa} alt="" />
                  <img src={master} alt="" />
                  <img src={payple} alt="" />
                </div>
  
                <div className="game-data game-data-payment">
                  <h2>Payment Methods:</h2>
                  <ul>
                    <li>
                    
                        <span className="dot">#</span> Slots
                     
                    </li>
                    <li>
                    
                        <span className="dot">#</span> American Roulette
                     
                    </li>
                    <li>
                    
                        <span className="dot">#</span> Baccarat
                    
                    </li>
                    <li>
                    
                        <span className="dot">#</span> Blackjack
                    
                    </li>
                    <li>
                        <span className="dot">#</span> Live Baccarat
                     
                    </li>
                    <li>
                    
                        <span className="dot">#</span> Live Blackjack
                     
                    </li>
                    <li>
                    
                        <span className="dot">#</span> Live Roulette
                    
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
  
         {/* casino-action-area  */}
        <div className="container-fluid bg-action mt-50">
          <div className="container">
            <div className="row">
              <div className="casino-full-data text-center">
                <div className="casino-action">
                  <div className="action-data-img">
                    <img src={bet} alt="" />
                  </div>
                </div>
                <h4>BetRivers Casino Welcome Package</h4>
                <h2>Daily Free Spin to Win up to $1000</h2>
             
                  <div className="button ">
                    <a
                      href="https://us.betrivers.net/"
                      className=" roboto-bold action-button"
                    >
                      Play Now
                    </a>
                  </div>
              
              </div>
            </div>
          </div>
        </div>
  
        {/* Everything know about casino  */}
  
        <div className="container">
          <div className="row">
              <div className="col-md-7 everyThing">
                  <h2>Everything You Need To Know About BetRivers.net Casino</h2>
                  <div className="row">
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon icon={faPenNib} className="icon" /> Facts about BetRivers.net Sweepstakes Casino</p>
                           
                            <div className="data-area-facts">
                              <h5>Logo</h5>
                              <img src={bet} alt="" />
                            </div>
                            <div className="data-area-facts2">
                              <h5>Rating</h5>
                               <h3>6.0</h3>
                            </div>
  
                            <div className="data-area-facts">
                              <h5>Company Address</h5>
                              <h3>Little River Casino Resort located at 2700 Orchard Hwy, Manistee, MI 49660</h3>
                            </div>
  
                            <div className="data-area-facts2">
                              <h5>Licence</h5>
                               <h3></h3>
                            </div>
  
                            <div className="data-area-facts">
                              <h5>Amount of Games</h5>
                              <h3>267</h3>
                            </div>
                            <div className="data-area-facts2">
                              <h5>RTP</h5>
                              <h3>90.50%</h3>
                            </div>
                            <div className="data-area-facts">
                              <h5>Bonus</h5>
                              <h3>1 Bonus Spins
                              </h3>
                            </div>
  
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon icon={faHashtag} className="icon" /> Games used by BetRivers.net Casino for sweepstakes</p>
  
                            <p className="para-data-area">
                            BetRivers Online Casino offers a number of great sweepstakes games. These games may vary depending on the gamers’ location and the given period. <br /> <br />

There is a complete game library of themes and jackpots at the casino as well. Therefore it doesn’t matter if you are looking for a fantasy style or classic format slot game. <br /> <br />

This platform has everything that you need – and all the numerous slots and table games BetRivers.net offers come from reputable providers. BetRivers.net has a section dedicated to progressive jackpot slots too.<br /><br />
                            </p>
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} /> What do you need to do so you can participate in the BetRivers.net Casino sweepstakes?</p>
  
                            <p className="para-data-area">
                            First things first, like in any of the other social casinos, a player must ensure they are eligible to participate in the sweepstakes. A gamer needs to be of the right age so that they can engage in sweepstakes games – the legal age is 21 years and above. <br /> <br />
 
                            Next, you need to create a BetRivers.net account. You will have to visit the website and provide the required documents during the sign-up process. Everyone who wishes to participate in the BetRivers.net Casino sweepstakes needs to stay updated. The best way to do so is by regularly checking the website, promotional emails and social media platforms to know if there are any ongoing or upcoming sweepstakes. <br /> <br />

                            Lastly, players are required to follow all the rules and regulations concerning sweepstakes. Remember that players who fail to adhere to the terms and conditions are subjected to disqualification. <br /> <br />
                            </p>
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} /> SWhat are the virtual tokens used by BetRivers.net Casino?
                            </p>
  
                            <p className="para-data-area">
                            BetRivers.net casino uses virtual tokens called Bonus Store Points or iRush Rewards Points. These digital tokens are components of BetRivers.net’ iRush Reward loyalty program. The iRush Rewards program honours gamers for their consistent and devoted use of the BetRivers.net website. When players bet real money  on casino games, they earn iRush points that can be used to unlock various benefits, from special offers to instant withdrawals. <br /> <br />

Players can use their points at the iRush play points Rewards Bonus Store. The store has a variety of offerings, like free spins, exclusive deals, and occasionally even tangible goods or experiences. There’s always a reason to play games for more points. <br />
                            </p>
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} /> Is there a social casino provided by BetRivers.net Casino?
                            </p>
  
                            <p className="para-data-area">
                            At BetRivers.net online casino, you will get a social casino, Casino4Fun and the Betrivers.net sportsbook app, as well as an online sports betting zone. The social casino is entertaining to gamers and sports bettors. Players can participate without the fear of losing money since they can play and bet for free. <br /> <br />

The social casino includes various interactive elements, including bonuses and rewards for online sportsbook and casino. Players are able to interact with their fellows and even send each other gifts. <br /> <br />

Additionally, the social casino is well-made. Players will not experience any challenges while using the website or playing the thrilling casino games. The instructions are simple and clear. <br /> <br />
                            </p>
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} /> BetRivers.net Casino live chat and customer support
                            </p>
  
                            <p className="para-data-area">
                            The support team is important to any business, not just the casino industry. The only person that can make a company thrive is the customer. BetRivers.net Casino values its clients and has introduced various measures to ensure a smooth experience while using the platform. <br /> <br />

                            The casino provides several ways whereby clients can communicate with the customer care team. Whenever a player requires any form of clarification, they can contact the support team through the live chat feature on the website. This live chat feature enables quick communication, even if you happen to be playing from as far as Tanzania <br /> <br />

                            It doesn’t matter what time of the day you call them; the support team is always available 24/7. Their availability is an assurance that your issues will be addressed in a short time. The live chat feature is easy to use; therefore, expect zero challenges while trying to use it. If you don’t like using it, you can use other alternatives on the platform.<br /> <br />
                            </p>
                          </div>
                      </div>
                  </div>
                  <h2 className="mt-30">BetRivers.net Casino FAQs</h2>
                  <div className="row">
                
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon icon={faCircleQuestion} className="icon" /> How do I sign up for BetRivers.net Casino?</p>
  
                            <p className="para-data-area">
                            Signing up on this platform is quite easy. You need to follow a few steps, and your account will be ready. The process will not take more than 10 minutes to set up. To create an account, you can do it on your smart gadget device or even a desktop; there is no restriction. Below is a guide on how you can register on BetRivers.net Casino. <br /><br />

                            The first step is to visit the official website. Once you are done, check the section marked sign up at the top page and click on it. You will then be directed to a place where you will be required to fill in some information. The first thing you will need to submit is your email and username. <br /> <br />

                            Once you have provided the email and username, it’s time to submit the password. You need to create a strong password that no one can guess right; combining letters, numbers and symbols is the best way. <br /><br />

                            Then there is the second part, where you will need to provide your full name, date of birth, gender and address. The last section is where you will be required to create security questions and submit your mobile number and SSN. After this, click on the terms and condition box to complete the registration. <br /> <br />
                            </p>  
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faCircleQuestion} /> How do I log in to BetRivers.net Casino?</p>
  
                            <p className="para-data-area">
                            Logging into this gambling platform is quite easy; no technical know-how is required. Before logging in, remember it can’t happen if you don’t have an account. So if you don’t have then creating one will be necessary. For those that have the account, there are a few steps that you will follow to get access to the platform. It is a process that you can do within a blink of an eye. <br /> <br />

                            Visit the official site and click on the login section. At this point, you will be required to provide your username and password. The information you will fill in must be accurate and match the one provided during registration. If the credentials don’t match, accessing the platform will not happen. So once you have provided the correct username and password, you will have access to your account and conduct any gambling activities you need. <br /> <br />

                            If you have forgotten the password, there is always a way around this. You can reset the password or contact customer care for assistance. To reset it, click the forgot password in the login section. They will send a code to your email, which you will use to reset the password easily. If that doesn’t work for you, consider contacting the help centre; they will help you reset your password.<br /> <br />
                            </p>
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faCircleQuestion} /> How do I close my account at BetRivers.net Casino?
                            </p>
  
                            <p className="para-data-area">
                            Whatever reason you may have to close the account, you will need to be sure about the action. There are other solutions than closing your account, like taking a break from gambling for a week, months and even years. But if you want to close your account, follow the following steps. <br /> <br />

                            You will need to login to your account using your username and password. Then go to the account setting normally at the website’s top right. Find the close account section. Then click on it; BetRivers.net Casino will need your confirmation so they can permanently close your account. <br /> <br />

                            You can avoid this process by seeking help from the help centre. You can call them and make your intentions clear. You will be required to provide some documents proving that you are the actual owner of the account. After that, your account will be closed. <br /> <br />

                            And if, by chance, you need to resume gambling activities on the platform, you will have to sign up once again. Instead of permanently closing your account, you can consider things like self-exclusion. <br /> <br />
                            </p>
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faCircleQuestion} /> Do you have to download software to play at BetRivers.net Casino?
                            </p>
  
                            <p className="para-data-area">
                            A player doesn’t have to go through the struggles of downloading the software so that they can play on the platform. BetRivers.net Casino provides its players an instant play version and a mobile app. With the instant play version, gamers can access the site directly without downloading the software. With this version, a gamer has full access to the site and its features, whether on the desktop or the phone. <br /> <br />

                            On the other hand, the mobile app is available for download. So you will need to download the software if you want to use it. The mobile app provides a user-friendly interface and simple access to the casino’s games and services. <br /> <br />

                            BetRivers.net Casino doesn’t limit its players; those who love the app can download the software, while others can access the web directly. Whichever way you opt for it, you will have the same game experience in the end. <br /> <br />
                            </p>
                          </div>
                      </div>
  
                  </div>
              </div>
              <div className="col-md-5">
                <SideArea></SideArea>
              </div>
          </div>
        </div>
  
         {/* footer-area  */}
        <Footer ></Footer>
      </div>
    );
};

export default BetReview;