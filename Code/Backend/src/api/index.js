import {Router} from 'express'

import admin from './Admin'
import user from './User'
import Restaurent from './Restaurent'

const router=new Router();

router.use('/admin',admin)
router.use('/user',user)
router.use('/restaurent',Restaurent)

export default router;