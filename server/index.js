import express from 'express'
import path from 'path'
import cookiesParser from 'cookie-parser'
import bodyParser from 'body-parser'
import exphbs from 'express-handlebars'
import expressValidotor from 'express-validator'
import flash from 'connect-flash'
import session from 'express-session'
import passport from 'passport'
import localStratergy from 'passport-local'
import mongo from 'mongodb'
import mongoose from 'mongoose'
import { param } from 'express-validator/check';


// Init App
const app = express()

// View Engine
app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', exphbs({defaultLayout: 'layout'}))
app.set('view engine', 'handlebars')

// BodyParser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookiesParser())

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))

// Middleware Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}))

// Express Validator (from express validator github)
app.use(expressValidotor({
    errorFormatter: (param, msg, value)=> {
        let namespace = param.split('.'),
        root = namespace.shift(),
        formParam = root
        while(namespace.length) {
            formParam += '[' +namespace.shift() + ']'
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        }
    }
}))

app.listen(3000, ()=>console.log('App is listening at 3000'))
