import user from '../Common/userModel';
import items from '../Common/foodItemsModel';
import cart from '../Common/cartModel';
import feedback from '../Common/feedbackModel';
import orderItems from '../Common/orderItemsModel';
import order from '../Common/orderModel';
import payment from '../Common/paymentModel';
import { sendEmail } from '../Common/email';
import restaurent from '../Common/restaurentsModel'

export const userLogin = (req, res) => {
  user.findOne({ "userName": req.query.userName, "password": req.query.password }, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })
}

export const userRegistration = (req, res) => {
  user.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const subject = 'Registration Details';
      const body = `Your are successfully registered in Online Food Court<br><br>userName: ${req.body.userName}<br>Password: ${req.body.password}<br>Thank You.`;
      sendEmail(req.body.email, subject, body);
      res.send(result);
    }
  })
}

export const userProfile = (req, res) => {
  user.find({ "userName": req.query.userName }, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result.map(record => {
        return record;
      }));
  })
}

export const updateProfile = (req, res) => {
  user.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const itemNames = (req, res) => {
  items.find({ "itemName": req.query.itemName }).populate('restaurent').exec((err, user) => {
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

export const addtocart = (req, res) => {
  items.findById(req.body.item, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      req.body.restaurent = result.restaurent;
      req.body.amount = result.rate;
      req.body.quantity = 1;
      cart.create(req.body, (err, result) => {
        if (err) {
          res.send(err);
        }
      })

      res.send(result);
    }
  })
}
export const cartdetails = (req, res) => {
  cart.find({ "user": req.query.user }).populate('restaurent item').exec((err, item) => {
    if (err) {
      res.send(err);
    }
    else {
      const ress = item.map(data => {
        return { id: data._id, restaurent: data.restaurent.restaurent, itemName: data.item.itemName, itemType: data.item.itemType, rate: data.item.rate, quantity: data.quantity, amount: data.amount }
      })
      res.send(ress);
    }
  })
}

export const cartUpdate = (req, res) => {
  cart.findByIdAndUpdate({ "_id": req.params.id }, req.body, { new: true }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}


export const forgotpassword = (req, res) => {
  user.findOne({ "email": req.query.email }, (err, result) => {
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

export const paymentDetails = (req, res) => {
  payment.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      order.create(req.body, (err, result) => {
        if (err) {
          res.send(err);
        }
        else {
          cart.find({ "user": req.body.user }, (err, items) => {
            if (err) {
              res.send(err);
            }
            else {
              items.map(item => {
                let currentItem = { user: req.body.user, restaurent: item.restaurent, item: item.item, orderId: req.body.orderId, quantity: item.quantity, amount: item.amount }
                orderItems.create(currentItem, (err, result) => {
                  if (err) {
                    res.send(err);
                  }
                  else {
                    cart.findOneAndRemove({ "user": req.body.user }, (err, result) => {
                      if (err) {
                        res.send(err);
                      }
                      else {
                        const subject = 'YOUR ORDER CONFIRMATION DETAILS';
                        const body = `Your Order has been successfully Placed in Online Food Court<br>OrderId: ${req.body.orderId}<br>Amount: ${req.body.amount}<br>Status: ${req.body.status}<br><br>Thank You.`;
                        sendEmail(req.body.email, subject, body);
                        res.send(result);
                      }
                    })
                  }
                })
              })
            }

          })
        }
      })
    }
  })
}

export const chnagepassword = (req, res) => {
  user.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const subject = 'YOUR CHANGE PASSWORD DETAILS';
      const body = `Your new password below here: <br>userName:${req.body.userName}<br>password: ${req.body.password}<br><br>Thank You.`;
      sendEmail(req.body.email, subject, body);
      res.send([result]);
    }
  })
}

export const placeOrderDetails = (req, res) => {
  cart.find({ "user": req.query.user }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const restaurentnames = (req, res) => {
  restaurent.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const deleteCart = (req, res) => {
  cart.findByIdAndRemove({ "_id": req.params.id }, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })

}

export const editItems = (req, res) => {
  items.findById({ "_id": req.params.id }, (err, result) => {
    if (err)
      res.send(err);
    else
      res.send(result);
  })
}

export const getOrderDetails = (req, res) => {
  order.find({ "user": req.query.user }).populate(' user').exec((err, user) => {
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

export const cancelOrder = (req, res) => {
  order.findByIdAndUpdate({ "_id": req.params.id }, req.body, { new: true }, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      const subject = 'Order Details';
      const body = `Your Order Cancelled in Online Food Court<br><br>OrderId: ${req.body.orderId}<br>Amount: ${req.body.amount}<br>Status: ${req.body.status}<br>Thank You.`;
      sendEmail(req.body.email, subject, body);
      res.send(result);
    }
  })
}

export const updatePayment = (req, res) => {
  cart.findByIdAndUpdate({ "_id": req.params.id }, req.body, { new: true }, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const editCartDetails = (req, res) => {
  cart.find({ "_id": req.params.id }).populate('restaurent item').exec((err, user) => {
    if (err) {
      res.send(err);
    }
    else {
      const ress = user.map(data => {
        return { id: data._id, restaurent: data.restaurent.restaurent, itemName: data.item.itemName, itemType: data.item.itemType, rate: data.item.rate, quantity: data.quantity, amount: data.amount }
      })
      res.send(ress);
    }
  })
}

export const userFeedBack = (req, res) => {
  restaurent.findOne({ "restaurent": req.body.restaurent }, (err, user) => {
    if (err) {
      res.send(err);
    }
    else {
      req.body.restaurent = user._id;
      feedback.create(req.body, (err, result) => {
        if (err) {
          res.send(err);
        }
        else {
          res.send(result);
        }
      })
    }
  })

}


