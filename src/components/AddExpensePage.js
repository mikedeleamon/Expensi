import React from "react";
import expenses from "../selectors/expenses";
import {connect} from 'react-redux'
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component{
    startAddExpense=(expense)=>{
        this.props.startAddExpense(expense)
        {/*history allows auto navigation */}
        this.props.history.push('/')
    }
    render(){
        return(
        <div>
            <h1>Add an Expense</h1>
            <ExpenseForm onSubmit={this.startAddExpense}/>
        </div>
        )
    }
}


//another way to set up your dispatch calls
const mapDispatchToProps = (dispatch) => {
    return {
        startAddExpense:(expense) => dispatch(startAddExpense(expense))
    }
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage)