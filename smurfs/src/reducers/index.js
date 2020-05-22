import {combineReducers} from 'redux'
import counterReducer from './counter'
import loggedReducer from './isLogged'
import smurfList from './smurfList'

const allReducers =combineReducers({

    counterReducer: counterReducer,
    loggedReducer: loggedReducer,
    smurfList: smurfList

})

export default allReducers