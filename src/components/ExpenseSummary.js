import numeral from 'numeral'
import React from "react";
import {connect} from 'react-redux'
import selectExpenses from '../selectors/expenses'
import getExpenseTotal from '../selectors/expenses-total'

 export const ExpsenseSummary = ({expenseCount , expenseTotal}) => {

    const expensePlural = expenseCount === 1 ? 'expense':'expenses'
    const isPlural = expenseCount === 1 ? 'is':'are'
    const formatTotal = numeral(expenseTotal/100).format('$0,0.00')
    return (
    <div>
        <h1>Your total amount of {expenseCount} {expensePlural} {isPlural} {formatTotal}</h1>
    </div>
    )
}

//set state for connect desired from the store
const mapStatetoProps = (state)=> {
    const visibleExpenses = selectExpenses(state.expenses,state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: getExpenseTotal(visibleExpenses)
    }
}

// //connect takes in state
// //needs provider already set up
 export default connect(mapStatetoProps)(ExpsenseSummary)
