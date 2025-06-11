const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT || 5000
const cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded())
/////// db connected
require('./config/db').dbConfig()

app.use('/profile', express.static('uploads'))

app.use(cors(
    {
        credentials: true,
        origin: 'http://localhost:3000'
    }
))



app.get('/', (req, res) => res.send('Hello World!'))


////// import routing ///////
const userRoute = require('./routes/user.route')
const categoryRoute = require('./routes/category.route')
const subcategoryRoute = require('./routes/subCategory.route')


/////// routing path ///////
app.use('/api/user', userRoute)
app.use('/api/category', categoryRoute)
app.use('/api/subCategory', subcategoryRoute)
app.listen(PORT, () => console.log(`listening on PORT http://localhost:${PORT}`))