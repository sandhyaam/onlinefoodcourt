import { Router } from 'express'

import {
    userLogin,
    userRegistration,
    userProfile,
    getOrderDetails,
    userFeedBack,
    itemNames,
    cartUpdate,
    addtocart,
    cartdetails,
    updateProfile,
    paymentDetails,
    deleteCart,
    updatePayment,
    editItems,
    placeOrderDetails,
    cancelOrder,
    chnagepassword,
    forgotpassword,
    restaurentnames,
    editCartDetails

} from './controller'

const router = new Router();

router.get('/userLogin', userLogin);

router.get('/placeOrderDetails', placeOrderDetails)

router.get('/forgotpassword', forgotpassword);

router.post('/userRegistration', userRegistration)

router.get('/userProfile', userProfile)

router.get('/editCartDetails/:id',editCartDetails)

router.put('/updateProfile/:id', updateProfile)

router.get('/itemNames', itemNames)

router.post('/addtocart', addtocart)

router.get('/edit/:id', editItems)

router.get('/cartdetails', cartdetails)

router.get('/getOrderDetails', getOrderDetails)

router.put('/cartUpdate/:id', cartUpdate)

router.get('/restaurentnames', restaurentnames);

router.post('/paymentdetails', paymentDetails)

router.post('/userFeedBack', userFeedBack)

router.delete('/deleteCart/:id', deleteCart)

router.put('/updatepayment/:id', updatePayment)

router.put('/chnagepassword/:id', chnagepassword)

router.put('/cancelOrder/:id', cancelOrder)

export default router