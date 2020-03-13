import adminModel from './adminModel';
import restaurent from '../Common/restaurentsModel';
import fooditemsModel from '../Common/foodItemsModel';
import feedbackModel from '../Common/feedbackModel';
import user from '../Common/userModel';
import { sendEmail } from '../Common/email';


export const adminLogin = (req, res) => {
    adminModel.findOne({ "username": req.query.username, "password": req.query.password }, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}

export const getRestaurentData = (req, res) => {
    restaurent.find((err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}

export const editItems = (req, res) => {
    restaurent.findById({ "_id": req.params.id }, (err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}

export const getUserData = (req, res) => {
    user.find((err, result) => {
        if (err)
            res.send(err);
        else
            res.send(result);
    })
}

export const updateRestaurent = (req, res) => {
    restaurent.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            const subject = 'YOUR RESTAURANT REQUEST DETAILS';
            const body = `we are activated your request: <br>userName:${req.body.userName}<br>status: ${req.body.status}<br><br>Thank You.`;
            sendEmail(req.body.email, subject, body);
            res.send(result);
        }
    })
}

export const getFoodData = (req, res) => {
    fooditemsModel.find({}).populate('restaurent').exec((err, user) => {
        if (err) {
            res.send(err);
        }
        else {
            const ress = user.map(data => {
                return { id: data._id, restaurent: data.restaurent.restaurent, itemType: data.itemType, itemName: data.itemName, rate: data.rate, image: data.image }
            })
            res.send(ress);
        }
    })
}

export const getFeedBack = (req, res) => {
    feedbackModel.find({}).populate('user').exec((err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            const ress = result.map(data => {
                return { id: data._id, user: data.user.userName, feedback: data.feedback }
            })
            res.send(ress);
        }
    })
}

