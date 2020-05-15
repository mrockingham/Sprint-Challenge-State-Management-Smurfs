import React, { Component } from "react";
import "./App.css";
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from '../actions'
import  SmurfCard from './SmufCard'


const App = () =>{
  const count =useSelector(state => state.counterReducer)
  const isLogged =useSelector(state=> state.loggedReducer)
  const dispatch = useDispatch()


  return(
<div>
  <SmurfCard />
  <h1>   Counter {count}</h1>
  <button onClick={() => dispatch(increment(5))}>+</button>
  <button onClick={()=> dispatch(decrement(5)) }>-</button>

{isLogged ? <h3> Valuable Information i shouldn't see</h3> : ''}
</div>

  ) 
}

export default App;
