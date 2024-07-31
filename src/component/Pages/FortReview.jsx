/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';


import master from "../../assets/mastercard.png";
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
import boom from "../../assets/boom.png";
import evo from "../../assets/evoplay.png";
import game from "../../assets/pragmaticplay.png";
import skill from "../../assets/skrill.png";
import SideArea from "./SideArea";
/* eslint-disable no-unused-vars */
import amex from "../../assets/amexpress.png";
import fort from "../../assets/fort.png";



const FortReview = () => {
    return (
        <div>
        <Header></Header>
        {/* hero-area  */}
        <div className="container-fluid bg-blue">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="review-data">
                  <h1>FORTUNE COINS CASINO REVIEW</h1>
                  <h3>FREE COINS, SOCIAL GAMES, RTP & READER OPINIONS</h3>
  
                  <p>
                  Fortune Coins is among the top reputable and reliable sweepstake casinos in the industry. Sweepstakes are a new thing for most gamblers but this Fortune Coins sweepstakes review will discuss in detail what it is and how to play and win. It is one of the best sweepstake casinos with a wide selection of games from top-tier software providers. Fortune Coins is characterised by daily free chips, huge bonuses and an easy-to-use interface.
                </p>
                </div>
              </div>
  
              <div className="col-md-2"></div>

              <div className="col-md-4">
       <div className="top-casino-data-area mt-50">
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
                        Several methods of winning free coins
                        </li>
                        <li>VIP program and bonuses</li>
                        <li>Easy user interface</li>
                        <li>Growing games selection</li>
                        <li>Redeem coins fast and conveniently</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="pro-head">what we don't like</h3>
                    <div className="like">
                      <ul>
                        <li>No phone support or live chat</li>
                        <li>
                        No mobile applications
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
                   <img src={boom} alt="" />
                   <img src={evo} alt="" />
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
                    <img src={skill} alt="" />
                </div>
  
                <div className="game-data game-data-payment">
                  <h2>Payment Methods:</h2>
                  <ul>
                    <li>
                        <span className="dot">#</span> Slots
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
                    <img src={fort} alt="" />
                  </div>
                </div>
                <h4>Fortunecoins Casino Welcome Package</h4>
                <h2>Sign up Bonus 18,330,000 Gold Coins + FREE 4,990 Fortune Coins</h2>
             
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
                  <h2>Everything You Need To Know About Fortune Coins Casino</h2>
                  <div className="row">
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon icon={faPenNib} className="icon" /> Facts about Fortune Coins Casino Sweepstakes Casino</p>
                           
                            <div className="data-area-facts">
                              <h5>Logo</h5>
                              <img src={fort} alt="" />
                            </div>
                            <div className="data-area-facts2">
                              <h5>Rating</h5>
                               <h3>6.0</h3>
                            </div>
  
                            <div className="data-area-facts">
                              <h5>Company Address</h5>
                              <h3>
                              2711 Centerville Road, Suite 400, Wilmington, Delaware, 19808, USA
                              </h3>
                            </div>
  
                            <div className="data-area-facts2">
                              <h5>Licence</h5>
                               <h3></h3>
                            </div>
  
                            <div className="data-area-facts">
                              <h5>Amount of Games</h5>
                              <h3>76</h3>
                            </div>
                            <div className="data-area-facts2">
                              <h5>RTP</h5>
                              <h3>
                              94.00%</h3>
                            </div>
                            <div className="data-area-facts">
                              <h5>Bonus</h5>
                              <h3>18330. GC
                              </h3>
                            </div>
  
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon icon={faHashtag} className="icon" /> Casino Games – Slots and Sweep Games</p>
  
                            <p className="para-data-area">
                            Fortune Coins offers its players a wide selection of gaming options to choose from, more than 179 games. This sweepstakes casino is making progress considering that it started with a few titles in 2022. It is seeking new partnerships to ensure players have something to play. <br /> <br />

Initially, Fortune Coins was an in-house casino but added several slots from providers like Pragmatic Play. The slot library offers some of the best sweeps slots in the industry. Some of the top and notable examples include Madame Destiny Megaways, Gate or Olympus and the rare two smash-hit online slots. <br /> <br />

The site offers fish games that have more than 8 exciting titles designed and created by the Fortune Coins in-house team. One of the popular fish games in Fortune Coins is Emily’s Treasure. Other fish games include Space Cowboy, King Octopus, KA Fish Hunter, Cashen Dao, Three-Headed Dragon and Mermaid Hunter. <br /> <br />

The Sweepstakes casino offers a limited number of table games including Casino War Bear. Other than the normally available games, Fortune Coins offers other games for sweepstakes like Wheel of Luck, Funny Hunting and Candy Keno. Therefore, if you wish to change the monotony of fish, table and slot games, try other options including Keno.<br /><br />
                            </p>
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} />How to participate in the Fortune Coins Casino sweepstakes?</p>
  
                            <p className="para-data-area">
                            The first and most important step when it comes to taking part in Fortune Coins sweepstakes is to open an account with them. You need to initiate the registration process and claim your welcome bonus. The registration process is easy and the welcome bonus consists of free coins. This means that you will start playing immediately after your account is activated. <br /> <br />

                            Click the registration link and head straight to the Fortune Coins site. Fill out the form with the basic information like date of birth, email address and name. Verify your email and log in to receive free coins to start playing different Fortune Coins games.<br /> <br />
                            </p>
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} /> What are the Virtual Tokens Used by Fortune Coins Casino?
                            </p>
  
                            <p className="para-data-area">
                            Before you start your registration process, you should first understand how to play the games and the currencies you will be using. Other than knowing the token you can use, you should know how they work at Fortune Coins Sweepstake casino. Traditional online casinos use real money in all transactions, unlike sweepstake casino that uses virtual currencies. These are the Fortune Coins and Gold Coins. <br /> <br />

                            Fortune Coins: These are unique coins at Fortune Coins Sweepstake casino. However, they essentially work as sweep coins found on other sweepstake casino sites. Their main work is to play sweepstake games in sweepstake mode which can be redeemed into rewards and real cash prizes. <br /> <br />
                            Gold Coins: GC, unlike Fortune Coins, are used to play sweepstakes games just for fun. Therefore, they are used mostly in standard sweepstake mode where players cannot redeem them for any rewards of real money. <br /> <br />
                            It is recommended to start playing with your GC to make good use of your welcome free coins. Use your Fortune Coins once you know how to play with the available strategies.<br />
                            </p>
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} /> The social Casino Provided by Fortune Coins
                            </p>
  
                            <p className="para-data-area">
                            Social casinos offer a wide range of bonuses and rewards to their players. However, Fortune Coins social casino does things differently by offering unique promotions and rewards to their users. This made it qualify for one of the best sites with the biggest draws. <br /> <br />

                            Fortune Coins offers one of the best social casinos compared to real money or traditional casinos, in terms of entertainment and reliability. At Fortune Coins, you don’t have to deposit your money to play casino games and win prizes. All games are powered by virtual coins: Fortune Coins and GC. <br /> <br />

                            The two virtual coins can be obtained when you open an account or you can use the available payment methods to add coins. The user-friendly interface ensures that you can navigate smoothly from one page to another even on your first day.<br /> <br />
                            </p>
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} />How Can You Claim Your Prizes From Fortune Coins?
                            </p>
  
                            <p className="para-data-area">
                            The casino offers its players additional Fortune Coins bonuses and rewards on top of the welcome bonus. Players can participate in VIP programs and enjoy a wide range of bonuses and rewards, including special bonuses, daily promos and seasonal offers. <br /> <br />

                            You only need to accumulate your Fortune Coins and redeem them at the right time to get the available rewards. If you log in at least daily, you stand a chance to win a daily reload bonus. All you need to do is to log in at least within 24 hours. <br /> <br />

                            The platform also offers a “refer a friend” bonus. Existing customer can invite their friends or family members to join the platform by sending them the provided invite link. This will result in free Gold Coins when the invited individual makes their first purchase. <br /> <br />

                            You can get free Fortune Coins by streaming your gaming on YouTube or Twitter (X). Taking part in special tournaments and Jackpots at Fortune Coins can help you win free Fortune Coins and Gold Coins. <br /> <br />

                            Head to the redemption page to and follow all of the instructions on how to redeem your prizes, there are limits on withdrawals that need to be adhered to. <br /> <br />
                            </p>
                          </div>
                      </div>
                  </div>
                  <h2 className="mt-30">Fortune Coins Sweepstakes Casino FAQs</h2>
                  <div className="row">
                
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon icon={faCircleQuestion} className="icon" /> Prize Redemption Times at Fortune Coins Casino?</p>
  
                            <p className="para-data-area">
                            Fortune Coins offers a wide range of payment methods to ensure a smooth and flexible gaming experience. Players can purchase GC using several payment methods like Skrill, Bank transfer and debit/credit card. <br /> <br />

                            For withdrawals, you can use Skrill and Trustly. However, in some cases, the casino might want the player to use the withdrawal method similar to the purchase method. The withdrawal time varies depending on the type of method used. However, you need to have a minimum of $50 to withdraw your Fortune Coins. This means you should have at least 5000 Fortune Coins. <br /> <br />

                            The withdrawal time ranges from instant to 5+ days. For instance, players can wait up to 5 days and a minimum of 3 days when they withdraw using Trustly. Skrill is the fastest since the process takes minutes, almost instant. <br /> <br />

                            When opening an account with Fortune Coins, ensure you select the right payment method that suits your needs. This is to avoid unnecessary delay when you make your withdrawals.<br /> <br />
                            </p>  
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faCircleQuestion} /> Fortune Coins Casino Live Chat And Customer Support ?</p>
  
                            <p className="para-data-area">
                            Fortune Coins is doing the best it can to meet the highest standard when it comes to customer support service. This casino is relatively new in the market, meaning they are still figuring out most of the things including how to improve their customer support services. There are not many ways you can reach their customer support team. <br /> <br />

                            One of the available ways of reaching the support team is by clicking on the “Contact Us” button on the homepage. This will automatically send them an email regarding your question, concern or query. The support team will review the content of the email and try to get back to you as fast as possible. <br /> <br />

                            Another way you can get support help is through the available FAQs at their official site. This will help you solve whatever problem you might be facing or fulfil your curiosity. Fortune Coins also encourages users to contact them on Facebook. The good thing is that they are quite responsive in all available channels. <br />

                            Unfortunately, Fortune Coins does not offer live chat and phone support. Even though it is disappointing to lack live chat or phone support, their response is helpful in the email and FAQs. <br /> <br />
                            </p>
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faCircleQuestion} /> Does Fortune Coins Accept PayPal or Cryptocurrency?
                            </p>
  
                            <p className="para-data-area">
                            Despite Fortune Coins offering the best payment options, they don’t allow cryptocurrencies and PayPal payments. Crypto is one of the fastest and most secure payment methods, especially for online gambling platforms. PayPal is an easy-to-use and convenient payment option. Unfortunately, you can’t use either of the two.br /> <br />
                            </p>
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faCircleQuestion} /> Does the Fortune Coins Provide Sweepstakes Games?
                            </p>
  
                            <p className="para-data-area">
                            The game selection at Fortune Coins is great, mostly slots. Also, you can find a few table games and other games like Keno. Most of these games are from top-tier software developers. Some of the developers include Pragmatic Play and Evolution Gaming <br /> <br />

                            Sweep games are one of the best things that casinos can offer, especially where real money casinos are prohibited. Fortune Coins casino gives players a chance to participate in casino-like games for free. This means that players will not risk their money playing casino games. <br />
                            </p>
                          </div>
                      </div>
                      <div className="facts">
                          <div className="facts-head">
                            <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faCircleQuestion} /> 
                             What are The Bonuses at Fortune Coins Sweepstakes Games?
                            </p>
  
                            <p className="para-data-area">
By opening an account with Fortune Coins Casino, you stand a chance to access a generous welcome bonus. You can get 18330 GC + FREE 4,990 Fortune Coins just by filling out the registration form. The bonus is granted in steps that can be forfeited.

Existing players also have a chance to win several free coins every day. If you log in to your Fortune Coins at least once within 24 hours, you stand a chance to receive free Gold coins. Also, players can participate in the VIP program and receive special giveaways and bonuses.<br /> <br />
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

export default FortReview;