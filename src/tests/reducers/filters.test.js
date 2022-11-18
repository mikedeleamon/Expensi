import moment from 'moment'
import { setFilterText, setStartDate, setEndDate, sortByAmount, sortByDate } from '../../actions/filters'
import filtersReducer from '../../reducers/filters'

test('should setip default filter values', ()=>{
    //@@INIT handles checking initial state
    const state  = filtersReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should change sortby value to amount', ()=>{
    const state = filtersReducer(undefined, sortByAmount())
    expect(state.sortBy).toBe('amount')
})

test('should change sortby value to date', ()=>{
    const currentState = {
        text:'',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    //const action = {type: 'SORT_BY_DATE'}  
    const state = filtersReducer(currentState, sortByDate())
    expect(state.sortBy).toBe('date')
})

test('should set text filter', ()=>{
    const currentState = {
        text:'',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const action = {type: 'SET_FILTER_TEXT', text:'water'}  
    const state = filtersReducer(undefined, action)
    expect(state.text).toBe('water')
})

test('should set startdate filter', ()=>{
    const currentState = {
        text:'',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    //const action = {type: 'SORT_BY_DATE'}  
    const state = filtersReducer(undefined, setStartDate(moment(20)))
    expect(state.startDate).toEqual(moment(20))
})

test('should set enddate filter', ()=>{
    const currentState = {
        text:'',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    //const action = {type: 'SORT_BY_DATE'}  
    const state = filtersReducer(undefined, setEndDate(moment(20)))
    expect(state.endDate).toEqual(moment(20))
})

