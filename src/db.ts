import {Model, Schema} from 'mongoose'

const userSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

export const userModel = new Model('User', userSchema)