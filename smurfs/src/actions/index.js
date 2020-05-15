




export const increment =(num) => {
    return{
        type: 'INCREMENT',
        payload: num
   
    }
}

export const decrement = (num) => {
    return{
        type: 'DECREMENT',
        payload: num
    }
}

// export const fetchSmurf =(dispatch) => {
//     return(dispatch) => {
        
//             axios.get('http://localhost:3333/smurfs')
//             .then(res =>{
//                 const smurfs = res.data
//                 console.log('what smurfs data', res)
//             })

//             .catch(error =>{
//                 console.log(error)
//             })
            
//     }

// }