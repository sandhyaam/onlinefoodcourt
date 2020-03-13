import mongoose from 'mongoose'

const restaurentSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    userName: {
        type: String
    },
    password: {
        type: String
    },
    phoneNo: {
        type: String
    },
    email: {
        type: String
    },
    restaurent: {
        type: String,
        unique: true
    },
    contactNo: {
        type: String
    },
    address: {
        type: String
    },
    status: {
        type: String
    }
},
    {
        timestamps: true
    });
const restaurentsModel = mongoose.model('restaurents', restaurentSchema)

export default restaurentsModel