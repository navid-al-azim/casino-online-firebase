import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import BetReview from './component/Pages/BetReview.jsx'
import Blackjack from './component/Pages/Blackjack.jsx'
import Bonuse from './component/Pages/Bonuse.jsx'
import ChanReview from './component/Pages/ChanReview.jsx'
import ChumReview from './component/Pages/ChumReview.jsx'
import CrowReview from './component/Pages/CrowReview.jsx'
import DebitReview from './component/Pages/DebitReview.jsx'
import FastWith from './component/Pages/FastWith.jsx'
import FirstDeposit from './component/Pages/FirstDeposit.jsx'
import FortReview from './component/Pages/FortReview.jsx'
import FunRise from './component/Pages/FunRise.jsx'
import FunzReview from './component/Pages/FunzReview.jsx'
import HighReview from './component/Pages/HighReview.jsx'
import LuckReview from './component/Pages/LuckReview.jsx'
import LuckyCasino from './component/Pages/LuckyCasino.jsx'
import McluckReview from './component/Pages/McluckReview.jsx'
import Moblie from './component/Pages/Moblie.jsx'
import MoonReview from './component/Pages/MoonReview.jsx'
import NewCasino from './component/Pages/NewCasino.jsx'
import NoDeposit from './component/Pages/NoDeposit.jsx'
import Nolimit from './component/Pages/Nolimit.jsx'
import OnlineCasino from './component/Pages/OnlineCasino.jsx'
import Paypal from './component/Pages/Paypal.jsx'
import PlusReview from './component/Pages/PlusReview.jsx'
import Roulette from './component/Pages/Roulette.jsx'
import Skill from './component/Pages/Skill.jsx'
import SlotPages from './component/Pages/SlotPages.jsx'
import StakeReview from './component/Pages/StakeReview.jsx'
import Sweep from './component/Pages/Sweep.jsx'
import SweetReview from './component/Pages/SweetReview.jsx'
import TaofReview from './component/Pages/TaofReview'
import WowReview from './component/Pages/WowReview.jsx'
import ZulaReview from './component/Pages/ZulaReview.jsx'

const route = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children: [
      {
        path: "/",
        element: <OnlineCasino></OnlineCasino>,
      },
      {
        path: "/new-online-casinos",
        element: <NewCasino></NewCasino>,
      },
      {
        path: "/fast-withdrawal-casinos",
        element: <FastWith></FastWith>,
      },
      {
        path: "/first-deposit",
        element: <FirstDeposit></FirstDeposit>,
      },
      {
        path: "/casino-bonus",
        element: <Bonuse></Bonuse>,
      },
      {
        path: "/no-deposit",
        element: <NoDeposit></NoDeposit>,
      },
      {
        path: "/slot",
        element: <SlotPages></SlotPages>
      },
      {
        path: "/roulette",
        element: <Roulette></Roulette>
      },
      {
        path: "/blackjack",
        element: <Blackjack></Blackjack>
      },
      {
        path: "/mobile",
        element: <Moblie></Moblie>,
      },

      {
        path: "/paypal",
        element: <Paypal></Paypal>,
      },

      {
        path: "/skill",
        element: <Skill></Skill>,
      },

      {
        path: "/debit",
        element: <DebitReview></DebitReview>,
      },
    ]

  },
  {
    path:'/stake',
    element:<StakeReview></StakeReview>
  },
  {
    path:'/high',
    element:<HighReview></HighReview>
  },
  {
    path:'/moon',
    element:<MoonReview></MoonReview>
  },
  {
    path:'/sweet',
    element:<SweetReview></SweetReview>
  },
  {
    path:'/wow',
    element:<WowReview></WowReview>
  },
  {
    path:'/fun',
    element:<FunRise></FunRise>
  },
  {
    path:'/lucky',
    element:<LuckyCasino></LuckyCasino>
  },
  {
    path:'/sweep',
    element:<Sweep></Sweep>
  },
  {
    path:'/noLimit',
    element:<Nolimit></Nolimit>
  },
  {
    path:'/bet',
    element:<BetReview></BetReview>
  },
  {
    path:'/tao',
    element:<TaofReview></TaofReview>
  },
  {
    path:'/plz',
    element:<PlusReview></PlusReview>
  },
  {
    path:'/fort',
    element:<FortReview></FortReview>
  },
  {
    path:'/mcluck',
    element:<McluckReview></McluckReview>
  },
  {
    path:'/funz',
    element:<FunzReview></FunzReview>
  },
  {
    path:'/luckyland',
    element:<LuckReview></LuckReview>
  },
  {
    path:'/chum',
    element:<ChumReview></ChumReview>
  },
  {
    path:'/chan',
    element:<ChanReview></ChanReview>
  },
  {
    path:'/zula',
    element:<ZulaReview></ZulaReview>
  },
  {
    path:'/crow',
    element:<CrowReview></CrowReview>
  },
 
 
  


]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
