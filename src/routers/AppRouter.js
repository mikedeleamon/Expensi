import React from 'react'
import {Router,Route,Switch,Link, NavLink} from 'react-router-dom'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'
import  LoginPage  from '../components/LoginPage'
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRoute'

const history = createHistory()













const AppRouter = () => (
   // building a sourcemap with BrowserRouter
   //BrowserRouter only takes one tag
    <Router history = {history}>
        <div>
            <Header/>
            {/* Switch looks at all the routes and only stops when there's a match (good to create 404 pages) */}
            <Switch>
            {/*Route = an individual page that takes in Path and the Component that will be rendered
                exact = makes sure that path works on an explicit match in text*/}
                <Route path= "/" component={LoginPage} exact = {true} />
                <PrivateRoute path= "/dashboard" component={ExpenseDashboardPage} exact = {true} />
                <PrivateRoute path="/create" component = {AddExpensePage} exact = {true}/>
                <PrivateRoute path="/edit/:id" component = {EditExpensePage} />
                <Route path="/help" component = {HelpPage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>  
    </Router>
)

export default AppRouter