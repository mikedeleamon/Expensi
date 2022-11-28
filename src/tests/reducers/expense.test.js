import expenses from '../fixtures/expenses'
import expensesReducer from '../../reducers/expenses'
import uuid from 'uuid'


test('should setip default filter values', ()=>{
    //@@INIT handles checking initial state
    const state  = expensesReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', ()=>{
    const action = {type:'REMOVE_EXPENSE',id:expenses[1].id}
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([expenses[0],expenses[2]])
})

test('should not remove expense if id not found', ()=>{
    const action = {type:'REMOVE_EXPENSE',id:'4'}
    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})

test('should add expense ', ()=>{
    const expense = {
        id:uuid(),
        description:'',
        note:'',
        amount:0,
        createdAt:0

    }
    const action = {type:'ADD_EXPENSE',
    expense
}
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([...expenses,expense])
})

test('should edit expense ', ()=>{
    const updates = {description:'test works'}
    const action = {type:'EDIT_EXPENSE',
    id:expenses[1].id,
    updates
}
    const state = expensesReducer(expenses,action)
    expect(state[1].description).toBe('test works')
})

test('should not edit expense if expense not found ', ()=>{
    const updates = {description:'test works'}
    const action = {type:'EDIT_EXPENSE',
    id:'4',
    updates
}
    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})

test('should set the expense data',()=>{
    const action = {
        type:'SET_EXPENSE',
        expenses:[expenses[1]]
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([expenses[1]])
})


