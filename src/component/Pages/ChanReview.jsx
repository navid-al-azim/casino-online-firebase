/* eslint-disable no-unused-vars */
import React from 'react';
import amex from "../../assets/amexpress.png";
import master from "../../assets/mastercard.png";
import visa from "../../assets/visaCard.png";

import chan from "../../assets/chan.png";
import eth from "../../assets/ethereum.png";
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

const ChanReview = () => {
    return (
        <div>
        <Header></Header>
        {/* hero-area  */}
        <div className="container-fluid bg-blue">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="review-data">
                  <h1>CHANCED CASINO REVIEW</h1>
                  <h3>FREE COINS, SOCIAL GAMES, RTP & READER OPINIONS</h3>
                  <p>
                  Chanced Casino, launched in 2023, is an online sweepstakes casino operated by Gold Coin Group LLC. This sweeps casino provides a unique blend of social gaming and online gambling. It allows users to play the best live dealers, table games, and slots, enter contests, and legitimately win free prizes using virtual tokens called Gold Coins & Sweeps Coins. In our in-depth Chanced Casino review, we'll explore everything that might interest you about this exciting sweepstakes casino.
                </p>
                </div>
              </div>
              <div className="col-md-2"></div>
              <div className="col-md-4">
       <div className="top-casino-data-area mt-50">
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
                        Over 600 casino-style games
                        </li>
                        <li>Generous welcome bonus</li>
                        <li>Various community events and tournaments</li>
                        <li>Great loyalty program.</li>
                        <li>Engaging social features.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="pro-head">No mobile app</h3>
                    <div className="like">
                      <ul>
                        <li>Limited live dealer games</li>
                        <li>
                        Few promotions beyond the sign-up offer
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
                  3 Buzzing Wilds, 7 Piggies, 888 Dragons LEBO, Aladdins Magical Treasure, Ancient Egypt
                  </p>
                </div>
                <div className="game-data game-data-payment">
                  <h2>Payment Methods:</h2>
                  <img src={visa} alt="" />
                  <img src={master} alt="" />
                  <img src={amex} alt="" />
                  <img src={eth} alt="" />
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
                        <span className="dot">#</span> Live Baccarat
                    </li>
                    <li>
                        <span className="dot">#</span> Live Blackjack
                    </li>
                    <li>
                        <span className="dot">#</span> Live Poker
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
                    <img src={chan} alt="" />
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
                              <img src={chan} alt="" />
                            </div>
                            <div className="data-area-facts2">
                              <h5>Rating</h5>
                               <h3>6.0</h3>
                            </div>
  
                            <div className="data-area-facts">
                              <h5>Company Address</h5>
                              <h3>
                             
                              </h3>
                            </div>
  
                            <div className="data-area-facts2">
                              <h5>Licence</h5>
                               <h3>
                             </h3>
                            </div>
  
                            <div className="data-area-facts">
                              <h5>Amount of Games</h5>
                              <h3>78</h3>
                            </div>
                            <div className="data-area-facts2">
                              <h5>RTP</h5>
                              <h3>94.40%</h3>
                            </div>
                            <div className="data-area-facts">
                              <h5>Bonus</h5>
                              <h3>10000 GC</h3>
                            </div>
  
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon icon={faHashtag} className="icon" /> Casino Games – Slots and Sweep Games</p>
  
                            <p className="para-data-area">
                            At Chanced Casino, gamers are welcomed into the thrill of casino games, where both traditional and innovative sweep games are on the list of delights. Chanced Casino slot games are the main attraction of gameplay because they provide an irresistible variety of topics, features, and reward options. Players have the chance to pick and choose from over 550 slot games. These games, including reel-spinning, multi-reel and chain machines, and a chance to hit a super progressive jackpot, provide immersive gameplay elements, quality graphics, and the possibility of huge payouts that thrill sweepstakes players. <br /> <br />

Chance invites its players to try their luck on over 64 exciting sweep games, which offer a way to participate in a casino without spending actual money. Sweep games incorporate traditional casino games with sweepstakes, allowing players to win prizes while enjoying the excitement of gambling. <br /> <br />

Besides the slot machine games, Chanced has included famous table games, such as blackjack, roulette, and baccarat, in its sweepstakes lineup. Players can assess their ability and strategies either against the house or with the other participants who could be prize winners in the sweepstakes, which boosts their excitement. <br /> <br />

Chanced Casino even allows players to enjoy an actual casino environment, playing with professional dealers and competing for the sweepstakes prizes. Popular live dealer games featured in Chanced Casino’s sweepstakes include live blackjack, live roulette, and live baccarat. <br /><br />

From top-rated slot machines such as Money Cart 2 Epic Joker, Hellcatraz, TNT Tumble, The Great Pigsby, and Money Train to classic table games where you can play Blackjack, Roulette and Baccarat. Chanced Casino has an entertainment-packed and tempting pool of options for every player.<br /><br />
                            </p>
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} />How to participate in the Chanced casino sweepstakes?</p>
  
                            <p className="para-data-area">
                            To take part in the Chanced sweepstakes, players often need to go through a few simple steps. First, users need to create an account with Chanced Casino and fill in their personal details. They also have to confirm that they are above the legal age (18) to fulfil the legal regulations. <br /> <br />

                            Upon registration, players must sign up for promotional sweepstakes or fulfil specific requirements, like purchasing a coins package or placing a particular bet on qualifying games. Once the prerequisites are fulfilled, players can participate in the sweepstakes. <br /> <br />
                            
                            Every bet slip also contributes to the growing number of sweepstake entries, which means players have more chances of winning exciting prizes.<br /> <br />
                            </p>
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} /> What Payment Methods Does Chanced Casino Use for the Tokens?
                            </p>
  
                            <p className="para-data-area">
                            Chanced Casino allows players to get tokens through many convenient payment options, making the gameplay more comfortable and pleasant. For instance, coins can be bought cost-effectively and instantly via major credit and debit cards such as American Express, Mastercard, and Visa. Chanced also allows players to use the most popular e-wallet services today, including Paypal, Skill, and Neteller. E-wallets provide secure and user-friendly token purchasing without risking the exposure of sensitive financial data to the casino. <br /> <br />

                            Alternatively, players can directly transfer funds from their bank accounts to purchase coins packages. Although bank transfers might take some more time to process than other methods, they are safe to use to finance your account. Another common method used is Cryptocurrency. Chanced accepts cryptocurrencies such as Bitcoin, Ethereum, and Litecoin. Cryptocurrency payments, along with their enhanced privacy and security features, offer the possibility of lower transaction costs.<br />
                            </p>
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} /> The Social Casino Provided by Chanced
                            </p>
  
                            <p className="para-data-area">
                            Chanced provides players with a thrilling and exciting social casino platform, where they can play exciting games with friends and other casino fans while socializing with each other. The social casino is designed with a user-friendly interface that is easy to navigate and allows the players to explore different games and features comfortably. <br /> <br />

                            One of the many attractive things about Chanced’s social casino is its vast game library, which contains unique slot machines, table games, and other games. Users can pick their favourite games from various themes, graphics, and gameplay. Whether a traditional fruit machine or a modern video slot with enthusiastic bonus rounds, everyone will have something to hit the ground running. <br /> <br />

                            The social casino platform also offers exciting virtual tournaments and promotions in which players compete against each other to win amazing rights and prizes. This contributes to an intriguing and competitive ambience during gameplay and creates a feeling that players belong to the same team. <br /> <br />

                            Furthermore, Chanced integrates robust social tools that allow players to interact with friends, send gifts, and boast about their achievements through various social media platforms. This strengthens the social interactive part of the gaming experience, providing a platform for communication and interactivity that extends beyond the games.<br /> <br />
                            </p>
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} />Usability of the Sweepstakes Casino
                            </p>
  
                            <p className="para-data-area">
                            Chanced social casino’s website is designed with a dark blue background and white texts in addition to a few bright, magenta buttons. The platform has very convenient navigation and good design. The user-friendly structure makes it easy to search through the game collection and take part in competitions and challenges as well as to connect with other users. The Chanced casino mobile site has the same excellent features. <br /> <br />

                            Engagement and entertainment are significant strengths of the social casino. The site integrates social tools that allow players to share their achievements, send gifts, and connect with friends through social media platforms, creating a sense of community and teamwork. Moreover, it brings a mix of interactive multiplayer games and challenges to the table, which further boosts the already exciting gaming experience with a bit of rivalry.<br /><br />
                            </p>
                          </div>
                      </div>
                  </div>
                  <h2 className="mt-30">Chanced Casino FAQs</h2>
                  <div className="row">
                
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon icon={faCircleQuestion} className="icon" /> What is the contact number for Chanced Casino?</p>
  
                            <p className="para-data-area">
                            Chanced offers different methods for players to contact the support team, including a dedicated phone support line to talk directly with the support team. Players in the United States can contact the Chanced support team by dialing the toll-free number: +1 (855) 587-2839. This phone number provides customers with an opportunity to talk live with a competent and friendly customer service representative who can support and help them resolve their difficulties and questions relating to their gaming experience. <br /> <br />

      The support phone line is run 24/7, ensuring the players can contact them for help they might need, no matter the time of the day or night. The customer support department is always available if any players have queries regarding account management, bonus offers, games, or technical issues. <br /> <br />

      Besides offering a toll-free phone number, Chanced Casino also provides support via email and live chat, which allows players to choose from different methods of connecting to the customer service representative to get either help or resolve any complaints they encounter while using the casino’s services. <br /> <br />
                            </p>  
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faCircleQuestion} />How do I log in to Chanced Casino?</p>
  
                            <p className="para-data-area">
                            Chanced Casino is a user-friendly platform where users can log into their accounts and get a full-scale gaming experience by playing various games and using its unique features. To log in, go to the Chanced website and look for the Log In icon at the top right of the home page. Then, key in your username, email, or password in the box provided. It is critical to ensure you enter the correct login information to avoid any trouble. <br /> <br />

Once you’re done, you can tap on the Log In button to access the website. If you have entered the right login details, you will log in successfully to your Chanced account. In case of an issue within the site login procedure, like a forgotten password, there are links to reset your password or retrieve your username at the top of the screen to assist you with website access.<br /> <br />
                            </p>
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faCircleQuestion} /> Does Chanced Casino accept Paypal or Cryptocurrency?
                            </p>
  
                            <p className="para-data-area">
                            Chanced Casino accepts an array of payment options, including PayPal and cryptocurrencies, enabling players to pick between the most suitable way of funding their accounts and making purchases. PayPal is a popular digital payment system that allows users to send and receive funds online securely. Cryptocurrencies, like Bitcoin and Ethereum, allow players enhanced safety, privacy, and high transactional speed. <br /> <br />
                            </p>
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faCircleQuestion} /> Does Chanced Casino provide sweeps games?
                            </p>
  
                            <p className="para-data-area">
                            Yes, Chanced provides sweepstakes games, enabling players to have fun and win prizes without investing any money. Sweepstakes games stand out in terms of the uniqueness of their mechanics and the chance for players to win rewards at random, unlike conventional betting based on wagering. At Chance, you can find different Sweepstakes games, such as sweepstakes slots, sweepstakes poker, and sweepstakes bingo. The wide range of games, with vibrant graphics, involved themes, and interactive gameplay, creates a great deal of fun for players. <br /> <br />
                            </p>
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faCircleQuestion} /> 
                            What are the bonuses at the Chanced sweepstakes games?
                            </p>
  
                            <p className="para-data-area">
                            The generous bonuses at Chanced add to the thrill of the game and provide more chances of winnings. Common bonuses in Chanced Casino’s sweepstakes games may include bonus sweeps cash, discounts, and special promotions. The bonuses available in Chanced Casino’s sweepstakes games bring excitement and value as players benefit from the possibility of receiving extra prizes and rewards while playing their favorite games. < br/> <br />
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

export default ChanReview;