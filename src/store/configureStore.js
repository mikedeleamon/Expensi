import {createStore, combineReducers,applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import expenseReducer from '../reducers/expenses'
import filterReducer from '../reducers/filters'
import authReducer from '../reducers/auth'

  //allows chrome extension to view redux actions and store changes
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//store creation
export default () => {
const store = createStore(
    combineReducers({
        expenses:expenseReducer,
        filters:filterReducer,
        auth:authReducer

    }),
   composeEnhancers(applyMiddleware(thunk))
   
    //allows chrome extension to view redux actions and store changes
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
    return store
}
    