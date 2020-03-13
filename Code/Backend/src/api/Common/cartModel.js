import mongoose from 'mongoose'

const cartSchema = new mongoose.Schema({
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
const cartModel = mongoose.model('carts', cartSchema)

export default cartModel