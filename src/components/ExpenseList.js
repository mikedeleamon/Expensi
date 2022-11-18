import React from "react";
import {connect} from 'react-redux'
import ExpsenseListItem from "./ExpenseListItem";
import selectExpenses from '../selectors/expenses'


export const ExpenseList = (props) => (
    <div>
       <h1> Expense List</h1>
       {props.expenses.length === 0 ? (
        <p>no expense logged</p>
        ):(
        props.expenses.map((expense)=>{
        return( 
        <ExpsenseListItem key={expense.id} {...expense}/>
       )}
       )
       )}
    </div>
)

//set state for connect desired from the store
const mapStatetoProps = (state)=> {
    return {
        expenses:selectExpenses(state.expenses,state.filters)
    }
}

//connect takes in state
//needs provider already set up
export default connect(mapStatetoProps)(ExpenseList)

