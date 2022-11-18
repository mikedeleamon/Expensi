import {createStore, combineReducers } from 'redux'
import uuid from 'uuid'


const setFilterText = (text='') => (
    {
        
        type:'SET_FILTER_TEXT',
        text: text
    }
)

const setStartDate = (startDate=undefined) => (
    {
        
        type:'SET_START_DATE',
        startDate: startDate
    }
)

const setEndDate = (endDate=undefined) => (
    {
        
        type:'SET_END_DATE',
        endDate: endDate
    }
)

const sortByAmount = () => (
    {
        type:'SORT_BY_AMOUNT',
        sortBy:'amount'
    }
)

const sortByDate = () =>(
    {
        type:'SORT_BY_AMOUNT',
        sortBy:'date'
    }
)

const expenseStateDefault = []
const filterStateDefault = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
        }


//REDUCERS
 const expenseReducer = (state =expenseStateDefault, action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            //spread instead of using .concat()
            return [...state,action.expense]

        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id!==action.id)

        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if (expense.id === action.id){
                    return{
                        ...expense,
                        //this will overide expenses
                        ...action.updates
                    }
                }else{
                    return expense
                }
            })
        default:
            return state
    }

}

const filterReducer = (state = filterStateDefault, action) => {
    switch (action.type){
        case 'SET_FILTER_TEXT':
            return {
                ...state,
                text:action.text
            }
        case 'SORT_BY_AMOUNT':
            return {...state,
                sortBy:action.sortBy}
        case 'SORT_BY_DATE':
            return {...state,
                sortBy:action.sortBy}

        case 'SET_START_DATE':
            return {
                ...state,
                startDate:action.startDate
            }

        case 'SET_END_DATE':
            return {
                ...state,
                endDate:action.endDate
            }
            

        default:
            return state
    }
}

//Get visible expenses
const getVisibleExpenses = (expenses, {text,sortBy,startDate,endDate}) =>(

    expenses.filter((expense)=> {
        console.log()
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch
    }).sort((objOne,objTwo)=>{
        if(sortBy==='date'){
            return objOne.createdAt < objTwo.createdAt ? 1 : -1
        } if(sortBy === 'amount'){
            return objOne.amount < objTwo.amount ? 1 : -1
        }
    })
)
//STORE
const store = createStore(
    combineReducers({
        expenses:expenseReducer,
        filters:filterReducer

    })
    )

    store.subscribe(()=>{
        const state = store.getState()
        const visibleData = getVisibleExpenses(state.expenses, state.filters)
        console.log(visibleData)
    })

     const disOne = store.dispatch(addExpense({description: 'candy', amount:100, createdAt:1000}))
     const disTwo = store.dispatch(addExpense({description: 'rent', amount:350, createdAt:800}))
    // store.dispatch(removeExpense({id:disTwo.expense.id}))
    // store.dispatch(editExpense(disOne.expense.id, {amount:600}))
     //store.dispatch(setFilterText('rent'))
     store.dispatch(sortByAmount())
    store.dispatch(sortByDate())
     store.dispatch(setStartDate(88))
     store.dispatch(setEndDate(1600))





const demoState = {
    expenses:[{id:'kjgjgkgjkgkgk',
                description: 'car note',
                note: 'this is for the benz',
                amount: 50000,
                createdAt:0}],
    filters:{
        text:'rent',
        sortBy: 'amount',
        startDate:undefined,
        endDate:undefined
    }

}

