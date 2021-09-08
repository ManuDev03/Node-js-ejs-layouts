const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express()
const port = 5000

// static files
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js'))
app.use('/img',express.static(__dirname + 'public/img'))


// set template engine
app.use(expressLayouts)
app.set('view engine','ejs')

// navigation
app.get('',(req,res)=>{
    res.render('index')
})

// listen on port 
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})