import { addExpense, startAddExpense, editExpense, removeExpense,startRemoveExpense, setExpense,startSetExpenses } from "../../actions/expenses";
import expenses from '../fixtures/expenses'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'


const createMockStore = configureStore([thunk])

beforeEach((done)=>{
    const expensesData ={}
    expenses.forEach(({id,description,note,amount,createdAt})=>{
        expensesData[id] = {description,note, amount,createdAt}
    })
    database.ref('expenses').set(expensesData).then(()=> done())
})

test('should set up removeExpense action object', ()=>{
    const action = removeExpense({id:'123abc'})
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should set up removeExpense action object',(done)=>{
    const store = createMockStore({})
    store.dispatch(startRemoveExpense({id:expenses[0].id})).then(()=>{
        const actions = store.getActions()
        expect(actions[0]).toEqual(
            {
                type:'REMOVE_EXPENSE',
                id:expenses[0].id
        }
    )
    return database.ref(`expenses/${expenses[0].id}`).once('value')
   
}).then((snapshot)=>{
    expect(snapshot.val()).toBeFalsy()
    done()
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
    
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:expenses[2]
        
    })
})

test('should add expese to DB and store',(done)=>{
    const store = createMockStore({})
    const expenseData = {
    description: 'water bill',
    note: '',
    amount: 12000,
    createdAt: 0}

    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
       
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('should add expese with defaults to DB and store',(done)=>{
    const store = createMockStore({})
    const expenseData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0}

    store.dispatch(startAddExpense({})).then(()=>{
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
       
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('sets expense data',()=>{
    const action = setExpense(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSE',
        expenses
    })
})

test('should fetch the expenses from firebase',(done)=>{
    const store = createMockStore({})

    store.dispatch(startSetExpenses({})).then(()=>{
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type:'SET_EXPENSE',
            expenses
        })
        done()
    })

})




