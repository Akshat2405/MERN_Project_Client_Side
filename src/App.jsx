
import React,{createContext,useReducer} from 'react';
import {Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Errorpage from './components/Errorpage';
import Logout from './components/Logout';
import {initialState,reducer} from '../src/reducer/UseReducer';
import './App.css';
export const UserContext=createContext();

const Routing=()=>{
  return(
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/about">
      <About/>
    </Route>
    <Route path="/contact">
      <Contact/>
    </Route>
    <Route path="/signin">
      <Signin/>
    </Route>
    <Route path="/signup">
      <Signup/>
    </Route>
    <Route path="/logout">
      <Logout/>
    </Route>
    <Route>
      <Errorpage/>
    </Route>
    </Switch>
  );
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <>
    <UserContext.Provider value={{state,dispatch}}>
      <Navbar/>
      <Routing/>
      </UserContext.Provider>
    </>
  );
}

export default App;
