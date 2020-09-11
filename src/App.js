import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

import './assets/styles/global.css';
import './App.css';

import Header from './components/Header/header';
import TinderCards from './components/Cards/TinderCards';
import SwipeButtons from './components/Buttons/SwipeButtons';
import Chats from './components/Chats/Chats';
import ChatScreen from './components/Chats/ChatScreen/index';

function App() {
  return (
    <div className="App">

     <Router>
       <Switch>
         {/* Individual chat screen */}
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>  
          
          {/* Chats screen */}
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>

          {/* Tinder Cards */}
          <Route path="/">
            <Header />
            <TinderCards />
            {/*  Buttons bellow tinder cards */}
            <SwipeButtons />
          </Route>
       </Switch>
     </Router>

    </div>
  );
}

export default App;
