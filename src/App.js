import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';

import './assets/styles/global.css';
import './App.css';

import Header from './components/Header/header';
import TinderCards from './components/Cards/TinderCards';
import SwipeButtons from './components/Buttons/SwipeButtons';
import Chats from './components/Chats/Chats';

function App() {
  return (
    <div className="App">

     <Router>
       <Switch>
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

        {/* Chats screen */}
        {/* Individual chat screen */}
     </Router>

    </div>
  );
}

export default App;
