/* eslint-disable no-unused-vars */
import React from 'react';
import amex from "../../assets/amexpress.png";
// import card from "../../assets/creditcard.png";
import evo from "../../assets/evoplay.png";
import master from "../../assets/mastercard.png";
import gameProvider from "../../assets/pragmaticplay.png";
import skill from "../../assets/skrill.png";
import sweep from "../../assets/sweep.png";
import visa from "../../assets/visaCard.png";
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
// import gameProviderPush from "../../assets/pushgaming.png";
 // import visa from "../../assets/visaCard.png";
 
import SideArea from "./SideArea";


const Sweep = () => {
    return (
        <>
        <Header></Header>
        {/* hero-area  */}
        <div className="container-fluid bg-blue">
        <div className="container">
        <div className="row">
        <div className="col-md-6">
            <div className="review-data">
            <h1>SWEEPSLOTS CASINO REVIEW</h1>
            <h3>FREE COINS, SOCIAL GAMES, RTP & READER OPINIONS</h3>
            <p>
            SweepSlots Casino, launched in 2021 by Regal Technologies LLC has established itself as preferred destination of choice for sweepstakes lovers all over the United States. It is renowned for its secure banking, fast customer service and variety of gaming options resulting in both convenience and fun. Check out this detailed SweepSlots casino review to discover why it is gaining popularity among its players. <br />
            </p>
            </div>
        </div>

        <div className="col-md-2"></div>
        <div className="col-md-4">
       <div className="top-casino-data-area mt-50">
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
                    Generous welcome bonus
                    </li>
                    <li>Wide selection of games</li>
                    <li>Innovative games</li>
                    <li>Social media contests</li>
                    <li>Fair play and security</li>
                </ul>
                </div>
            </div>
            <div className="col-md-6">
                <h3 className="pro-head">what we don't like</h3>
                <div className="like">
                <ul>
                    <li>No live dealer games</li>
                    <li>
                    Automated customer support
                    </li>
                    <li>
                    No mobile app
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
            <img src={evo} alt="" />
            </div>
            <div className="game-data">
            <h2>Popular Slots:</h2>
            <p>
            Bier Fest, Cannonball Bay, Gods of Giza, Hell Hot 100, Jason's Quest
            </p>
            </div>
            <div className="game-data game-data-payment">
            <h2>Payment Methods:</h2>
            <img src={visa} alt="" />
             <img src={master} alt="" />
             <img src={skill} alt="" />
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
                <img src={sweep} alt="" />
            </div>
            </div>
            <h4>Sweepslots Casino Welcome Package</h4>
            <h2>Welcome bonus 10,000 GC + 1,000 SC</h2>
        
            <div className="button ">
                <a
                href="https://www.sweepslots.com/"
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
            <h2>Everything You Need To Know About SweepSlots Casino</h2>
            <div className="row">
                <div className="facts">
                    <div className="facts-head">
                        <p className="headerTitle"><FontAwesomeIcon icon={faPenNib} className="icon" /> Facts about SweepSlots Sweepstakes Casino</p>
                    
                        <div className="data-area-facts">
                        <h5>Logo</h5>
                        <img src={sweep} alt="" />
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
                        <h3>62
                        </h3>
                        </div>
                        <div className="data-area-facts2">
                        <h5>RTP</h5>
                        <h3>94.40%</h3>
                        </div>
                        <div className="data-area-facts">
                        <h5>Bonus</h5>
                        <h3>100000GC
                        </h3>
                        </div>

                    </div>
                </div>
                <div className="facts">
                    <div className="facts-head">
                        <p className="headerTitle"><FontAwesomeIcon icon={faHashtag} className="icon" /> Casino Games – Slots and Sweep Games</p>

                        <p className="para-data-area">
                        SweepSlots Casino has a large collection of games that can suit different gaming preferences. The casino uses a sweepstakes model where players can earn Sweeps Coins and then redeem them for real cash prizes in different gaming options. <br /> <br />

                        The platform offers more than 500 games with a majority of this number dedicated to slot games. Popular slot titles which include “Wild Rhino,” “Night Wolf,” and “Reels of Zeus” and give the player fun and a chance to win big prizes. These games have good graphics and interesting soundtracks with most of them offering attractive features such as free spins, bonus rounds and progressive jackpots all of which make the game more fun and chance of winning big improves.<br /> <br />

                        SweepSlots also presents a range of sweepstakes games where players can use their Sweeps Coins for real prizes. These are sweepstakes versions of popular slot games that deliver an almost identical slot experience to the players but with a twist of cash rewards. <br /> <br />

                        The table game assortment is small, but it is quite enjoyable. Players can indulge in all-time favorites like blackjack and roulette 3D just like a real casino. Such games introduce variety to the list of games available and are suitable for players who value strategy over luck. SweepSlots Casino offers a variety of games from reliable suppliers so the players can enjoy the great quality and safe to play. <br /> <br />

                        All SweepSlots games are designed to promote safe play and open behavior that is consistent with the rules of US sweepstakes laws. Payers do not need to invest any money and can enjoy games at the platform simply by using Gold Coins or Sweeps Coins earned through subscription or as part of a promotion which allows them to take their gaming experience to a whole new level.<br /> <br />
                        </p>
                    </div>
                </div>
                <div className="facts">
                    <div className="facts-head">
                        <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} />How to participate in the SweepSlots sweepstakes?</p>

                        <p className="para-data-area">
                        To participate in the SweepSlots sweepstakes, players should first register on SweepSlots website where they are awarded free Sweeps Coins and Gold Coins automatically. These are required coins for participation in the contest games. <br /> <br />

                        Gold Coins are used for play for fun without real money awards whereas Sweeps Coins are used in the sweepstakes games where the winnings can be redeemed for cash prizes. Sweeps Coins can be obtained by players by means of daily login perks or by purchase of Gold Coin packs that also gives free Sweeps Coins. When players accumulate enough Sweeps Coins they can possibly redeem them for cash rewards. <br /> <br />
                        </p>
                    </div>
                </div>
                <div className="facts">
                    <div className="facts-head">
                        <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} /> What are the Virtual Tokens Used by SweepSlots?
                        </p>

                        <p className="para-data-area">
                        As is common for sweepstakes casinos, SweepSlots utilizes two types of virtual tokens to facilitate gameplay: Gold Coins (GC) and Sweep Coins (SC). Gold Coins are mainly employed for fun and are not redeemable for cash rewards. They are meant for playing games just for the sake of fun, enabling players to experience what the casino has to offer without any financial risk. Gold Coins are offered as prizes, purchased or acquired through a variety of promotions and bonuses that SweepSlots provides. <br /> <br />

                        Sweep coins are employed in the sweepstakes games and can be swapped for cash rewards. Players get Sweeps Coins for free through registration, promotional offers or by purchasing Gold Coin packages. These coins are used to play sweepstakes games at the casino where each game played with Sweeps Coins pays out in this currency which winners can later exchange for cash once they comply with SweepSlots’ terms and conditions. <br /> <br />
                        </p> 
                    </div>
                </div>
                <div className="facts">
                    <div className="facts-head">
                        <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} /> The Social Casino Provided by SweepSlots
                        </p>

                        <p className="para-data-area">
                        SweepSlots Casino offers a vibrant social casino experience that stands out due to its extensive selection of games and the community-focused atmosphere it fosters. Players can enjoy all kinds of casino games, from slots to table games, all available in a user-friendly online environment that supports interaction and competition among users.<br /> <br />

                        Regular social media contests and promotions add an extra layer of engagement, encouraging players to interact not just within the games but also within a broader community. Social value is generated for enhancing player interaction and participation hence more fun at casino. <br /> <br />

                        The sweepstakes format in social casinos is a lawful and moral system in the USA and it is a safe method of gambling.
                        <br /> 
                        </p>
                    </div>
                </div>
                <div className="facts">
                    <div className="facts-head">
                        <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} /> SweepSlots Live Casino
                        </p>

                        <p className="para-data-area">
                        SweepSlots Casino does not have live casino at the moment. Therefore, players who are looking for live dealer games that are live in real time won’t find any such options here. Even though live dealer games are not among the offerings provided by SweepSlots, the casino makes up for it with a variety of RNG-based table games. With such, players are assured of fair and transparent gaming outcomes for these interactive table games representing well-known favorites such as blackjack and roulette. <br /> <br />
                        </p> 
                    </div>
                </div>
            </div>
            <h2 className="mt-30">SweepSlots Casino FAQs</h2>
            <div className="row">
            
                <div className="facts">
                    <div className="facts-head">
                        <p className="headerTitle"><FontAwesomeIcon icon={faCircleQuestion} className="icon" /> What is the contact number for SweepSlots?
                        </p>

                        <p className="para-data-area">
                        SweepSlots Casino offers a simple and easy way for the players to contact their customer service team by a dedicated US telephone number. Contact number is 1-800-416-6788. This number is free of charge anywhere in the United States hence the players from any part of US can call the customer service representative without incurring any costs. <br /> <br />

The phone service is ideal for dealing with more complicated issues that should be discussed in detail or need to be resolved immediately. It has a personal approach where a player can communicate with a customer support representative who will help, answer questions and sort out any problem instantly. Be it a question regarding account management, a problem with transaction or something about game rules and bonuses, the customer service staff at SweepSlots can deal with almost every type of query.<br /> <br />
                        </p>
                    </div>  
                </div>
                <div className="facts">
                    <div className="facts-head">
                        <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faCircleQuestion} /> How do I close my account at SweepSlots?</p>

                        <p className="para-data-area">
                        Closing an account at SweepSlots Casino is handled with care and every step is transparent for the user. Before permanently closing your account, evaluate whether a temporary break can be more suitable. In case you choose to proceed with the closure you will have to approach customer support directly as the account closure process is not automated by the web interface. <br /> <br />
 
The customer service representative will talk to you about the account closure implications and make sure that you understand that it is permanent and what it means for any remaining balances or rewards. After all checks are done and you approve your decision, the customer support team will deactivate your account. <br /> <br />
                        </p>
                    </div>
                </div>
                <div className="facts">
                    <div className="facts-head">
                        <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faCircleQuestion} /> Is SweepSlots a rip off/fraud?
                        </p>

                        <p className="para-data-area">
                        SweepSlots Casino is not a rip off or fraud. It works under the regulatory laws that are required for providing sweepstakes games which are legal and well-established form of gaming in the United States. The casino operates as per law and provides games and bonuses in a genuine manner. <br /><br />

                        SweepSlots follows the policies and rules that are aimed at ensuring the integrity and safety of the games it offers hence a brand that is trusted by its followers. The casino employs the latest security systems, such as SSL encryption to safeguard the personal and financial information of the players. These security measures are the proof of how SweepSlots Casino is dedicated to provide the safest and most reliable gaming platform. <br /> <br />

                        The customer support is also regularly pointed out as responsive and helpful adding to the casino’s good name as a trustworthy and customer-oriented platform. Regular auditing of their games and certified Random Number Generators (RNGs) guarantee fair and unbiased outcomes therefore providing confidence to players on the integrity of the gaming experience at SweepSlots. <br /> <br />

                        SweepSlots Casino is mostly viewed positively by users from all over the region. The clear gaming mechanisms are appreciated by the players, particularly the accurate details on how to utilize Sweeps Coins and the withdrawal process for cash prizes. <br />
                        </p>
                    </div>
                </div>
                <div className="facts">
                    <div className="facts-head">
                        <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faCircleQuestion} />Do you have to download software to play at SweepSlots casino?
                        </p>

                        <p className="para-data-area">
                        No. Players don’t need to download software to enjoy games in SweepSlots Casino. The system is 100% web-based and offers an efficient and user-friendly way to play its games instantly. This is in line with modern online gaming trends where ease of access and simplicity are in high esteem. <br /> <br />

The browser-based interface of SweepSlots Casino allows users to log in and play from any device, be it a desktop, laptop, tablet or smartphone even without downloading anything additional. This free space on user’s devices and makes it almost effortless to get started and play, in fact all one needs is an internet connection and compatible browser. <br /><br />

The games at SweepSlots are powered by HTML5 technology disregarding the need to download anything and run smoothly and efficiently directly in the web browser. This technology enables to play video slots with rich graphics and interactive features, delivering as good gaming quality as downloadable casino software can. The platform’s security is heightened by the fact that there is no mandatory software download as players do not have to face the hazards of downloading and installation of software.<br /> <br />
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

export default Sweep;