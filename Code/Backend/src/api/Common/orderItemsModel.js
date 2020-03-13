import mongoose from 'mongoose'

const orderItemSchema = new mongoose.Schema({
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "users"
    },
    restaurent: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "restaurents"
    },
    item: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "items"
    },
    orderId: {
        type: String
    },
    quantity: {
        type: Number
    },
    amount: {
        type: Number
    }
},
    {
        timestamps: true
    });

const orderItems = mongoose.model('orderItems', orderItemSchema)

export default orderItems