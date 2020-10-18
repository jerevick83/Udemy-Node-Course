const express =  require('express')
const app = express()

// app.use((req, res, next)=>{
//     console.log('The first middleware')
//     next()
// })

// app.use((req, res, next)=>{
//     console.log('The second middleware')
// })

const sendValue1 = "<h1>Welcome to the user page</h1>"

const sendValue2 = "<h1>Welcome to the homepage</h1>"
app.use('/user', (req, res, next)=>{
    res.send(sendValue1)
})

app.use('/', (req, res, next)=>{
    res.send(sendValue2)
})

app.listen(30000)