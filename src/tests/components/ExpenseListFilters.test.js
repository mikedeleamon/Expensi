import React from "react";
import {shallow} from 'enzyme'
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import {filterData,filters} from '../fixtures/filters'
import { setStartDate } from "../../actions/filters";
import moment from 'moment'

let wrapper, setTextSpy, startDateSpy, endDateSpy, sortByAmountSpy, sortByDateSpy

beforeEach(()=>{
    setTextSpy = jest.fn()
    startDateSpy = jest.fn()
    endDateSpy = jest.fn()
    sortByAmountSpy = jest.fn() 
    sortByDateSpy = jest.fn()
    wrapper = shallow(
    <ExpenseListFilters 
        filters={filters}
        setFilterText ={setTextSpy} 
        setStartDate = {startDateSpy}
        setEndDate = {endDateSpy} 
        sortByAmount = {sortByAmountSpy}
        sortByDate = {sortByDateSpy}
        />)
})


test('empty list filter test',()=>{
    expect(wrapper).toMatchSnapshot()
})

test(' filter list with data test',()=>{
    //set props allows you to change a prop filter
    wrapper.setProps({filters:filterData})
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change',()=>{
    const value = 'test'
    wrapper.find('input').simulate('change', {
        target:{value}
    })
    expect(setTextSpy).toHaveBeenLastCalledWith(value)
    expect(wrapper).toMatchSnapshot()
})

test('should sort by date',()=>{
    const value = 'date'
    wrapper.setProps({filters:filterData})
    wrapper.find('select').simulate('change',{
        target:{value}
    })
    expect(sortByDateSpy).toHaveBeenCalled()
    expect(wrapper).toMatchSnapshot()
})

test('should sort by amount',()=>{
    const value = 'amount'
    wrapper.find('select').simulate('change',{
        target:{value}
    })
    expect(sortByAmountSpy).toHaveBeenCalled()
    expect(wrapper).toMatchSnapshot()
})

test('should set date changes',()=>{
    const startDate = moment(0).add(4, 'years')
    const endDate = moment(0).add(8,'years')
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate})
    expect(startDateSpy).toHaveBeenLastCalledWith(startDate)
    expect(endDateSpy).toHaveBeenLastCalledWith(endDate)
    expect(wrapper).toMatchSnapshot()
})

test('should handle focus change',()=>{
    const calendarFocused = 'startDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
    expect(wrapper).toMatchSnapshot()
})
