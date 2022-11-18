import React from "react";
import {connect} from 'react-redux'
import {DateRangePicker} from 'react-dates'
import { setFilterText,sortByAmount,sortByDate, setStartDate, setEndDate } from "../actions/filters";

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused:null
   }
    
    onDatesChange = ({startDate,endDate}) =>{
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    
    }

    onFocusChange = (calendarFocused) => (
        this.setState(()=>({calendarFocused}))
    )

    onSelectChange = (e)=> {e.target.value === 'date'? this.props.sortByDate():this.props.sortByAmount()}

    onTextChange = (e)  => {this.props.setFilterText(e.target.value)}

    render(){
    return(
    <div>
        <input type = 'text' placeholder="search" onChange ={this.onTextChange} value={this.props.filters.text}/>
        <select value={this.props.filters.sortBy} onChange = {this.onSelectChange}>
            <option value= 'date' >Date</option>
            <option value= 'amount' >Amount</option>
        </select>

    <DateRangePicker
        startDate={this.props.filters.startDate}
        endDate = {this.props.filters.endDate}
        onDatesChange = {this.onDatesChange}
        focusedInput= {this.state.calendarFocused}
        onFocusChange = {this.onFocusChange}
        numberOfMonths ={1}
        isOutsideRange = {()=>false}
        showClearDates = {true}
    />
    </div>
    )
    }

    


}
const mapStatetoProps = (state) =>(
    {
       filters:state.filters
    }
)

const mapDispatchToProps = (dispatch) => ({
    setFilterText: (text) => dispatch(setFilterText(text)),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: ()=> dispatch(sortByDate())
}
)

export default connect(mapStatetoProps,mapDispatchToProps)(ExpenseListFilters)