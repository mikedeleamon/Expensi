import React from "react";
import {shallow} from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'


test('should render single item', ()=>{
   const expense = expenses[1]
    const wrapper = shallow(<ExpenseListItem key={expense.id} {...expense}/>)
    expect(wrapper).toMatchSnapshot()
})