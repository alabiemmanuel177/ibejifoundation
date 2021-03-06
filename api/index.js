const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const applicantRoute = require('./routes/applicants')
const contactRoute = require('./routes/contact')

dotenv.config()
app.use(express.json())
const port = process.env.PORT || 5000

mongoose
.connect(process.env.MONGO_URL)
.then(console.log("Connected to MongoDB"))
.catch(err=>console.log(err));

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/applicants', applicantRoute)
app.use('/api/contacts', contactRoute)


app.listen(port, ()=> {
    console.log(`Backend is running on port ${port}.`)
})