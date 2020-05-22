import React, { useState} from 'react'

import { connect } from 'react-redux'
import { addSmurf } from '../actions/'




const AddSmurf = props => {
    const[newSmurf, setNewSmurf] = useState({
        name:'',
        age: '',
        height: ''
      
    })

    const handleChange = e =>{
       
        setNewSmurf({
            ...newSmurf,
            
        [e.target.name]: e.target.value

         })
}

    

return(

    <div>

  

    <div className='AddSmurfsContainer'>
            <form>
                <div className="AddForm">Add A Smurf</div>
                <div className="AddForm">
                  <div className='AddGroup'>
                    <label htmlFor='AddName'>Smurf Name</label>
                      <input 
                      type="text"
                       name="name" 
                       value={newSmurf.name}
                       onChange={handleChange}
                       placeholder='name'/>
                  </div>
                  <div className='AddGroup'>
                    <label htmlFor='AddAge'>Age</label>
                      <input 
                       type="text"
                       name="age"
                       value={newSmurf.age}
                       onChange={handleChange}
                       placeholder='age'/>
                  </div>
                  <div className='AddGroup'>
                    <label htmlFor='AddEmail'>height</label>
                      <input 
                       type="text"
                       name="height"
                       value={newSmurf.height}
                       onChange={handleChange}
                       placeholder='height'/>
                  </div>
                  <div className='footer'>
                <button type='button' className='btn'   onClick={() => props.addSmurf(newSmurf)}>submit</button>
                  </div>
                </div>
              </form>

    </div>
</div>
)
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}
export default connect (mapStateToProps, {addSmurf})(AddSmurf)