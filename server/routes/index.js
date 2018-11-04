import express from 'express'
const router = express.Router()

// Get Homepage
router.get('/', (req, res)=> 
    res.render('index')
)

export default router