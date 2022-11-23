import getExpenseTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'


test('should give 0 id no expenses exist',()=>{
    const response = getExpenseTotal([])
    expect(response).toBe(0)
})

test('should give sum for one expense ',()=>{
    const response = getExpenseTotal([expenses[0]])
    expect(response).toBe(12000)
})

test('should give a sum of expenses ',()=>{
    const response = getExpenseTotal(expenses)
    expect(response).toBe(918600)
})