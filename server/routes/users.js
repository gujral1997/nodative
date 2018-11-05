import express from 'express'
import User, {createUser} from '../models/user'

const router = express.Router()

const registerUser =(req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const username = req.body.username;
	const password = req.body.password;
	const password2 = req.body.password2;

	// Validation
	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

	const errors = req.validationErrors();

	if (errors) {
		res.status(500).json(errors)
    }
    else {
        const newUser = new User({
            name: name,
            email: email,
            username: username,
            password: password
        })

        createUser(newUser, (err, user) => {
            if(err) throw err
            console.log(user)
        })

        req.flash('success_msg', 'You are registered and can now login')

        res.json({
            msg: `${name} has successfully registered`
        })
    }
}

// Register
router.get('/register', (req, res)=>{
    res.status(404).json({error: 'error'})
})

// Register User
router.post('/register', registerUser)

export default router