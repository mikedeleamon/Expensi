export const setFilterText = (text='') => (
    {
        
        type:'SET_FILTER_TEXT',
        text: text
    }
)

export const setStartDate = (startDate=undefined) => (
    {
        
        type:'SET_START_DATE',
        startDate: startDate
    }
)

export const setEndDate = (endDate=undefined) => (
    {
        
        type:'SET_END_DATE',
        endDate: endDate
    }
)

export const sortByAmount = () => (
    {
        type:'SORT_BY_AMOUNT',
        sortBy:'amount'
    }
)

export const sortByDate = () =>(
    {
        type:'SORT_BY_DATE',
        sortBy:'date'
    }
)