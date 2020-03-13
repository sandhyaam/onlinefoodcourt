import { Router } from 'express'

import {
    adminLogin,
    getRestaurentData,
    editItems,
    updateRestaurent,
    getFoodData,
    getFeedBack,
    getUserData

} from './controller'

const router = new Router();

router.get('/', adminLogin)

router.get('/getRestaurentData', getRestaurentData)

router.get('/editItems/:id', editItems);

router.put('/updateRestaurent/:id', updateRestaurent)

router.get('/getUserData', getUserData)

router.get('/getFoodData', getFoodData)

router.get('/getFeedback', getFeedBack);

export default router