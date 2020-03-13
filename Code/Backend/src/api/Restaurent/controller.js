import restaurent from '../Common/restaurentsModel';
import fooditemsModel from '../Common/foodItemsModel';
import feedbackModel from '../Common/feedbackModel';
import user from '../Common/userModel';
import order from '../Common/orderModel';
import { sendEmail } from '../Common/email';

export const restaurentlogin = (req, res) => {
  restaurent.findOne({ "userName": req.query.userName, "password": req.query.password, "status": "Active" }, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })
}

export const restaurentRegistration = (req, res) => {
  restaurent.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const subject = 'Registration Details';
      const body = `Your are successfully registered in Online Food Court<br><br>UserName: ${req.body.userName}<br>Password: ${req.body.password}<br>Thank You.`;
      sendEmail(req.body.email, subject, body);
      res.send(result);
    }
  })
}

export const Profile = (req, res) => {
  restaurent.find({ "userName": req.query.userName }, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result.map(record => {
        return record;
      }));
  })
}

export const editItems = (req, res) => {
  fooditemsModel.find({ "_id": req.params.id }).populate('restaurent').exec((err, user) => {
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

export const updateProfile = (req, res) => {
  restaurent.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const addFoodItem = (req, res) => {
  fooditemsModel.findOne({ "restaurent": req.body.restaurent, "itemName": req.body.itemName }, (err, result) => {
    if (err)
      res.send(err);
    else if (result == null || result == []) {
      fooditemsModel.create(req.body, (err, result) => {
        if (err) {
          res.send(err);
        }
        else {
          res.send(result);
        }
      })
    }
    else {
      res.send("exists");
    }
  })
}

export const getFoodData = (req, res) => {
  fooditemsModel.find({ "restaurent": req.query.restaurent }).populate('restaurent').exec((err, user) => {
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

export const updateFoodItem = (req, res) => {
  fooditemsModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })
}

export const getOrderDetails = (req, res) => {
  order.find({}).populate(' user').exec((err, user) => {
    if (err) {
      res.send(err);
    }
    else {
      const ress = user.map(data => {
        return { id: data._id, user: data.user.userName, orderId: data.orderId, amount: data.amount, date: data.date, status: data.status }
      })
      res.send(ress);
    }
  })
}

export const acceptOrder = (req, res) => {
  order.findByIdAndUpdate({ "_id": req.params.id }, req.body, { new: true }, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      user.findById(result.user, (err, results) => {
        if (err) {
          res.send(err);
        } else {
          const subject = 'Order Details';
          const body = `your order has been accepted by the restuarent<br><br>OrderId: ${result.orderId}<br>Amount: ${result.amount}<br>Status: ${result.status}<br>Thank You.`;
          sendEmail(results.email, subject, body);
          res.send(result);
        }
      })
    }
  })
}

export const rejectOrder = (req, res) => {
  order.findByIdAndUpdate({ "_id": req.params.id }, req.body, { new: true }, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      user.findById(result.user, (err, results) => {
        if (err) {
          res.send(err);
        } else {
          const subject = 'Order Details';
          const body = `your order has been rejected by the restuarent<br><br>OrderId: ${result.orderId}<br>Amount: ${result.amount}<br>Status: ${result.status}<br>Thank You.`;
          sendEmail(results.email, subject, body);
          res.send(result);
        }
      })
    }
  })
}

export const getCancelOrders = (req, res) => {
  order.find({}).populate('user').exec((err, user) => {
    if (err) {
      res.send(err);
    }
    else {
      const ress = user.map(data => {
        return { id: data._id, user: data.user.userName, orderId: data.orderId, amount: data.amount, date: data.date, status: data.status }
      })
      res.send(ress);
    }
  })
}

export const chnagepassword = (req, res) => {
  restaurent.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const subject = 'YOUR CHANGE PASSWORD DETAILS';
      const body = `Your password has been changed  below here: <br>userName:${req.body.userName}<br>password: ${req.body.password}<br><br>Thank You.`;
      sendEmail(req.body.email, subject, body);
      res.send([result]);
    }
  })
}

export const forgotpassword = (req, res) => {
  restaurent.findOne({ "email": req.query.email }, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      const subject = 'Credentials Recived';
      const body = `userName: ${result.userName}<br>password: ${result.password}<br>Please Login  Using these Credentials<br>Thank You.`;
      sendEmail(req.query.email, subject, body);
      res.send(result);
    }
  })
}

export const deleleFoodItem = (req, res) => {
  fooditemsModel.findByIdAndRemove({ "_id": req.params.id }, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })
}

export const deleteRestaurent = (req, res) => {
  restaurentModel.findByIdAndRemove(req.params.id, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })
}

export const getFeedBack = (req, res) => {
  feedbackModel.find({ "restaurent": req.query.restaurent }).populate('user restaurent').exec((err, user) => {
    if (err) {
      res.send(err);
    }
    else {
      const ress = user.map(data => {
        return { id: data._id, user: data.user.userName, restaurent: data.restaurent.restaurent, feedback: data.feedback }
      })
      res.send(ress);
    }
  })
}

