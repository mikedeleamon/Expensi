import React from "react";
import {connect} from 'react-redux'
import { editExpense,removeExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

export class EditExpensePage extends React.Component{
    editExpense =(expense) => {
                this.props.editExpense(this.props.expense.id,expense)
                this.props.history.push('/')
            }
    
    removeExpense = () => {this.props.removeExpense({id:this.props.expense.id})
                            this.props.history.push('/')
                        }

    render(){
        return(
            <div> <h1>Edit an Expense</h1> {this.props.expense.id}
                <ExpenseForm 
                    expense= {this.props.expense}
                    onSubmit = { this.editExpense}

                />
                <button onClick ={this.removeExpense}>remove</button>
            </div>
        
        )
    }  
}

const matchDispacthToProps = (dispatch)=> {
    return{
        // allows you to remove the dispatch commanad by mapping it to props
        editExpense: (id, expense)=> dispatch(editExpense(id,expense)),
        removeExpense: (id) => dispatch(removeExpense(id))

    }
}
    

const mapStateToProps = (state,props) => {
    return{
        expense:state.expenses.find((expense)=> expense.id === props.match.params.id)   
        }
    }

export default connect (mapStateToProps,matchDispacthToProps)(EditExpensePage)