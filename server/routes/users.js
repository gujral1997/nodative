import express from 'express'
const router = express.Router()

// Register
router.get('/register', (req, res)=> 
    res.render('register')
)

// Register
router.get('/login', (req, res)=> 
    res.render('login')
)


export default router