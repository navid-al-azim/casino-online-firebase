/* eslint-disable no-unused-vars */
import React from "react";
import gog from "../../assets/gog.svg";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TwoCasino from "./TwoCasino";

const Blackjack = () => {
    return (
        <>

      {/* hero area  */}
      <div className="container-fluid bg-blue">
        <div className="container">
          <div className="row">
            <div className="online-casino-data">
              <h1 className="roboto-black "> BLACKJACK ONLINE</h1>
              <h2 className="roboto-regular">
              FOR FREE & WITH REAL MONEY (+ BEST TIPS AND TRICKS)
              </h2>
              <p>
              Blackjack, well known as Twenty-One, is an enormously popular classic card game, with millions of gamers playing it online. It can be found in most online casinos. One reason for its popularity is that the card game is easy to learn and simple to play. Additionally, the rules are simple, the play is thrilling and there is an opportunity for large wins when you play online blackjack games. To give it a try, we have a blackjack demo for you to play on this page!
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

      <TwoCasino></TwoCasino>

      
      <div className="container-fluid bg-blue">
        <div className="container new-casino text-center color
        ">
          <h2>WHAT IS ONLINE BLACKJACK?</h2>
          <div className="row">
            <div className="col-md-12">
              <p>
                Online blackjack is an online casino card game that pits gamers against the dealer. It is played with one or more decks of cards with a standard deck having 52 cards. The casino game requires a lot of luck and little skill that has something to do with learning a basic strategy. <br />

                One thing that makes playing online blackjack casino games very attractive to players is that there is an opportunity to use basic strategies to win. In fact, a player who mathematically plays a perfect game and is good at counting cards at Blackjack and he has greater odds of winning. Even a casual player who plays a reasonably good game has a good chance of winning as the casino play odds are always less. <br />
              </p>
            </div>
          
          </div>
        </div>
      </div>


        <div className="container-fluid">
        <div className="container">
            <div className="row mt-50">
            <div className="fqa-data text-center ">
                <p className="">ADDITIONAL RULES</p>
                <img src={fqa} alt="" />
            </div>

            <div className="row">
                <div className="facts">
                <div className="facts-head">
                    <p className="headerTitle">
                    <FontAwesomeIcon icon={faCircleQuestion} className="icon" />{" "}
                    SPLITTING PAIRS
                    </p>

                    <p className="para-data-area">
                    Splitting pairs happens when a gamer’s initial two-card hand includes two cards of the same value. The player can split the card into two separate hands when it is their turn and then receive an extra card for each hand from the dealer.<br />
                    </p>
                </div>
                </div>
                <div className="facts">
                <div className="facts-head">
                    <p className="headerTitle">
                    <FontAwesomeIcon icon={faCircleQuestion} className="icon" />{" "}
                    DOUBLE DOWN
                    </p>

                    <p className="para-data-area">
                    Doubling down when playing blackjack online happens when a player doubles their starting bet in the middle of a hand after which they receive an extra card. There are three situations in which doubling down is profitable; your cards total 11 and the dealer’s face-up is lower, you have a soft 16, 17, or 18, and when you have a hard nine, the dealer’s face-up card is two-six.<br />
                    </p>
                </div>
                </div>
                <div className="facts">
                <div className="facts-head">
                    <p className="headerTitle">
                    <FontAwesomeIcon icon={faCircleQuestion} className="icon" />{" "}
                    INSURANCE
                    </p>

                    <p className="para-data-area">
                    Insurance acts as a side bet separate from the original stake when playing blackjack online. It is offered when the dealer’s up-card is an ace and is insured against the dealer’s hand ‘blackjack’. An insurance bet pays out at 2/1 with the maximum bet being half a player’s original wager.
                    <br /> <br />
                    </p>
                </div>
                </div>
                <div className="facts">
                <div className="facts-head">
                    <p className="headerTitle">
                    <FontAwesomeIcon icon={faCircleQuestion} className="icon" />{" "}
                    SETTLEMENT
                    </p>

                    <p className="para-data-area">
                    In settling a bet, the dealer determines the result of the bet whether it is a winner or a loser. When a winning bet is settled, a gamer is able to claim his/her winnings. Winning wagers happen when the dealer does not have a Blackjack, has a count value of more than 21 or less than the player’s hand, or has a Blackjack in an insurance wager.<br />
                    <br /> <br />
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>


        <div className="container-fluid bg-blue">
        <div className="container new-casino text-center color
        ">
          <h2>FREE BLACKJACK DEMO</h2>
          <div className="row">
            <div className="col-md-12">
              <p>
              Have you always wanted to learn the rules of classic blackjack, try your hand to count cards, or maybe even test out the effectiveness of the basic strategy? Well, no time like the present! We've prepared a free demo of a free online blackjack game for you to enjoy - no sign-up required, no strings attached! Give it a try and see how much you'll win by yourself, and if you're struggling, the "i" icon in the top left corner will give you a hint based on the basic strategy. <br />
              </p>
            </div>
          
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row mt-50">
          <div className="fqa-data text-center mt-50">
            <p className="headerTitle"> 5 MISTAKES NEW BLACKJACK PLAYERS DO</p>
            <img src={gog} alt="" />
          </div>

          <div className="row">
            <div className="facts2">
              <div className="facts-head">
                <p className="headerTitle">
                  <FontAwesomeIcon icon={faCircleQuestion} className="icon" />{" "}
                  SPLITTING A PAIR OF 10S
                </p>
              </div>
            </div>
            <div className="facts2">
              <div className="facts-head">
                <p className="headerTitle">
                  <FontAwesomeIcon icon={faCircleQuestion} className="icon" />{" "}
                  DOUBLE DOWN ON 11 WHEN THE DEALER’S UPCARD IS 10
                </p>

              </div>
            </div>
            <div className="facts2">
              <div className="facts-head">
                <p className="headerTitle">
                  <FontAwesomeIcon icon={faCircleQuestion} className="icon" />{" "}
                  DOUBLING DOWN ON 11 WHEN THE DEALER SHOWS AN ACE
                </p>
              </div>
            </div>
            <div className="facts2">
              <div className="facts-head">
                <p className="headerTitle">
                  <FontAwesomeIcon icon={faCircleQuestion} className="icon" />{" "}
                  STANDING ON 12 WHEN THE DEALER’S UPCARD IS TWO OR THREE
                </p>
              </div>
            </div>
            <div className="facts2">
              <div className="facts-head">
                <p className="headerTitle">
                  <FontAwesomeIcon icon={faCircleQuestion} className="icon" />{" "}
                  STANDING ON A SOFT 18 WHEN THE DEALER’S UPCARD IS 9
                </p>
              </div>
            </div>
           
          </div>
        </div>
      </div>


      {/* Online Casinos-area fqa */}

      <div className="container">
        <div className="row mt-50">
          <div className="fqa-data text-center mt-50">
            <p className="headerTitle"> FREQUENTLY ASKED QUESTIONS ABOUT ONLINE BLACKJACK</p>
            <img src={fqa} alt="" />
          </div>

          <div className="row">
            <div className="facts">
              <div className="facts-head">
                <p className="headerTitle">
                  <FontAwesomeIcon icon={faCircleQuestion} className="icon" />{" "}
                  HOW DO YOU PLAY BLACKJACK?

                </p>

                <p className="para-data-area">
                To play blackjack, select the variant you want to play and find a table. Place your bet and look at the cards dealt to you and the dealer. Use basic strategy or gut instinct to make your next move. When you're happy with your hand, stand to close out your hand then watch the outcome as the dealer plays out their hand. Take your winnings and relax or play blackjack in another round.<br /> <br />
                  <br /> <br />
                </p>
              </div>
            </div>
            <div className="facts">
              <div className="facts-head">
                <p className="headerTitle">
                  <FontAwesomeIcon icon={faCircleQuestion} className="icon" />{" "}
                  CAN I PLAY BLACKJACK FOR FREE?
                </p>

                <p className="para-data-area">
                Yes. Many real-money blackjack sites have free blackjack games that players can play without making a real wager. This allows players to play blackjack while learning blackjack rules at their pace with no monetary loss.
                  <br /> <br />
                </p>
              </div>
            </div>
            <div className="facts">
              <div className="facts-head">
                <p className="headerTitle">
                  <FontAwesomeIcon icon={faCircleQuestion} className="icon" />{" "}
                  WHAT’S THE TRICK TO WINNING AT BLACKJACK?
                </p>

                <p className="para-data-area">
                If you’re looking to play blackjack and win real money blackjack games, learning the basic blackjack strategy is essential. Memorizing the right way to stand, hit, double down, and split your hand is a must when playing blackjack. To cut the house edge, stand when your hand is 12-16 and the dealer is 2-6, Double 11 versus the dealer's 2-10, hit when your hand is 12-16 and when the dealer has 7-Ace, Hit or double Aces-6 and always split Aces and 8s.
                  <br /> <br />
                </p>
              </div>
            </div>
            <div className="facts">
              <div className="facts-head">
                <p className="headerTitle">
                  <FontAwesomeIcon icon={faCircleQuestion} className="icon" />{" "}
                  IS BLACKJACK RIGGED?
                </p>

                <p className="para-data-area">
                No. Online blackjack is as fair as blackjack in land-based casinos. However, the odds of winning blackjack online are less as cards are shuffled after each hand eliminating the possibility of card counting. <br />
                  <br /> <br />
                </p>
              </div>
            </div>
            <div className="facts">
              <div className="facts-head">
                <p className="headerTitle">
                  <FontAwesomeIcon icon={faCircleQuestion} className="icon" />{" "}
                  WHAT DOES IT MEAN TO SPLIT?
                </p>

                <p className="para-data-area">
                Splitting occurs when a player is dealt with two cards of the same value. The player splits the cards into two separate hands and is dealt another card on each. If a player decides to split, s/he must place a second bet to match their initial wager.
                  <br /> <br />
                </p>
              </div>
            </div>
            <div className="facts">
              <div className="facts-head">
                <p className="headerTitle">
                  <FontAwesomeIcon icon={faCircleQuestion} className="icon" />{" "}
                  ARE THERE ANY WORKING BLACKJACK STRATEGIES?
                </p>

                <p className="para-data-area">
                There are a few blackjack strategies you can employ to boost your bankroll at Blackjack. These include going for a table that offers the double-down option, doubling down with an ace against the dealer’s six, and split Aces and eights. Another blackjack strategy worth mentioning is to stand when there’s a hand that could bust against a dealer’s card. Read more online casino reviews and be the best player on blackjack.
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

export default Blackjack;