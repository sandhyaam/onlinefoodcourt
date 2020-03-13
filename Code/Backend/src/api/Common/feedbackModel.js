import mongoose from 'mongoose'

const feedbackSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "users"
    },
    restaurent: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "restaurents"
    },
    feedback: {
        type: String
    }
},
    {
        timestamps: true
    });
const feedbackModel = mongoose.model('feedbacks', feedbackSchema)

export default feedbackModel