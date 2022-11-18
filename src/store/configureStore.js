import {createStore, combineReducers } from 'redux'
import expenseReducer from '../reducers/expenses'
import filterReducer from '../reducers/filters'

//store creation
export default () => {
const store = createStore(
    combineReducers({
        expenses:expenseReducer,
        filters:filterReducer

    }),
    //allows chrome extension to view redux actions and store changes
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
    return store
}
    