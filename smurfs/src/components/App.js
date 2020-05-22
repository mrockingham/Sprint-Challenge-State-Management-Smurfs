import React, {useEffect} from "react";
import "./App.css";
import { connect } from 'react-redux'


import AddSmurf from './AddSmurf'
import {getSmurfs} from '../actions'
import SmurfCard from './SmufCard'



const App = ({getSmurfs}) =>{
  useEffect(()=> {
   
    getSmurfs()
  }, [getSmurfs] 
 )
 
  


  return(
<div>
  

<SmurfCard  />
  
 <AddSmurf />


</div>

  ) 
}

const mapStateToProps = state => {
  return{
    smurfs: state.smurfs,
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps, {getSmurfs})( App)
