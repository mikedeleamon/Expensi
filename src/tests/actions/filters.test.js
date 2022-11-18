import { setStartDate, setEndDate, setFilterText, sortByAmount, sortByDate} from "../../actions/filters"
import moment from 'moment'



test('should generate a setStartDate action', ()=>{
    const result = setStartDate(moment(0))

    expect(result).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    })

})

test('should generate a setEndDate action', ()=>{
    const result = setEndDate(moment(0))

    expect(result).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    })

})

test('should generate a set filter text action', ()=>{
    const text = 'test'
    const result = setFilterText(text)
    expect(result).toEqual({
        
        type:'SET_FILTER_TEXT',
        text
    })

})

test('should generate a set filter text action with default value', ()=>{
    const result = setFilterText()
    expect(result).toEqual({
        
        type:'SET_FILTER_TEXT',
        text:''
    })

})
test('should generate an amount sort action', ()=>{
    const result = sortByAmount()

    expect(result).toEqual({
        type:'SORT_BY_AMOUNT',
        sortBy:'amount'
    })

})
test('should generate a date sort action', ()=>{
    const result = sortByDate()

    expect(result).toEqual({
        type:'SORT_BY_DATE',
        sortBy:'date'
    })

})
test('should generate a setStartDate action', ()=>{
    const result = setStartDate(moment(0))

    expect(result).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    })

})



