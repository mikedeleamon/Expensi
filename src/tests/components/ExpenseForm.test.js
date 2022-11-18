import React from "react";
import {shallow} from 'enzyme'
import ExpenseForm from "../../components/ExpenseForm";
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should render expense form correctly', ()=>{
    const wrapper = shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render expense form correctly with data', ()=>{
    const wrapper = shallow(<ExpenseForm expense= {expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid form submition', ()=>{
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    //first parameter of simulte is the suffix to a on[action] button i.e. onChange, on Click etc.
    //second param is for event parameters passed into the action functions (passing in e/event))
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})



//Testing user input simulation
test('should set description on input change', ()=>{
    const value = 'New description'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('description')).toBe(value)
})

test('should set note on text input', ()=>{
    const value = 'New note'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('textarea').simulate('change',{
        target:{value}
    })
    expect(wrapper.state('note')).toBe(value)
})

test('should set Amount on amount input', ()=>{
    const value = '75.24'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe(value)
})

test('should not set Amount on amount input', ()=>{
    const value = '12.222'
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe("")
})

test('should call onSubmit prop for valid form submition', ()=>{
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense= {expenses[1]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[1].description,
        amount: expenses[1].amount,
        note: expenses[1].note,
        createdAt: expenses[1].createdAt
    })
    
})

test('should set new date on date change', ()=>{
    
    const now = moment()
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toBe(now)
    
})

test('should set change focuse state on date change', ()=>{
    
    const focused =true
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
    expect(wrapper.state('calendarFocused')).toBe(focused)
    
})




