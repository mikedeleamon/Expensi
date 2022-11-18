//Get visible expenses
import moment from 'moment'

export default (expenses, {text,sortBy,startDate,endDate}) =>(

    expenses.filter((expense)=> {
        //console.log(expense)
        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch =  startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') :true
        const endDateMatch =  endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') :true
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