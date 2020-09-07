import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';

function App() {
  return (
    <div className="App">
     <Header />

     <Router>
       <Switch>
        <Route path="/chat">
          <h1>Chat page</h1>
        </Route>
        <Route path="/">
          <h1>Homepage</h1>
        </Route>
       </Switch>
        {/* Tinder Cards */}
        {/*  Buttons bellow tinder cards */}

        {/* Chats screen */}
        {/* Individual chat screen */}
     </Router>

    </div>
  );
}

export default App;
