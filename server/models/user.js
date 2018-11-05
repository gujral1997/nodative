import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

// User Schema

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        index: true
    },
    password: {
        type: String
    },
    email: {
        type: String 
    },
    name: {
        type: String
    }
})

const createUser =(newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash
            newUser.save(callback)
        })
    })
}

export {
    createUser
}

export default mongoose.model('User', UserSchema)