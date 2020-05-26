export default (state,action) =>{
    switch(action.type){
        case 'FETCH_SUCCESS':
        return{

        
            loading:false,
            smurf: action.payload,
            error:''
        }
        case'FETCH_ERROR':
        return {
            loading: false,
            smurf:[],
            error:'something went wrong'
            
        }

        // case 'GET_SMURFS':
        // return{
        //     smurf: state.smurf.map(smurfs =>{
        //         return state.smurf
        //     })
        // }
        default:
            return state
    }

        
}