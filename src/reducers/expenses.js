const expenseStateDefault = []

export default  (state =expenseStateDefault, action) => {
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

