const express = require('express')
var cors = require('cors')

const {getPosts, addPost} = require('./controllers/blogController')

const app = express()

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.end('Hello world')
})

app.get('/greeting', (req, res) => {
    res.end('<h1>Hello world</h1>')
})

app.get('/greeting2', (req, res) => {
    res.end(`
        <html>
            <head></head>
            <body>
                <h1>Hello world</h1>
                <p>Greeting ${req.query.name} </p>
            </body>
        </html>
        
    `)
})

app.get('/api/post', (req, res) => {
    res.json(getPosts())
})

app.post('/api/post', async (req, res) => {
    console.log(req.body)
    const newPost = {
        id: 'gsdfgsdfgsdfg',
        title: req.body.title,
        annotation: req.body.annotation,
        content: req.body.content,
        piccUrl: req.body.piccUrl
    }
    console.log(newPost)
    addPost(newPost)
    res.send(201).end()
    //res.json(await insertPost(dbClient, newPost))
})


app.listen(8000)