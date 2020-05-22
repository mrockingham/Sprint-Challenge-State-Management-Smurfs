    import axios from 'axios'

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'
export const FETCH_SMURFS ='FETCH_SMURFS'


export const getSmurfs = () => dispatch => {
    dispatch({type: FETCH_SMURFS_START, payload:{loading: true} })
    
    axios.get('http://localhost:3333/smurfs')
        .then(res =>{
            dispatch({type: FETCH_SMURFS_SUCCESS, payload: {smurfs: res.data, loading:false}})
        })
        .catch(error =>{
            dispatch({type: FETCH_SMURFS_FAILURE, payload: {error: error}})
        }
        )
    }

    export const addSmurf = newSmurf => dispatch => {
        dispatch ({type:FETCH_SMURFS})
        axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then(res =>{
            console.log('post',res)
            
        })

    }
 
