import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/header'
import Home from './components/home'
import Checkout from './components/checkout'
import Login from './components/login'
function App() {
  
  return (
    <Router>
    <div className="App">
     <Switch>
       <Route path="/checkout/">
       <Header/>
        <Checkout/>
       </Route>
       <Route path="/login">
       <Login/>
       </Route>
       <Route path='/'>
         <Header/>
         <Home/>
       </Route>
     </Switch>
 </div>
    </Router>
  );
}

export default App;
