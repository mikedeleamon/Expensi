import uuid from 'uuid'


//ACTIONS
//add
export const addExpense = ({description = '', note='',amount = 0, createdAt = 0}={}) => (
    {type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description:description,
        note:note,
        amount:amount,
        createdAt:createdAt

    }}
)
//remove
export const removeExpense = ({id}={}) => (
    {type:'REMOVE_EXPENSE',
        id:id
    })

//edit
export const editExpense = (id ,updates) => ({
    type:'EDIT_EXPENSE',
    
        id:id,
        updates:updates
    
})

