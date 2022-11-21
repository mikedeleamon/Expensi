
const path = require('path')

//page server
const express = require('express')
const app = express()
const publicPath = path.join(__dirname,'..','public')
const port = process.env.PORT || 3000


//specifies what folder is being used/referenced for the app
app.use(express.static(publicPath))


//runs when a get request the server is called
//first param is the path
//second param is a function that takes a request and response parameter
app.get('*',(request, response)=>{
    //sends all get responses not in publicPath to index.html
    response.sendFile(path.join(publicPath,'index.html'))
})


//defines what port is used and a callback for when the servier is live
app.listen(port, ()=>{
    console.log('server is live!')
})