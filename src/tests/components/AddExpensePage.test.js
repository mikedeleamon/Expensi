import React from "react";
import {shallow} from 'enzyme'
import { AddExpensePage } from "../../components/AddExpensePage";
import expense from '../fixtures/expenses'


let addExpenseSpy,history,wrapper

//globally defining reusable variables with jest's beforeEach method
beforeEach(()=>{
     addExpenseSpy = jest.fn()
     history = {push: jest.fn()}
     wrapper = shallow(<AddExpensePage startAddExpense={addExpenseSpy} history = {history}/>)
})


test('should render addexpense page', ()=>{
    expect(wrapper).toMatchSnapshot()
})

test('should render addexpense page with valid data', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expense[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addExpenseSpy).toHaveBeenLastCalledWith(expense[1])
    
})