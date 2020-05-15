import React from 'React'

import axios from 'axios'

const initialState = {
    name: '',
    age: '',
    height: '',
    id: ''
}

const smurfList =(state =initialState, action)=>{
    console.log('smurf list reducer', action)
    switch (action.type) {
        case 'Fetch_Smurf':
            return{
                ...state,
                error:
                'Nothing is happening yet'
            }
        default:
        return state
    }
}


export  default smurfList