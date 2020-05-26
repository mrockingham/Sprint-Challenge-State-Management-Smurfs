import React. {useReducer, useEffect} from 'react'
import axios from 'axios'

const initalState ={
    loading: true,
    error:'',
    smurf:[]
}

export const GlobalState2 ({children}) =>{
    const [state,dispatch] =useReducer(AppReducer,initalState)
   
    useEffect(() => {
        axios
        .get('http://localhost:3333/smurfs')
        .then(res =>{
            dispatch({type: 'FETCH_SUCCESS', payload: res.data})
            
        })
        .catch(err => {
            dispatch({type: 'FETCH_ERROR'})
        })
        
    }, [])


}

const GlobalState2 = () => {
    return (
        <div>
            
        </div>
    )
}

export default GlobalState2
