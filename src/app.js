import React from 'react'
import ReactDOM from 'react-dom'
import {Provider}  from 'react-redux'
import AppRouter,{history} from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startSetExpenses} from './actions/expenses'
import { login, logout } from './actions/auth'
import getVisibleExpenses from './selectors/expenses'
//normalize.css is a css reset(this is cross browser friendly)
import '../node_modules/normalize.css/normalize.css'
import "./styles/styles.scss"
import 'react-dates/lib/css/_datepicker.css'


//database
import {firebase} from './firebase/firebase'
//import { render } from 'node-sass'




//this element ID is an empty div in the index.html
const appRoot = document.getElementById('app')
const store = configureStore()
const jsx = (
//provider allows individual components to access the store
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
)
let hasRendered = false

const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx,appRoot)
        hasRendered = true
    }
}

 ReactDOM.render(<p>Loading...</p>,appRoot)


 firebase.auth().onAuthStateChanged((user)=>{
    if(user){ 
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(()=>{
        renderApp()
//checks if authenticated user is at the login screen
        if(history.location.pathname === '/'){
            history.push('/dashboard')
        }
    })
       
    }
    else{
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
 })
 //ReactDOM.render(jsx,appRoot)


 