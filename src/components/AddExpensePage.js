import React from "react";
import expenses from "../selectors/expenses";
import {connect} from 'react-redux'
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../Actions/expenses";

export class AddExpensePage extends React.Component{
    addExpense=(expense)=>{
        this.props.addExpense(expense)
        {/*history allows auto navigation */}
        this.props.history.push('/')
    }
    render(){
        return(
        <div>
            <h1>Add an Expense</h1>
            <ExpenseForm onSubmit={this.addExpense}/>
        </div>
        )
    }
}


//another way to set up your dispatch calls
const mapDispatchToProps = (dispatch) => {
    return {
        addExpense:(expense) => dispatch(addExpense(expense))
    }
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage)