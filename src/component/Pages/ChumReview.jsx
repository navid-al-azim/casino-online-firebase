/* eslint-disable no-unused-vars */
import React from 'react';
import amex from "../../assets/amexpress.png";
import chum from "../../assets/chumba.png";
import master from "../../assets/mastercard.png";
import skill from "../../assets/skrill.png";
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
import game from "../../assets/pragmaticplay.png";
import SideArea from "./SideArea";
/* eslint-disable no-unused-vars */

const ChumReview = () => {
    return (
        <div>
        <Header></Header>
        {/* hero-area  */}
        <div className="container-fluid bg-blue">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="review-data">
                  <h1>CHUMBA CASINO REVIEW 2024</h1>
                  <h3>FREE COINS, GAMES AND DEPOSIT METHODS RATED</h3>
  
                  <p>
                  Chumba Casino is one of the leading sweepstakes casinos in the US. It offers a wide variety of games, including slots, blackjack, solitaire, and slingo. There are also several regular offers to receive free sweeps coins available to users on the website. Users can transact with leading cards, Trustly, and bank transfer methods. This Chumba Casino review checks on some of the salient features of this casino.interface.
                </p>
                </div>
              </div>
  
              <div className="col-md-2"></div>

              <div className="col-md-4">
       <div className="top-casino-data-area mt-50">
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
                        The casino is accepted in most parts of the United States.
                        </li>
                        <li>Chumba Casino has a good variety of games outside slots.</li>
                        <li>Sweepstakes winnings are redeemable for cash gifts and merchandise.</li>
                        <li>Chumba Casino accepts payments from leading cards and e-wallets.</li>
                        <li>This casino has a customer service phone line and a Facebook wall.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="pro-head">what we don't like</h3>
                    <div className="like">
                      <ul>
                        <li>The casino does not offer a live chat option for customer support.</li>
                        <li>
                        Chumba Casino is not available beyond the USA and Canada.
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
                  
                   <img src={game} alt="" />
                </div>
                <div className="game-data">
                  <h2>Popular Slots:</h2>
                  <p>
                  Joker Millions
                  </p>
                </div>
                <div className="game-data game-data-payment">
                  <h2>Payment Methods:</h2>
                  <img src={visa} alt="" />
             <img src={master} alt="" />
             <img src={amex} alt="" />
             <img src={skill} alt="" />
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
                        <span className="dot">#</span> Blackjack
                    </li>
                    <li>
                        <span className="dot">#</span> Poker
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
                    <img src={chum} alt="" />
                  </div>
                </div>
                <h4>Chumba Casino Welcome Package</h4>
                <h2>2,000,000 Gold Coins and 2 Sweeps Coins for FREE</h2>
             
                  <div className="button ">
                    <a
                      href="https://stake.us/?c=ee790abf44"
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
                  <h2>Chumba Casino Sweepstakes</h2>
                  <div className="row">
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon icon={faPenNib} className="icon" /> Facts about Chumba Sweepstakes Casino</p>
                           
                            <div className="data-area-facts">
                              <h5>Logo</h5>
                              <img src={chum} alt="" />
                            </div>
                            <div className="data-area-facts2">
                              <h5>Rating</h5>
                               <h3>6.0</h3>
                            </div>
  
                            <div className="data-area-facts">
                              <h5>Company Address</h5>
                              <h3>
                              Trident Park, Notabile Gardens, No. 6, Level 3, Central Business District, Mdina Road, Zone 2 Birkirkara, CBD2010, Malta.
                              </h3>
                            </div>
  
                            <div className="data-area-facts2">
                              <h5>Licence</h5>
                               <h3>
                               Malta Gaming Authority</h3>
                            </div>
  
                            <div className="data-area-facts">
                              <h5>Amount of Games</h5>
                              <h3>298</h3>
                            </div>
                            <div className="data-area-facts2">
                              <h5>RTP</h5>
                              <h3>95.40%</h3>
                            </div>
                            <div className="data-area-facts">
                              <h5>Bonus</h5>
                              <h3>2000000 GC
                              </h3>
                            </div>
  
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon icon={faHashtag} className="icon" /> Games Used by Chumba Casino for Sweepstakes</p>
  
                            <p className="para-data-area">
                            All games available on the casino are available in both free and sweepstakes modes. When playing with sweeps coins, you play in sweepstakes mode. This mode is akin to playing games in the real money mode. Some of the games that you can play by redeeming sweeps coins include slots and table games with fair play and great pay outs. <br /> <br />

                            Chumba slots make up the largest number of games in the casino. You can play classics and multiple payline titles, such as Last Empress. There are also a few jackpot titles that include Dancing Gold or Stallion Grand. The casino has a feature called Fireshot Inferno that allows progressive jackpots to be shared across two games. This means that you stand a chance to earn double the price when you play the games with sweeps coins. <br /> <br />

                            There are also table games that include blackjack and video poker. There is one game for each variant to give social players a chance to get entertained without spending a coin. Additionally, Chumba games have no limits on the number of coins you can use. You can play any of the games with just a few coins or sweeps as you like.<br /><br />
                            </p>
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} />What Do You Need to Do So You Can Participate in the Chumba Casino Sweepstakes?</p>
  
                            <p className="para-data-area">
                            You just need to redeem sweeps coins to participate in sweepstakes. Unfortunately, these sweepstakes are not available for purchase. You just wait to get them while using gold coins. Once you get the sweeps, open your favorite game in sweepstakes mode and start playing. The casino allows you to wager any sweeps coins earned repeatedly on any of the games on the website.<br /> <br />
                            </p>
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} /> What are the Virtual Tokens Used by Chumba Casino?
                            </p>
  
                            <p className="para-data-area">
                            There are two types of virtual tokens used by Chumba Casino: gold coins and sweepstake coins. Each has a specific use and eligible games on the casino. The standard virtual currency is the gold coin. You earn gold coins when you log in daily, connect with others on social media, and take part in various promotions. <br /> <br />

                            Some are promotions sent via email. These coins allow you to play games on the casino without having to pay a coin. However, you cannot redeem any winnings you make from gold coins for cash or other gifts. <br /> <br />

                            On the other hand, the casino offers players sweeps coins. These coins enable players to enjoy casino games with the hope of earning prizes. The prizes can be gift cards or cash. Players do not get a chance to buy the coins but will get them as a promotion or with the gold coins.<br />
                            </p>
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} /> What Payment Methods Does Chumba Casino Use for the Tokens?
                            </p>
  
                            <p className="para-data-area">
                            Chumba Casino accepts a variety of methods that players can use to buy additional gold coins on the casino. The casino accepts leading card payment methods such as Visa, Mastercard, Discover, and American Express. These methods support both deposits and withdrawals. <br /><br />

                            It also accepts payment e-wallets, such as Skrill and Paysafecard. Other methods include bank transfers and Trustly. If you win at the casino, you can claim your cash prizes with any of the said methods and gift cards. The casino does not charge players for using any of the methods discussed above. However, you may be charged for using the network for transactions. These charges do not exceed 2.5% of the amount transacted.<br /><br />

                            Additionally, there are minimum withdrawal coins for different methods. If you wish to withdraw your winnings in gift cards, you must have accumulated at least 50 sweep coins. On the other hand, if you wish to withdraw the coins in cash, you should have accumulated at least a hundred of them.<br /><br />

                            Remember, you must have wagered your coins at least once before you can withdraw them in cash. The deposit and withdrawal limits also vary depending on the provider you pick and your transaction history on the payment account.<br /> <br />
                            </p>
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} />The Social Casino Provided by Chumba Casino
                            </p>
  
                            <p className="para-data-area">
                            Chumba Casino is essentially a social gaming website. This means that you do not need to deposit any cash to play the games provided by the casino. Instead of real cash, players use virtual currency called gold coins. These coins are provided for various activities on the casino, including logging in daily, connecting with fellow players on its social media accounts, claiming offers provided by the account, and via email. <br /> <br />

                            You play with the coins as you would with real money. However, the wins in cash cannot be transferred to your real money wallet. Instead, you get additional virtual coins that you use to play games. <br /> <br />

                            Sometimes the casino offers players sweeps coins. These are coins whose wins can be redeemed for cash or prizes. You do not purchase sweeps coins and only get them from the casino when using gold coins. This way, you can earn real cash and prizes without spending a coin at the casino. <br /> <br />

                            The social casino feature enables Chumba to offer games in states that do not allow real-money gaming. This social casino is entertaining, as there are tons of quality games here. It is easy to understand and well-made. <br /><br />
                            </p>
                          </div>
                      </div>
                  </div>
                  <h2 className="mt-30">Chumba Casino Login, Contacts, & FAQs</h2>
                  <div className="row">
                
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon icon={faCircleQuestion} className="icon" /> How Do I Sign Up to Chumba Casino?</p>
  
                            <p className="para-data-area">
                            If you would like to sign up at Chumba Casino, head to the website and locate the sign-up button on the top right side of the casino page. The link will take you to a registration page, where you will be asked to enter your full name and email address. The casino then requires you to create a password. <br /> <br />

                            Once you have input all the details and agreed to the terms and conditions, the casino will send a link to your email address. Use it to confirm your account. After clicking the link, you can safely log in and start playing. <br /> <br />

                            Remember, you can only have one account at Chumba. You must also be of legal age to sign up for an account. The legal age is 18 in most states across the US. However, jurisdictions such as PA have a higher requirement at 21 years of age. <br /> <br />

                            On the other hand, you cannot sign up if you are outside of Canada or the USA. This casino does not allow access using a VPN or any other location masking software.<br /> <br />
                            </p>  
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faCircleQuestion} /> What Is The Contact Number For The Chumba Casino?</p>
  
                            <p className="para-data-area">
                            The customer contact number for Chumba Casino is (+)35699088901. You can use the number to get quick assistance on any issues that you may be facing with your account. The use of a phone number is a convenient way to get assistance, especially because the casino lacks a live chat feature. <br /> <br />

                            Expect to speak to an automated bot before you are transferred to human customer service personnel. You will also have some self-help options in this phase of your call that deal with procedural issues and other small matters. <br /> <br />

                            Keep in mind that this is not a toll-free number. You will be charged for the minutes you spend on the call. If you do not want to spend cash while speaking to customer support, you have the option of sending the team an email.<br /> <br />
                            </p>
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faCircleQuestion} /> How Do I Login to Chumba Casino?
                            </p>
  
                            <p className="para-data-area">
                            You need to visit Chumba Casino to log in. The login button is located on the top right-hand side of the homepage. You will be directed to a page that asks you to enter your email address and password. If you do this accurately, you should be able to log into your account and use it. <br /> <br />

                                However, if you have forgotten your email address, there is a reset feature just below the login page. Click on it and provide your email address as asked. A password reset link will be sent to your email. Click on it to enter a new password. If you still have problems logging into your account even after resetting your password, do not hesitate to contact the customer support team.<br />
                            </p>
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faCircleQuestion} /> How Do I Close My Account at Chumba Casino?
                            </p>
  
                            <p className="para-data-area">
                            If you wish to close your Chumba account, reach out to customer support and communicate your intention. A form will be sent to your email address that you must fill out. It acts as confirmation that you indeed plan to close the account. There is also a space available to give the reason for closing it. <br /> <br />

                            It should take about 24 hours to close the account after filling out the form. If you had any sweep coins that were eligible for withdrawals, the casino will make efforts to send the cash to you. However, if the coins have not been wagered at least once and are below the threshold, they will be forfeited. <br /> <br />

                            Remember, you cannot reactivate an account after closing it. The casino will not allow you to open another one. Therefore, if you just need to take a break from gaming, consider other options available in the responsible social gaming section, including self-exclude and taking a break. Taking a break is ideal for exclusion for less than six months, while self-exclusion works for durations ranging from six months to an indefinite period.<br />
                            </p>
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faCircleQuestion} /> 
                            What Payment Methods Does Chumba Casino Use for the Sweepstakes?
                            </p>
  
                            <p className="para-data-area">
                            Chumba Casino accepts various payment methods for ease of transactions. Here are the popular ones.  <br /> <br />

Gift cards: Gift cards are only available for withdrawals. If you have accumulated at least 50 sweeps coins, you can withdraw them for a card to use when making purchases online. <br /> <br />

Skrill: Skrill positions itself as one of the leading e-wallets on the online payment marketplace. It is known for its low transaction fees and is available across all of the United States. You can deposit at least $10 using this payment method. <br /> <br />

Visa and Mastercard: Visa and Mastercard are some of the leading global credit and debit card companies. You can buy coins with both debit and credit cards using these methods at no added cost. <br /> <br />

Trustly: Trustly is a payment provider that enables players to use their bank accounts without exposing their details to the casino. You can conveniently transact with your account using this method at a low cost. <br /> <br />

Bank Transfer: Players can deposit on their accounts straight from the bank. Deposits are processed in a few minutes at no extra charge unless imposed by the transacting bank. <br /> <br />

American Express: This card is widely used in the US. It provides speedy transactions at low costs.<br /> <br />
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

export default ChumReview;