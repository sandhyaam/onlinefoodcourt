import { Router } from 'express'

import {
    restaurentlogin,
    restaurentRegistration,
    Profile,
    updateProfile,
    addFoodItem,
    getFoodData,
    updateFoodItem,
    deleleFoodItem,
    getOrderDetails,
    getCancelOrders,
    getFeedBack,
    editItems,
    deleteRestaurent,
    acceptOrder,
    rejectOrder,
    chnagepassword,
    forgotpassword

} from './controller'

const router = new Router();

router.get('/restaurentlogin', restaurentlogin)

router.get('/forgotpassword', forgotpassword);

router.post('/restaurentRegistration', restaurentRegistration)

router.get('/editItems/:id', editItems);

router.get('/Profile', Profile)

router.put('/updateProfile/:id', updateProfile)

router.post('/addFoodItem', addFoodItem)

router.get('/getFoodData', getFoodData)

router.delete('/deleteRestaurent/:id', deleteRestaurent)

router.put('/updateFoodItem/:id', updateFoodItem)

router.delete('/deleleFoodItem/:id', deleleFoodItem)

router.get('/getOrderDetails', getOrderDetails)

router.get('/CancelOrders', getCancelOrders)

router.put('/acceptOrder/:id', acceptOrder)

router.put('/rejectOrder/:id', rejectOrder)

router.get('/getFeedback', getFeedBack);

router.put('/chnagepassword/:id', chnagepassword)

export default router