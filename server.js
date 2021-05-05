const express = require('express')
const app = express()


const port = process.env.PORT || 3000


app.use(express.static('public'))

/*const Comment = require('./models/comment')

app.use(express.json()) */

//Routes

/*app.post('/api/comments', (req, res) => {

    const comment = new Comment({

        username: req.body.username,
        comment: req.body.comment
    })

    comment.save().then(response => {

        res.send(response)
    })

})

app.get('/api/comments', (req, res) => {

    Comment.find().then(function (comments) {
        res.send(comments)
    })

})

const mongoose = require('mongoose')
const url = 'mongodb://localhost/comments'
mongoose.connect(url, {

    userNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:true
})

const connection = mongoose.connection
connection.once('open', function () {
    console.log('Database connected....')

}).catch(function(err){

    console.log('Connection failed....')
}) */

app.listen(port, () => {
    console.log(`Listening on port ${port}`)

})

