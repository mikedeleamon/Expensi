import {createStore} from 'redux'


//this is an example of a reducer
// reducers change state based on the action name
//1. pure functions
//2.never change state/actions 
const countReducer = ((state = {count:0}, action)=>{

    switch(action.type){
        case 'INCREMENT_COUNT':
            return {count: state.count + action.incrementBy}
        
        case 'DECREMENT_COUNT':
            return {count: state.count - action.decrementBy}

        case 'RESET_COUNT':
            return {count: 0}

        case 'SET':
            return {count:action.count}
    
        default:
            return state


    }
    

})

//redux stores state date in a store so that the data can be accessed throughout an application
const store = createStore(countReducer)

//store.subscribe() is a watch
//runs everytime the state changes
//return value in subscribe ends the watch
store.subscribe(()=>{
    console.log(store.getState())
})

//these are action generators = stores action in a function
const incrementCount = ({incrementBy = 1} ={}) => {
    console.log(incrementBy)

    return(
                
            {
                //action name
                type:'INCREMENT_COUNT',
                incrementBy: incrementBy 
            }
    
)}

const decrementCount = ({decrementBy = 1}= {}) => (
    {
        //action name
        type:'DECREMENT_COUNT',
        decrementBy:decrementBy 
    }
)

const resetCount = () => (
    {
        //action name
        type:'RESET_COUNT'
    }
)

const setCount = ({count = 0} = {}) => (
    {
        type:'SET',
        count:count
    }
)

//actions are objects that are sent to the store to alter the state
store.dispatch(incrementCount({incrementBy:7}))

store.dispatch(decrementCount({decrementBy:4}))

store.dispatch(resetCount())

store.dispatch(setCount({count:101}))