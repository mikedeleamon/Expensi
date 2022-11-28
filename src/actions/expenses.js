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
    return (dispatch) => {
        const {description='',note='',amount=0,createdAt=0} = expenseData

        const expense = {description,note,amount,createdAt}

       return database.ref('expenses')
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

export const startRemoveExpense = (expense) => {
    return(dispatch) => {
    database.ref('expenses')
    .remove(expense.id)
    .then(()=>{
        dispatch(removeExpense({...expense}))
    }).catch((error)=>{console.log(error)})
}
}

//edit
export const editExpense = (id ,updates) => ({
    type:'EDIT_EXPENSE',
    
        id:id,
        updates:updates
    
})

export const startEditExpense = (expense) => {
    return(dispatch) => {


        database.ref('expenses')
        .update({})
        .then
    }

}

