import uuid from 'uuid'
import database from '../firebase/firebase'


//ACTIONS
//add
//const expense = {description,note,amount,createdAt}
export const addExpense = (expense) => (
    {type:'ADD_EXPENSE',
    expense:expense}
)
export const startAddExpense = (expenseData = {}) =>{ 
    return (dispatch,getState) => {
        const uid = getState().auth.uid
        const {description='',note='',amount=0,createdAt=0} = expenseData
        const expense = {description,note,amount,createdAt}

       return database.ref(`users/${uid}/expenses`)
       
        .push(expense)
        .then((ref)=>{
            dispatch(addExpense({
                id:ref.key,
                ...expense
            }))
        }).catch((error)=>{console.log(error)})
    }
}

//remove
export const removeExpense = ({id}={}) => (
    {type:'REMOVE_EXPENSE',
        id:id
    })

export const startRemoveExpense = ({id}={}) => {
    return(dispatch,getState) => {
        const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses/${id}`)
    .remove()
    .then(()=>{
        dispatch(removeExpense({id}))
    }).catch((error)=>{console.log(error)})
}
}

//edit
export const editExpense = (id ,updates) => ({
    type:'EDIT_EXPENSE',
    
        id:id,
        updates:updates
    
})

export const startEditExpense = (id, updates) => {
    return(dispatch,getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`)
        .update(updates)
        .then(()=>{
            dispatch(editExpense(id,updates))
        })
    }

}

export const setExpense = (expenses) => ({
    type:'SET_EXPENSE',
    expenses})

export const startSetExpenses = () => {
    return(dispatch,getState) =>{
        const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses`)
    .once('value')
    .then((snapshot)=> {
        const expenses = []
        
        snapshot.forEach((childSnapshot)=>{
            expenses.push({
                id:childSnapshot.key,
            ...childSnapshot.val()
        })
        })
        dispatch(setExpense(expenses))
    })
    }
}

