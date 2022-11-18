console.log('h')

const Person = {
    name:'mike',
    age:30,
    location:{
        temp:92,
        city:'New York'
    }

}

//destructure example. 
//breaks down a data structure allows for object/array elements/positions to be called without dot notation
const {name,age} = Person
//destructuring can also be nested
const {city:cityName} = Person.location
//variables can be renamed
const {temp:temperature} = Person.location

console.log(`${name} is ${age}. he lives in ${cityName}. it's ${temperature} degrees there`)


//
// Array destructuring
//

const address = ['123 sesame street','philadelphia','Pennsylvania','11221']
const [street, city ,state,zip] = address
console.log(`you are in ${state}, ${zip}`)