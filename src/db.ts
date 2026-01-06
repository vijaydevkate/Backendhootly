import mongoose, {model, Schema} from 'mongoose'

mongoose.connect("mongodb+srv://Hootly:Hootlydb@cluster0.uqxmbsf.mongodb.net/?appName=Cluster0")

const userSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

export const userModel = model('User', userSchema)