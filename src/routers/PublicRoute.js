import React from "react";
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'
import Header from '../components/Header'

//...rest spreads out all other object props that are not explicitly destructured
export const PublicRoute = ({isAuthenticated,component:Component,...rest}) => (
    <Route {...rest} component = {(props)=>{
        //renders component if isAuth comes back true
        !isAuthenticated ? (
        <div>
            {/* <Header/> */}
            <Component {...props}/>
        </div>) : (
            <Redirect to ='/dashboard' />
        )
 

    }} />
);
   
const mapStatetoProps = (state) => ({
    isAuthenticated:!!state.auth.uid
})

export default connect (mapStatetoProps)(PublicRoute)