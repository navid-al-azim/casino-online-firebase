/* eslint-disable no-unused-vars */
import React from 'react';
import amex from "../../assets/amexpress.png";
// import card from "../../assets/creditcard.png";
import fun from "../../assets/funrize.png";
import Footer from '../Footer/Footer';
import Header from "../Header/Header";

// import dogo from "../../assets/dogecoin.png"; 
// import eth from "../../assets/ethereum.png"; 
// import high from "../../assets/high-5-casino.png";
// import master from "../../assets/mastercard.png";
// import monosping from "../../assets/moonspin-casino.png"; 
import { faCircleQuestion, faHashtag, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import payple from "../../assets/paypal.png";
// import gameProviderPlay from "../../assets/playson.png";
// import gameProviderPush from "../../assets/pushgaming.png";
 // import visa from "../../assets/visaCard.png";
import SideArea from "./SideArea";


import master from "../../assets/mastercard.png";
import visa from "../../assets/visaCard.png";


const FunRise = () => {
    return (
        <>
        <Header></Header>
{/* hero-area  */}
<div className="container-fluid bg-blue">
<div className="container">
<div className="row">
  <div className="col-md-6">
    <div className="review-data">
      <h1>FUNRIZE CASINO REVIEW</h1>
      <h3>GAMES, SUPPORT, AND COIN PACKAGES RATED</h3>

      <p>
      Funrize Casino is the latest online social Casino, established in 2022 by a U.S. gaming developer A1 Development L.L.C. It operates in 47 states, excluding Washington, Idaho, and Wyoming. In this Funrize Casino review, everything players love about this platform will be covered comprehensively. <br /> <br />
 
        Read our Funrize review for information on the exclusive sweepstakes games, reliable banking methods, excellent customer service, loyalty program offers, and any other bonus Funrize may offer! Funrize casino legit offers a sweeps casino experience that you will have a hard time finding in other sweeps casinos or even real money casinos. <br />
      </p>
    </div>
  </div>

  <div className="col-md-2"></div>
  <div className="col-md-4">
       <div className="top-casino-data-area mt-50">
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
</div>
</div>
</div>
{/* pro and con  */}
<div className="container">
<div className="row g-4">
<div className="col-md-8">
  <div className="proAndCon-data-area">
    <h1>Pros & Cons of Wow Vegas Casino</h1>

    <div className="row">
      <div className="col-md-6">
        <h3 className="pro-head">what we like</h3>
        <div className="like">
          <ul>
            <li>
            Promotional entry by mail is available
            </li>
            <li>24/7 customer support agents via live chat and email</li>
            <li>Customers can play in two modes, tournament or promotional mode</li>
            <li>The casino is legal in 47 U.S. states</li>
            <li>Amazing and consistent bonuses for existing players</li>
          </ul>
        </div>
      </div>
      <div className="col-md-6">
        <h3 className="pro-head">what we don't like</h3>
        <div className="like">
          <ul>
            <li>The games portfolio has a few titles</li>
            <li>
            The casino lacks live dealer and table games
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
     
    </div>
    <div className="game-data">
      <h2>Popular Slots:</h2>
      <p>
    
      </p>
    </div>
    <div className="game-data game-data-payment">
      <h2>Payment Methods:</h2>
             <img src={visa} alt="" />
             <img src={master} alt="" />
             <img src={amex} alt="" />
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
        <img src={fun} alt="" />
      </div>
    </div>
    <h4>Funrize Casino Welcome Package</h4>
    <h2>125,000 Free Coins Welcome Bonus</h2>
 
      <div className="button ">
        <a
          href="https://funrize.com/en/?invited_by=CASINON"
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
      <h2>Everything You Need To Know About WOW Vegas</h2>
      <div className="row">
          <div className="facts">
              <div className="facts-head">
                <p className="headerTitle"><FontAwesomeIcon icon={faPenNib} className="icon" /> Facts about Funrize Sweepstakes Casino</p>
               
                <div className="data-area-facts">
                  <h5>Logo</h5>
                  <img src={fun} alt="" />
                </div>
                <div className="data-area-facts2">
                  <h5>Rating</h5>
                   <h3>6.0</h3>
                </div>

                <div className="data-area-facts">
                  <h5>Company Address</h5>
                  <h3></h3>
                </div>

                <div className="data-area-facts2">
                  <h5>Licence</h5>
                   <h3></h3>
                </div>

                <div className="data-area-facts">
                  <h5>Amount of Games</h5>
                  <h3>0
                  </h3>
                </div>
                <div className="data-area-facts2">
                  <h5>RTP</h5>
                  <h3>95.40%</h3>
                </div>
                <div className="data-area-facts">
                  <h5>Bonus</h5>
                  <h3>125$
                  </h3>
                </div>

              </div>
          </div>
          <div className="facts">
              <div className="facts-head">
                <p className="headerTitle"><FontAwesomeIcon icon={faHashtag} className="icon" /> Games Used By Funrize Casino for Sweepstakes</p>

                <p className="para-data-area">
                Funrize Casino offers a small but exciting collection of over 70 games for sweepstakes. Players can click on the game’s icon on the left-hand sidebar to explore impressive Funrize casino slots, fish games, and jackpot games. There are various themes, so each player will find something suitable to keep them interested for hours. Some outstanding slot games include Carnival Cat, Book of the Nile, and Fortune Skulls. <br /> <br />

                Players will be happy to discover they can play all slot games with tournament coins issued for free on registration. Still, all other games are reserved for the premium mode. Live casino games, roulette, blackjack, and baccarat are not available in this sweepstakes casino, so players in the free-play mode are getting all the benefits.
                <br /> <br />

                Under the Fishing menu, players can choose the Fishing Kingdom and the Thunder Fishing games. These games require a player to purchase some coins to claim prizes when they win the games. Fishing games are thrilling because they can involve four players simultaneously. <br /> <br />

                An outstanding feature of the games available for sweepstakes is that they have information on the potential risk, in-game multipliers, and play level limits. Players can choose games with a low risk of depleting their Tournament coins or promotional entries.<br /> <br />
                </p>
              </div>
          </div>
          <div className="facts">
              <div className="facts-head">
                <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} /> What Do You Need to Do To Participate in the Funrize Casino Sweepstakes?</p>

                <p className="para-data-area">
                Suppose you are a new player participating in Funrize Casino Sweepstakes. In that case, you must be a resident of any of the 47 states in the U.S. that allow social casinos. Funrize does not operate in Washington, Idaho, and Wyoming. <br /> <br />

                You need to register an account using your Google account, Facebook, email, or phone number to receive the no-deposit welcome offer of 75,000 tournament coins. After signing up, go to the games lobby, choose a game, and begin playing. <br /> <br />

                This free-to-play mode is just for fun and sharpening your skills. The Casino gives you more tournament coins to explore more games after you verify your email, phone number and complete your profile. You must accumulate promotional entries issued when you purchase more tournament coins to claim prizes. <br /> <br />
                </p>
              </div>
          </div>
          <div className="facts">
              <div className="facts-head">
                <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} /> What does Funrize Casino use the virtual tokens?
                </p>

                <p className="para-data-area">
                All social casinos don’t allow gambling with real money, so they have virtual coins. Funrize Casino offers players two virtual tokens, tournament coins (T.R.N.), and promotional entries. T.R.N. is a free virtual currency that can be purchased using real funds. Don’t forget to check out the Funrize bonus, and get more info! <br /> <br />

                After signing up, Funrize offers players 125,000 TRN and more every day. These coins can only be used in tournament or free-play modes as they have no real-world value and cannot be used to win prizes. You may have the chance of scoring a fantastic welcome bonus though! <br /> <br />

                Promotional entries (P.E.s) are the real-play virtual currency issued with every purchase of tournament coins using real money or other alternative methods. Players use promotional entries to play Funrize promotional games in the promotional mode. <br /> <br />

                Players can redeem the promotional entries for gift cards, cash prizes, or more tournament coins. Funrize Casino has a switch button at the top of the website, making switching between the promotional and tournament modes quick. <br /> <br />
                </p> 
              </div>
          </div>
          <div className="facts">
              <div className="facts-head">
                <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} /> Withdrawal How Can What Payment Methods Does Funrize Casino Use for the Tokens?
                </p>

                <p className="para-data-area">
                Funrize Casino is an entirely free-to-play casino where players receive free tournament coins to play their favorite games for fun in the tournament mode. The Casino also has a real-play or promotional mode, where players can use real money to purchase tournament coins with promotional entries. <br /> <br />

                Funrize Casino offers a few reliable payment options for players who need to boost their T.R.N. These methods include credit or debit cards such as Visa, MasterCard, and Discover and online banking transfers through Trustly and Apple Pay. <br /> <br />

                E-wallets and cryptocurrencies are not yet allowed at Funrize Casino, but it is understandable as the Casino is more of a fun play platform than a gambling site. The cost of T.R.N. coins ranges from $4.99 to $199.99, depending on the player’s preference. <br /> <br />

                Transactions with the available banking options are instant, and a player will receive their T.R.N. coins and promotional entries as soon as they choose a banking method and complete the transaction. <br /> <br />

                Once players meet the minimum withdrawal limit of $25 for cash prizes, they can select a payment option to receive their funds. $1 equals 100 promotional entries; a player needs a minimum of 2500 entries to claim a cash prize. <br /> <br />
                </p>
              </div>
          </div>
          <div className="facts">
              <div className="facts-head">
                <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} /> The Social Casino Provided by Funrize Casino?
                </p>

                <p className="para-data-area">
                Funrize Social Casino is an excellent choice for players in the 47 States that allow sweepstakes casinos. The Casino was developed to entertain customers and has a lively and user-friendly interface. Whether a player plays slots for fun or in real-money mode, the gameplay at the Casino is incredible. The games have excellent graphics with a clear sound, and using earphones will enhance the experience. <br /> <br />

                The Casino is relatively straightforward, with a one-step registration process s that comes with free tournament coins. These coins can play over 50 free-to-play slots in tournament mode. Players can browse these slots as a complete list or use the onscreen categories; new, hot, favorites, popular, fishing, or jackpot games. <br /> <br />

                Once a player identifies a slot, clicking the game icon will reveal crucial details about the title. Information on play limits, bonus features, volatility, and maximum redeemable prizes will be provided. Clicking on the heart button adds the title to the favorites list to cut the browsing time the next time a player decides to play. <br /> <br />

                The availability of the Funrize Wheel makes the Casino more entertaining. Players can spin the wheel daily to win tournament coins and promotional entries. Besides, the pink Buy button at the top of the webpage facilitates quick purchases of tournament coins when needed. <br /> <br />
                </p> 
              </div>
          </div>
      </div>
      <h2 className="mt-30">Funrize Casino Login, Contact & FAQs</h2>
      <div className="row">
    
          <div className="facts">
              <div className="facts-head">
                <p className="headerTitle"><FontAwesomeIcon icon={faCircleQuestion} className="icon" /> What is The What Is the Contact Number for the Funrize Sweepstake Casino?
                </p>

                <p className="para-data-area">
                Logging into your Funrize Casino account is quick and straightforward. You need to tap on the white login button at the top right corner of the website. The login window opens, and you must choose your login method, whether email, phone number, Google, or Facebook. <br /> <br />

                If you select the email option, the browser likely allows you to save your login details during registration. Your email and password will automatically feed into the boxes, then proceed to click on the login now button. You will be rerouted to your casino account. <br /> <br />
                </p>
              </div>
          </div>
          <div className="facts">
              <div className="facts-head">
                <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faCircleQuestion} /> Is Funrize Casino a Rip-off/Fraud?</p>

                <p className="para-data-area">
                Funrize Casino is a new and safe social casino available to players above 18 in 47 states, excluding Idaho, Wyoming, and Washington. Funrize does not involve real money gambling. Instead, players use virtual currency to play virtual casino games. This platform allows players to enjoy a secure gaming environment without the risks of real money gambling. <br /> <br />

                There aren’t any Funrize Casino fraud complaints online. Reviewers who are the Casino’s existing players enjoy the services. Funrize has fantastic reviews on Trustpilot, a trusted and popular business reviewing and rating site. Over 50% of the players have left a five-star rating on the Casino’s Trustpilot page. <br /> <br />
                </p>
              </div>
          </div>
          <div className="facts">
              <div className="facts-head">
                <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faCircleQuestion} /> What Are the Bonuses at the Funrize Casino’s Sweepstakes Games?
                </p>

                <p className="para-data-area">
                Funrize Casino’s generous bonuses and promotions account for part of the social Casino’s success. New players enjoy the Funrize Casino Bonus package, which includes 125,000 free tournament coins on registration, verification of email and phone number, and completion of the player profile. Naturally, you can always purchase tournament coin packages! <br /> <br />

                These coins can be used in the Tournament mode or the free-play mode. Besides, first-time coin purchasers get a match bonus of Promotional entries which accompany the purchased tournament coins. As far as we know, there are no free promotional entries. <br /> <br />

                Besides the new player bonuses, the Casino has numerous promotions for existing players. They get Funrize club loyalty bonuses, Funrize slot tournaments, daily spinning of the Funrize wheel, and an invite-a-friend award. The promotions page is always active, as new promotions keep coming up occasionally.<br /> <br />
                </p>
              </div>
          </div>
          <div className="facts">
              <div className="facts-head">
                <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faCircleQuestion} /> What Payment Methods Does the Funrize Casino Use for the Sweepstakes?
                </p>

                <p className="para-data-area">
                Funrize Casino is a free-to-play casino. However, players who need to top up their tournament coins can access the most reliable and popular banking options. Players can purchase coins and redeem cash prizes using Visa, MasterCard, and Discover debit, credit cards, and bank transfers through Trustly. <br /> <br />

                Purchasing coins at a Funrize social casino is more about buying an item online than depositing at a casino. The payment options offered in this Casino are available in all the states where the Casino operates. <br /> <br />

                Players who request prize redemptions will receive their winnings through the same banking method they used for purchases. The minimum redemption value is 25.00 Promotional Entries. The withdrawal times vary depending on whether a player chooses to redeem cash or gift vouchers. Funrize Casino does not have E-wallets and cryptocurrencies, although they are standard payment options in most online casinos. <br /> <br />
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
</>
    );
};

export default FunRise;