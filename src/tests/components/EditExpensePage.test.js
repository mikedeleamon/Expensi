import React from "react";
import {shallow} from 'enzyme'
import {EditExpensePage} from "../../components/EditExpensePage";
import expenses from '../fixtures/expenses'
import moment from 'moment'


let editExpenseSpy,removeExpenseSpy,history,expense,wrapper

beforeEach(()=>{
    editExpenseSpy = jest.fn()
    removeExpenseSpy = jest.fn()
    history = {push:jest.fn()}
    expense = expenses[1]
    wrapper = shallow(
    <EditExpensePage 
        startEditExpense = {editExpenseSpy} 
        startRemoveExpense={removeExpenseSpy} 
        history={history}
        expense = {expense}

        />
    )
})

test('should generate edit page properly',()=>{
    expect(wrapper).toMatchSnapshot()
})

test('should generate edit page properly with data',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expense)
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expense.id,expense)
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(wrapper).toMatchSnapshot()
})

 test('should generate startRemoveExpense from expenses data',()=>{
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpenseSpy).toHaveBeenLastCalledWith({id:expense.id})
     expect(wrapper).toMatchSnapshot()
 })