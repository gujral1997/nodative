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


// Init App
const app = express()

// BodyParser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookiesParser())

app.listen(3000, ()=>console.log('App is listening at 3000'))
