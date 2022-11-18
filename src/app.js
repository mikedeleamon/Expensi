import React from 'react'
import ReactDOM from 'react-dom'
import {Provider}  from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense} from './Actions/expenses'
import { setFilterText, sortByAmount, sortByDate } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
//normalize.css is a css reset(this is cross browser friendly)
import '../node_modules/normalize.css/normalize.css'
import "./styles/styles.scss"
import 'react-dates/lib/css/_datepicker.css'




//this element ID is an empty div in the index.html
const appRoot = document.getElementById('app')
const store = configureStore()
const jsx = (
//provider allows individual components to access the store
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
)

store.dispatch(addExpense({description:'water bill',note:'',amount: 12000,createdAt: 2929292}))
store.dispatch(addExpense({description:'gas bill',note:'',amount:83300,createdAt: 2920292}))
store.dispatch(addExpense({description:'electicity bill',note:'',amount:823300,createdAt: 3420292}))


const state = store.getState()
const visible = getVisibleExpenses(state.expenses,state.filters)

console.log(visible)

ReactDOM.render(jsx,appRoot)


 