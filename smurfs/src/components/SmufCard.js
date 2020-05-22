import React from 'react'
// import { Button, Form, FormGroup, Label, Input, Card,  CardHeader, CardFooter,
//  CardBody, CardTitle, CardText } 
//  from 'reactstrap';

import {connect} from 'react-redux'



const SmurfCard = (props) =>{

return (

<div>

{props.smurfs.map(smurf =>{

  return(

  <div className='SmurfCardContainer'>
    <h2>{smurf.name}</h2>
   <h3>Age:{smurf.age}</h3>
    <h3>height: {smurf.height}</h3>
</div>

)
})}

</div>


  
 
 
)


 }
const mapStateToProps = state => {
  return{
    smurfs: state.smurfs
  }
}





  
  export default connect(mapStateToProps, {})(SmurfCard)