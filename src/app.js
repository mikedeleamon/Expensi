import React from 'react'
import ReactDOM from 'react-dom'
import {Provider}  from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetExpenses} from './actions/expenses'
import { setFilterText, sortByAmount, sortByDate } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
//normalize.css is a css reset(this is cross browser friendly)
import '../node_modules/normalize.css/normalize.css'
import "./styles/styles.scss"
import 'react-dates/lib/css/_datepicker.css'


//database
import './firebase/firebase'




//this element ID is an empty div in the index.html
const appRoot = document.getElementById('app')
const store = configureStore()
const jsx = (
//provider allows individual components to access the store
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
)

 ReactDOM.render(<p>Loading...</p>,appRoot)
 store.dispatch(startSetExpenses()).then(()=>{
     ReactDOM.render(jsx,appRoot)
 })

 //ReactDOM.render(jsx,appRoot)


 