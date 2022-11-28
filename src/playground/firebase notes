// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN6itdxccz98ahnoMZZacQ4eCeqY8ijEA",
  authDomain: "expensi-f157a.firebaseapp.com",
  databaseURL: "https://expensi-f157a-default-rtdb.firebaseio.com",
  projectId: "expensi-f157a",
  storageBucket: "expensi-f157a.appspot.com",
  messagingSenderId: "987942895920",
  appId: "1:987942895920:web:b1850f5572dcd1e38488f5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
//const app = initializeApp(firebaseConfig);
const database = firebase.database()

//db reset
//database.ref().set(null)


//push is how you create elements with generated ids
// database.ref('expenses').push({description:'water bill',note:'',amount: 12000, createdAt: 0})
// database.ref('expenses').push({description:'gas bill',note:'',amount: 10000, createdAt: 239293293922})
// database.ref('expenses').push({description:'Amazon Prime',note:'',amount: 14700, createdAt: 2392777293922})

//how to format fetched data without subscription
// database.ref('expenses')
// .once('value')
// .then((snapshot)=>{
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push(
//             {
//                 id:childSnapshot.key,

//                 //same as the following
//                 //description:childSnapshot.val().description,
//                 //amount: childSnapshot.val().amount,
//                 //note: childSnapshot.val().note,
//                 //createdAt: childSnapshot.val().createdAt
//                 ...childSnapshot.val()
//             })
        
//     })
//     console.log(expenses)
// })

//listening for changes

// if a child is removed
database.ref('expenses').on('child_removed', (snapshot)=>{
    console.log(`child removed: ${snapshot.key}`, "child's data:",snapshot.val())
})

// if a child is added
database.ref('expenses').on('child_added', (snapshot)=>{
    console.log(`child added: ${snapshot.key}`, "child's data:",snapshot.val())
})

// if a child is changed

database.ref('expenses').on('child_changed', (snapshot)=>{
    console.log(`child updated: ${snapshot.key}`, "child's data:",snapshot.val())
})

//formating data with subcriptions
// database.ref('expenses').on('value', (snapshot)=>{
//     const expenses = []
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// }, (error)=>{
//     console.log('error:', error)
// })


// const firebaseNotes = {
//     notes: {
//         notes
//     }
// }

// database.ref('note').set(notes)

//fetches and subscribes to the database (unsubscribe by using ref().off())
//database.ref().on('value', (snapshot)=>{console.log(snapshot.val())})

//fetches data once
// database.ref('location/city')
// .once('value')
// .then((snapshot)=>{
//     const val = snapshot.val()

//     console.log(val)
// }).
// catch((error)=>{console.log('uh oh', error)})

// database.ref().set({
//     name: 'Mike Amon',
//     age:30,
//     stress:5,
//     job: {title:'Developer',
//         company:'Deloitte'},
//     isSingle:false,
//     location:{
//         city:'Cherry Hill',
//         country:'USA'
//     }
    
// }).then(()=>{console.log('data successfully added')})
// .catch((error)=>{console.log('uh oh', error)})

// database.ref().update({
//     stress:9,
//     'location/city':'San Fransisco',
//     'job/title':'big boss',
//     'job/company':'google'

// })

//database.ref().remove()

