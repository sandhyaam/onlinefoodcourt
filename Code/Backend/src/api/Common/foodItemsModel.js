import mongoose from 'mongoose'

const foodSchema = new mongoose.Schema({
    restaurent: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "restaurents"
    },
    itemType: {
        type: String
    },
    itemName: {
        type: String
    },
    rate: {
        type: Number
    },
    image: {
        type: String
    }
},
    {
        timestamps: true
    })

const fooditemsModel = mongoose.model('items', foodSchema)

export default fooditemsModel