/* eslint-disable no-unused-vars */
import React from 'react';
import amex from "../../assets/amexpress.png";
// import card from "../../assets/creditcard.png";
import end from '../../assets/end.png';
import gen from '../../assets/gen.png';
import lucky from "../../assets/luckybird.png";
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
 import bitcoin from "../../assets/bitcoin.png";
import eth from "../../assets/ethereum.png";

import SideArea from "./SideArea";



const LuckyCasino = () => {
    return (
        <>
        <Header></Header>
        {/* hero-area  */}
        <div className="container-fluid bg-blue">
        <div className="container">
        <div className="row">
        <div className="col-md-6">
            <div className="review-data">
            <h1>LUCKYBIRD CASINO REVIEW</h1>
            <h3>FREE COINS, SOCIAL GAMES, RTP & READER OPINIONS</h3>

            <p>
            Luckybird is one of the new entrants in the sweepstakes casino market. Sweepstakes online casinos are an innovative approach to traditional casinos. They allow players to enjoy the thrill of ordinary online gaming sites with the added benefit of being able to play casino-style games for fun. Luckybird Casino prides itself as the first provably fair sweepstakes social gaming platform in the world. Additionally, this platform only transacts in cryptocurrencies. Learn everything you need to know by reading our comprehensive Luckybird casino review. <br />
            </p>
            </div>
        </div>

        <div className="col-md-2"></div>
        <div className="col-md-4">
       <div className="top-casino-data-area mt-50">
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
             <a
               href="https://luckybird.io/"
               className="btn roboto-bold"
             >
               Play Now
             </a>
           </div>
           <a href="/lucky" className="review">
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
                    Unique crypto payment methods
                    </li>
                    <li>Many site-exclusive games</li>
                    <li>Social chat function</li>
                    <li>The games catalogue covers all bases</li>
                    <li>Live chat customer support available</li>
                </ul>
                </div>
            </div>
            <div className="col-md-6">
                <h3 className="pro-head">what we don't like</h3>
                <div className="like">
                <ul>
                    <li>No mobile app</li>
                    <li>
                     No live dealer games
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
            <img src={gen} alt="" />
            <img src={end} alt="" />
            </div>
            <div className="game-data">
            <h2>Popular Slots:</h2>
            <p>
            Bier Fest, Cannonball Bay, Gods of Giza, Hell Hot 100, Jason's Quest
            </p>
            </div>
            <div className="game-data game-data-payment">
            <h2>Payment Methods:</h2>
            <img src={eth} alt="" />
             <img src={bitcoin} alt="" />
             <img src={amex} alt="" />
            </div>

            <div className="game-data game-data-payment">
            <h2>Payment Methods:</h2>
            <ul>
                <li>                 
                    <span className="dot">#</span> Slots                 
                </li>
                <li>                 
                    <span className="dot">#</span> Blackjack                 
                </li>
                <li>                 
                    <span className="dot">#</span> Baccarat                 
                </li>
                <li>                 
                    <span className="dot">#</span> American Roulette                 
                </li>
                <li>                 
                    <span className="dot">#</span> Texas Hold'em Poker                     
                </li>
                <li>                 
                    <span className="dot">#</span> Classic Blackjack                
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
                <img src={lucky} alt="" />
            </div>
            </div>
            <h4>LuckyBird Casino Welcome Package</h4>
            <h2>Welcome bonus 5,000 GC, 1.41 Sweepstake Cash + 3 Treasure Chests</h2>
        
            <div className="button ">
                <a
                href="https://luckybird.io/"
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
            <h2>Everything You Need To Know About Luckybird</h2>
            <div className="row">
                <div className="facts">
                    <div className="facts-head">
                        <p className="headerTitle"><FontAwesomeIcon icon={faPenNib} className="icon" /> Facts about Luckybird Sweepstakes Casino</p>
                    
                        <div className="data-area-facts">
                        <h5>Logo</h5>
                        <img src={lucky} alt="" />
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
                        <h3>19
                        </h3>
                        </div>
                        <div className="data-area-facts2">
                        <h5>RTP</h5>
                        <h3>94.50%</h3>
                        </div>
                        <div className="data-area-facts">
                        <h5>Bonus</h5>
                        <h3>5000$
                        </h3>
                        </div>

                    </div>
                </div>
                <div className="facts">
                    <div className="facts-head">
                        <p className="headerTitle"><FontAwesomeIcon icon={faHashtag} className="icon" /> Casino Games – Slots and Sweep Games</p>

                        <p className="para-data-area">
                        There are about 150 games offered at Lucky Bird Casino. The games include slot games, arcade games, video poker, roulette, and blackjack. The list of games is slightly limited compared to what its competitors have to offer. However, the list features some classics that are worth registering to the platform. <br /> <br />

                    30 in-house titles cover different areas and offer an exciting unique experience. These are games that you cannot find elsewhere apart from Luckybird. The games include some niche puzzle games and unique variations of casino classics like roulette and blackjack. There are also mine and dice games that you can play at Luckybird casino with the virtual tokens offered. <br /> <br />

                    Compared to other sweepstakes casinos, Luckybird Casino has a relatively small collection of slot games. However, the few available games offer great graphics and innovative game play features. Some of the unique titles, titles at Luckybird Casino include Legends of Zeus, Stone Age, Rich Panda, and Ice Queen. These slots are developed by renowned and legitimate software providers including Endorphina, Genesis Gaming, Slotland Entertainment, and others. <br /> <br />
                        </p>
                    </div>
                </div>
                <div className="facts">
                    <div className="facts-head">
                        <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} />How to participate in the Luckybird sweepstakes?</p>

                        <p className="para-data-area">
                        This is a platform that offers casino-style games for fun. This means that you can participate in the games without risking your real money. Instead, you use in-game currencies. <br /> <br />

At Luckybird Casino, there are in-game currencies called gold coins (GC) that you can use to play casino games without risking your real cash. These coins can be obtained through bonuses or cryptocurrencies. Even though you can play these games without real money, you still get the chance to win money that you can redeem for real cash. <br /> <br />

However, it also depends on the type of virtual currencies you win. For instance, at Luckybird, you cannot exchange gold coins for real cash prizes. Instead, if you use sweepstake cash, you can redeem your winnings for either real money prizes or crypto prizes. At Luckybird sweepstakes, you need a minimum of 20 sweepstake cash to redeem them for cryptos. <br />
                        </p>
                    </div>
                </div>
                <div className="facts">
                    <div className="facts-head">
                        <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} /> What are the Virtual Tokens Used by Luckybird?
                        </p>

                        <p className="para-data-area">
                        There are two types of virtual currencies at Luckybird sweepstakes. They are: <br />

Gold coins (GC)– these are coins that are obtained through the Luckybird social casino bonus or by purchase. You can purchase the coins using cryptocurrencies. The coins allow you to participate in all games within the casino’s collection. Wagering with gold coins lets you experience the excitement of winning, just like what happens at traditional casinos. However, the winnings you achieve from playing with gold coins cannot be withdrawn. You can only continue using the coins to play more games. <br /> <br />

Sweepstake cash (SC)– these are virtual tokens that are exclusively earned through promotions, casino victories, and bonuses you get when you purchase more gold coins. What stands out about these coins is the fact that you can exchange them for real cash prizes. Since Luckybird only transacts with cryptocurrencies, you can exchange your SC for cryptocurrency prizes. At Luckybird you need at least 20 SC so you can redeem it into cryptos. <br /> <br />
                        </p> 
                    </div>
                </div>
                <div className="facts">
                    <div className="facts-head">
                        <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} /> What Payment Methods Does Luckybird Use for the Tokens?
                        </p>

                        <p className="para-data-area">
                        Luckybird does not support traditional reputable payment methods, it instead accepts various crypto payment options. You can pay at Luckybird with Bitcoin (BTC), Ethereum (LTC), Dogecoin, and Litecoin (ETH) meaning that you need a crypto wallet for the specific cryptocurrency you want to transact in. The same payment methods are applied for withdrawals at Luckybird sweepstakes. <br /> <br />

It is worth mentioning that you cannot play at Luckybird with the real money you deposit. Instead, you can use the cryptos you deposit into your Luckybird account to purchase gold coins. The price of the gold coins is indicated in dollars. So, it is up to you to convert the price into cryptos according to the current price and the market cap. For instance, the price of 100,000 gold coins is $10 (convert to your preferred crypto). <br /> <br />
                        </p>
                    </div>
                </div>
                <div className="facts">
                    <div className="facts-head">
                        <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faHashtag} /> The social Casino Provided by Luckybird
                        </p>

                        <p className="para-data-area">
                        Social casinos have a difference to real money casinos. A social casino is a gambling platform that provides free-to-play games. These are games that you do not have to spend money to play but they still offer the thrill of online gambling that you can receive at traditional casinos. <br /> <br />

At a social casino, there is no winning or losing as the gameplay is for fun. So, players do not have to worry about the monetary risks, or social, religious, or moral implications, of gambling. At Luckybird, there is a social casino where you can choose to play without risking any money. <br /> <br />

Instead of real money, at Luckybird Social Casino, you can play using virtual currencies. The gold coins at Luckybird can be acquired from bonuses. There are many bonuses and promotions at Luckybird where gold coins are offered so that you do not have to spend real money. <br /> <br />
                        </p> 
                    </div>
                </div>
            </div>
            <h2 className="mt-30">Luckybird Sweepstake Casino FAQs</h2>
            <div className="row">
            
                <div className="facts">
                    <div className="facts-head">
                        <p className="headerTitle"><FontAwesomeIcon icon={faCircleQuestion} className="icon" /> What is The Contact Number for the Luckybird Sweepstake Casino?
                        </p>

                        <p className="para-data-area">
                        Unfortunately, Luckybird does not have a contact number that you can use to communicate with its support agents. However, there are many customer support channels that you can use. The most popular and convenient one is the live chat option. This channel allows you to talk to real agents in real time. It is available 24/7 and the responses are very fast, allowing you to find solutions to urgent issues. The chat tool is located on the left-hand menu at the bottom of the screen<br /> <br />
                        </p>
                    </div>
                </div>
                <div className="facts">
                    <div className="facts-head">
                        <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faCircleQuestion} /> How do I Log In to Luckybird Sweepstake Casino?</p>

                        <p className="para-data-area">
                        If you have an active and fully registered account at Luckybird sweepstakes, then the login process should be a walk in the park. All you need is your username and your password. If you do not remember any of these details, you can recover your account through your email. There are no strict login steps at this online casino unless the platform suspects fraudulent activities.er 50% of the players have left a five-star rating on the Casino’s Trustpilot page. <br /> <br />
                        </p>
                    </div>
                </div>
                <div className="facts">
                    <div className="facts-head">
                        <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faCircleQuestion} /> Can I Make Purchases By Mobile at Luckybird Casino?
                        </p>

                        <p className="para-data-area">
                        Yes, you can pay by mobile at Luckybird. Since this platform allows you to play games on your phone, it is also good that you can pay via your mobile device. While regular mobile payment methods like electronic wallets are not allowed at Luckybird, the casino does allow you to pay with cryptocurrencies. <br /> <br />

                        As long as you have opened a crypto wallet and have deposited cryptocurrencies in it, you can easily transfer the cryptos into your casino account from your mobile. All you need to do is link your crypto wallet email to your casino account and have the wallet on your phone so you can approve and verify transactions. <br />
                        </p>
                    </div>
                </div>
                <div className="facts">
                    <div className="facts-head">
                        <p className="headerTitle"><FontAwesomeIcon className="icon" icon={faCircleQuestion} />What are The Bonuses at The Luckybird Casino’s Sweepstakes Games?
                        </p>

                        <p className="para-data-area">
                        There are many bonuses at Luckybird sweepstakes. For instance, there is a generous welcome bonus featuring 0.21 sweepstake cash and 1000 gold coins. Other offers like recurring daily and weekly bonuses also provide you with chances to earn free virtual tokens that you can spend to play the sweeps games at Luckybird. <br /> <br />

                        There is also a loyalty program that features different levels with advanced and exclusive bonuses like cashback, rakeback, and level-up bonuses. Daily tasks like verifying your account and following Luckybird’s social media accounts can also earn you bonuses from this online sweepstakes casino. Furthermore, special bonuses like treasure chest-boxes and treasure chests are available for grabs. <br /> <br />
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

export default LuckyCasino;