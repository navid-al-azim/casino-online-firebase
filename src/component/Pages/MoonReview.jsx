/* eslint-disable no-unused-vars */
import {
    faCircleQuestion,
    faHashtag,
    faPenNib,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import amex from "../../assets/amexpress.png";
import bitcoin from "../../assets/bitcoin.png";
import dogo from "../../assets/dogecoin.png";
import eth from "../../assets/ethereum.png";
import monosping from "../../assets/moonspin-casino.png";
import visa from "../../assets/visaCard.png";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SideArea from "./SideArea";

const MoonReview = () => {
  return (
    <div>
      <div>
        <Header></Header>
        {/* hero-area  */}
        <div className="container-fluid bg-blue">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="review-data">
                  <h1> MOONSPIN CASINO REVIEW </h1>
                  <h3>
                    {" "}
                    FREE COINS, SOCIAL GAMES, SWEEPSTAKES RTP & READER OPINIONS{" "}
                  </h3>

                  <p>
                    Moonspin Casino operates legally since 2023. The platform
                    gained instant traction in the sector mostly because it
                    offers real cash prices, hosts a vast catalog of slots and
                    table games, and a bunch of exclusive offers. There are also
                    unique bonuses that all players have access to and a
                    responsive customer experience. There is so much to learn
                    about this sweepstake casino. For this reason, this Moonspin
                    Sweepstake casino review will discuss all the important
                    things you should know about this platform including its
                    payment details, games, features, and testimonials.
                  </p>
                </div>
              </div>

              <div className="col-md-2"></div>

              <div className="col-md-4">
                <div className="top-casino-data-area mt-50">
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
                      <a
                        href="https://moonspin.us/"
                        className="btn roboto-bold"
                      >
                        Play Now
                      </a>
                    </div>
                    <a href="/moon" className="review">
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
                <h1>Pros & Cons of High 5 Casino</h1>

                <div className="row">
                  <div className="col-md-6">
                    <h3 className="pro-head">what we like</h3>
                    <div className="like">
                      <ul>
                        <li>Social media tournaments & contests</li>
                        <li>Partnered with reputable LuckyStreak</li>
                        <li>Excellent customer support channels</li>
                        <li>100+ slots and games variety</li>
                        <li>Great bonuses, fresh promotions</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="pro-head">what we don't like</h3>
                    <div className="like">
                      <ul>
                        <li>Winnings capped at $100</li>
                        <li>No fiat currency transactions</li>
                        <li>$3 fee for redeeming your winnings</li>
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
                </div>
                <div className="game-data game-data-payment">
                  <h2>Payment Methods:</h2>
                  <img src={visa} alt="" />
                  <img src={amex} alt="" />
                  <img src={bitcoin} alt="" />
                  <img src={eth} alt="" />
                  <img src={dogo} alt="" />
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
                    <img src={monosping} alt="" />
                  </div>
                </div>
                <h4>Moonspin Casino Welcome Package</h4>
                <h2>Get 3 Moon Coins + 30000 Gold Coins Over 3 Days</h2>

                <div className="button ">
                  <a
                    href="https://moonspin.us/"
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
              <h2>Everything You Need To Know About Moonspin Casino</h2>
              <div className="row">
                <div className="facts">
                  <div className="facts-head">
                    <p className="headerTitle">
                      <FontAwesomeIcon icon={faPenNib} className="icon" /> Facts
                      About Moonspin Casino
                    </p>

                    <div className="data-area-facts">
                      <h5>Logo</h5>
                      <img src={monosping} alt="" />
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
                      <h3>65</h3>
                    </div>
                    <div className="data-area-facts2">
                      <h5>RTP</h5>
                      <h3>94.00%</h3>
                    </div>
                    <div className="data-area-facts">
                      <h5>Bonus</h5>
                      <h3>30000 GC</h3>
                    </div>
                  </div>
                </div>
                <div className="facts">
                  <div className="facts-head">
                    <p className="headerTitle">
                      <FontAwesomeIcon icon={faHashtag} className="icon" />{" "}
                      Casino Games – Online Slots and Sweep Games
                    </p>

                    <p className="para-data-area">
                      The casino’s game library numbers 55+ slot titles, nearly
                      all of which are video slots. While most of these slots
                      don’t offer anything spectacular in terms of bonus
                      features, there are a few that are very popular among
                      frequent players at Moonspin Casino. <br /> <br />
                      They include Vampire’s Eclipse, a medium-volatility slot,
                      that boasts an impressive RTP of 96.95%. If you’re looking
                      for something simpler, give Book of Alchemy a try. It’s a
                      5-reel slot with 25 paylines, 96.15% RTP, and ultra-simple
                      play rules. <br /> <br />
                      Jackpots and mega-ways are quite rare at this sweep’s
                      casino. The only jackpot slot that is worth mentioning and
                      popular at Moonspin is Jade Wins (96.05% RTP), which is at
                      the same time a mega-ways title with 243 paylines.
                      Sheriff’s Justice is also a good choice if you’re into
                      risky betting since its volatility is sky-high; to
                      compensate, this slot offers a remarkable hit frequency of
                      around 39%. <br /> <br />
                      Furthermore, Moonspin’s got its spin on popular mechanics
                      like Hold & Wins and Megaways, so it’s more than just your
                      usual lineup of slot extras. They’re stepping outside the
                      standard slot box. <br /> <br />
                    </p>
                  </div>
                </div>
                <div className="facts">
                  <div className="facts-head">
                    <p className="headerTitle">
                      <FontAwesomeIcon className="icon" icon={faHashtag} />{" "}
                      Moonspin Casino Payout Rate (RTP)
                    </p>

                    <p className="para-data-area">
                      The payout rate for the Moonspin casino slots differs
                      significantly depending on the game and the provider.
                      Original games by Moonspins have a more impressive payout
                      rate than the rest. The average payout rate for Moonspin
                      original games is around 97.65%, while the average RTP for
                      the other games is around 96.95%. <br /> <br />
                      However, this is still quite impressive compared to what
                      other online slots and casinos have to offer. Also, there
                      are good casino games with RTPs that are higher than the
                      average. You can always check out the RTP for a game in
                      the information section before you choose to play it.{" "}
                      <br /> <br />
                    </p>
                  </div>
                </div>
                <div className="facts">
                  <div className="facts-head">
                    <p className="headerTitle">
                      <FontAwesomeIcon className="icon" icon={faHashtag} />{" "}
                      Moonspin Casino Software
                    </p>

                    <p className="para-data-area">
                      Like any other online casino, most of the exclusive games
                      provided by Moonspin Casino are sourced from outside
                      vendors. Most of the games offered at Moonspin are
                      developed by the game studio Lucky. <br />
                      <br />
                      This software provider delivers vibrant video slots,
                      top-notch graphics, animations, and bonus features that
                      players find exciting. <br /> <br />
                      Other than Lucky, there are a few software providers. This
                      is a downside for how Moonspin casino works because most
                      of its peers offer games from several software providers
                      while this casino mostly carries games from one game
                      studio. However, this does not take away from the quality
                      of the games and the players’ experiences. <br /> <br />
                      In addition to working with renowned software providers
                      social other online casinos, you should also note that
                      Moonspin has made a name for itself with its selection of
                      exclusive, originally developed games that you won’t find
                      anywhere else. <br />
                      <br />
                      These creative and unique titles bring an innovative twist
                      to classic casino gameplay. They also offer a unique
                      experience that keeps players coming back for more at this
                      online casino. <br />
                    </p>
                  </div>
                </div>
                <div className="facts">
                  <div className="facts-head">
                    <p className="headerTitle">
                      <FontAwesomeIcon className="icon" icon={faHashtag} />{" "}
                      Moonspin Casino Live Casino
                    </p>

                    <p className="para-data-area">
                      This online casino does have a live section. Moonspin’s
                      live casino offerings provide an authentic and immersive
                      experience that replicates the thrills of playing at a
                      real land-based casino. <br /> <br />
                      For instance, there are live roulette tables, streamed in
                      high definition from professional studios, that allow you
                      to watch live dealers spin the roulette wheel and place
                      bets on classic European or American layouts. With games
                      running 24/7 at varied betting limits, you’ll always find
                      the perfect live roulette experience. <br /> <br />
                      Additionally, there are a host of live casino games, for
                      card game fans. For instance, Moonspin’s live blackjack
                      card games let you take a virtual seat at casino-grade
                      tables as real dealers run the action. <br />
                      <br />
                      Place bets, with dice games make strategic decisions like
                      hitting or standing, and enjoy true-to-life blackjack
                      excitement.
                    </p>
                  </div>
                </div>
                <div className="facts">
                  <div className="facts-head">
                    <p className="headerTitle">
                      <FontAwesomeIcon className="icon" icon={faHashtag} />{" "}
                      Payment Methods at Moonspin Casino
                    </p>

                    <p className="para-data-area">
                      Moonspin Sweepstake Casino is lacking when it comes to
                      payment methods. This is not an ordinary online casino
                      that offers a vast range of payment methods like bank
                      cards and electronic wallets. <br /> <br />
                      At Moonspins, you can only make monetary transactions via
                      cryptocurrencies. This means that any payment method that
                      has to do with fiat currencies is not accepted at this
                      online casino. For deposits, you can make them in Bitcoin,
                      Dogecoin, Ethereum, Litecoin, Tether, Ripple, and Tron.{" "}
                      <br /> <br />
                      You should know that you cannot make a direct cash deposit
                      at Moonspin because this casino does not operate with real
                      currencies yet. Still, they plan to have fiat payments
                      accessible soon. <br />
                      <br />
                      Currently, you can use your cryptocurrencies to purchase
                      the virtual tokens at the casino and then use the virtual
                      tokens to play. The tokens can also be acquired as free
                      handouts and bonuses from the casino. <br />
                      <br />
                      When it comes to the withdrawal methods, it is almost
                      similar to the payment method. You have to wait until your
                      moon coins are eligible for redemption. While you will not
                      receive real money when you win at Moonspin casino, you
                      will receive moon coins, which are redeemable for real
                      money. <br />
                      <br />
                      One moon coin is worth $1. However, you still cannot
                      redeem the moon coins into fiat currencies. You have to
                      redeem them for cryptocurrencies, which you can then use
                      as you wish or convert to fiat currencies if you wish. So,
                      it is safe to say that this sweepstake casino is also
                      crypto as it only accepts deposits and withdrawals in
                      cryptocurrencies at the moment. Nevertheless, keep an eye
                      out for coming changes soon.
                      <br /> <br />
                    </p>
                  </div>
                </div>
              </div>
              <h2 className="mt-30">Moonspin Casino FAQs</h2>
              <div className="row">
                <div className="facts">
                  <div className="facts-head">
                    <p className="headerTitle">
                      <FontAwesomeIcon
                        icon={faCircleQuestion}
                        className="icon"
                      />{" "}
                      What is the contact number for the Moonspin Casino?
                    </p>

                    <p className="para-data-area">
                      At the moment, Moonspin Sweepstake Casino does not have a
                      contact number. However, there are several customer
                      support channels that you can use if you need assistance
                      of any kind or want to report moonspin casino fraud.
                      <br />
                    </p>
                  </div>
                </div>
                <div className="facts">
                  <div className="facts-head">
                    <p className="headerTitle">
                      <FontAwesomeIcon
                        className="icon"
                        icon={faCircleQuestion}
                      />{" "}
                      How do I log in to Moonspin Casino?
                    </p>

                    <p className="para-data-area">
                      Once you have registered your account with Moonspin
                      Sweepstake Casino, logging in should be a walk in the
                      park. <br /> <br />\ The steps below should guide you
                      through the straightforward login process at Moonspin
                      Sweepstake Casino: <br />
                      Visit the official Moonspin Casino website using the web
                      browser on your preferred device <br />
                      <br />
                      Click on login and provide your email or username and
                      password to log in <br /> <br />
                      If you activated the two-factor authentication feature,
                      you have to go through an additional verification step to
                      log into your account. <br /> <br />
                      Once you are logged in, you can start playing the games
                      and Moonspin casino slots <br /> <br />
                    </p>
                  </div>
                </div>
                <div className="facts">
                  <div className="facts-head">
                    <p className="headerTitle">
                      <FontAwesomeIcon
                        className="icon"
                        icon={faCircleQuestion}
                      />
                      How do I close my account at Moonspin Casino?
                    </p>

                    <p className="para-data-area">
                      If you want to close your account completely at Moonspin
                      Sweepstake Casino, you have to go through the process
                      below: <br /> <br />
                      Contact the support staff via email (support@moonspin.us){" "}
                      <br /> <br />
                      Make sure your email details your reason for wanting to
                      close your account <br /> <br />
                      Wait for the support agents to review your email and
                      approve your account closure <br /> <br />
                      Once your request is approved, you will receive an email
                      to confirm that you still want to go ahead with the
                      account closure <br /> <br />
                      If you confirm your request, the support agents will close
                      your account automatically from their end. This way, you
                      will not be able to log in anymore. Your account will
                      cease existing. <br /> <br />
                    </p>
                  </div>
                </div>
                <div className="facts">
                  <div className="facts-head">
                    <p className="headerTitle">
                      <FontAwesomeIcon
                        className="icon"
                        icon={faCircleQuestion}
                      />
                      Is Moonspin Casino a rip-off/fraud?
                    </p>

                    <p className="para-data-area">
                      No, Moonspin Casino is a legitimate gambling platform and
                      sweepstake casino. Below are some proofs of its
                      legitimacy. <br /> <br />
                      The site is properly licensed and regulated. <br /> <br />
                      The casino is upfront and transparent about its business
                      operations, ownership, features, and legal models on its
                      website. <br /> <br />
                      The site uses 256-bit SSL encryption for clients’ data
                      protection as well as two-factor authentication. <br />{" "}
                      <br />
                      Moonspin casino has a positive reputation, despite being
                      active for just a year. <br /> <br />
                      The casino promoted responsible gaming by offering tools
                      like deposit limits, self-exclusion, and reality checks.{" "}
                      <br /> <br />
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
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MoonReview;
