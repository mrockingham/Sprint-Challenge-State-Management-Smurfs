import React, {createContext, useState, useEffect, useReducer} from 'react'

import axios from 'axios'
import AppReducer from './AppReducer'
import AllSmurfs from '../components/AllSmurfs'


export const GlobalContext = createContext()


const initalState = {
    loading: true,
    error:'',
    smurf:[{}]
        
    
}

//Actions


///Get sumrfs
export const GlobalProvider = ({children}) =>{
const [state, dispatch] =useReducer(AppReducer, initalState)


useEffect(() => {
    axios
    .get('http://localhost:3333/smurfs')
    .then(res =>{
        console.log('my data', res.data.name)
        dispatch({
            type: 'FETCH_SUCCESS', 
            payload: res.data})
        
    })
    .catch(err => {
        dispatch({
            type: 'FETCH_ERROR'})
    })
    
}, [])


// const getSmufs =(smurf) =>{
//     dispatch({
//         type: 'GET_SMURFS'
//     })
// }


    ////Try with state
// const [theSmurfs, setTheSmurfs] = useState([])
//     useEffect(() => {
//             axios
//             .get('http://localhost:3333/smurfs')
//             .then(res =>{
//                 setTheSmurfs(res.data)
//             })
//             .catch(err => console.log(err))
            
//         }, [])

///Add smurfs
const addSmurf = (item) => {
    axios
    .post('http://localhost:3333/smurfs', item)
    .then(res =>{
        console.log(res)
    })
    .catch(err =>{console.log(err.res)})
}

//  delete smurfs

console.log('what is this222',state.smurf)





return(
    <GlobalContext.Provider value = {{
        smurf: state.smurf,
        addSmurf
        
       
    }}>
        <AllSmurfs />
        

        {children}
    </GlobalContext.Provider>
)
}