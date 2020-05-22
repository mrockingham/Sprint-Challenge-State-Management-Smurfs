

import{ 
FETCH_SMURFS_SUCCESS, 
 FETCH_SMURFS_FAILURE,
 FETCH_SMURFS_START,
FETCH_SMURFS } 
from '../actions/'

const initialState = {
    loading: false,
    smurfs: [],
    error: ''
    
    
}
 const smurfList = (state = initialState, action)=>{
    
    switch (action.type) {
        case FETCH_SMURFS_START:
            return{
                ...state,
                loading: true
            }

        case FETCH_SMURFS_SUCCESS:
            return{
                ...state,
                loading: false,
                smurfs: [
                    ...state.smurfs,
                    action.payload.smurfs
                ]
            }    

        case FETCH_SMURFS_FAILURE:
            return{
                ...state,
                loading: false
            }
        
        case FETCH_SMURFS:
            return{
                ...state,
                smurfs:[
                    ...state.smurfs,
                    action.payload
                ]
            }
            default:
                return state
    }
}


export  default smurfList