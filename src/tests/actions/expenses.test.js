import { addExpense, editExpense, removeExpense } from "../../actions/expenses";



test('should set up removeExpense action object', ()=>{
    const action = removeExpense({id:'123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should set up editExpense action object', ()=>{
    const action = editExpense('123abc',{note:'test'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates:{note:'test'}
    })
})

test('should set up addExpense action object with provided values', ()=>{
    const testExpense = {
        description:'bill',
        note:'test',
        amount:12,
        createdAt:1234567
    }
    const action = addExpense(testExpense)
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...testExpense,
            id: expect.any(String)
        }
    })
})

test('should set up addExpense action object with default values', ()=>{
    
    const action = addExpense()
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id: expect.any(String),
            description:'',
            note:'',
            amount:0,
            createdAt:0
         
        }
    })
})

