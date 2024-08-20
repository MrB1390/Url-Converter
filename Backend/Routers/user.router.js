import express from 'express';
import { createUser, getUserAll, getUserById, logOut, resetPassword, userLogin, verifyEmail } from '../Controller/user.controller.js';
import { authLogin } from '../Middleware/auth.controller.js';

const router = express.Router();

router.get('/userDetails',getUserAll);
router.post('/userDetails',createUser);
router.get('/userDetails/:id',getUserById);
router.post('/login',userLogin);
router.post('/email',verifyEmail);
router.put('/reset',resetPassword);
router.post('/logout',authLogin,logOut);


export default router;