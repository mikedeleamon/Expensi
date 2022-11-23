

export default  (props) =>{
    if (props.length === 0){
        return 0
    } else {
       return props
       .map((expense) => expense.amount)
       .reduce((sum,value) => {return sum +value},0)
        
       }
    }

// export  const ExpsensesTotal = (props) => (
//     <h2>Your total amount of expenses are {numeral(getExpenseTotal(props.expenses)).format('$0,0.00')}</h2>
// )

// const getExpenseTotal = (expenses) => {
//     let total = 0
//     expenses.forEach((expense)=>{
//         return total = total + (expense.amount/100)
         
//     })
//     return total
// }







