import React from "react";
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import { startLogout } from "../actions/auth";


export const Header = ({startLogout}) => (
    <header>
        <h1>Expensi</h1>
        {/* {NavLink allows for styling w/ activeClassName} */}
        <NavLink to='/dashboard' activeClassName='is-active' >Home</NavLink>
        <NavLink to='/create' activeClassName='is-active'>Add Expense</NavLink>
        <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
        <button onClick={startLogout}>Log Out</button>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    startLogout: ()=> dispatch(startLogout())
})

export default connect(undefined,mapDispatchToProps)(Header)