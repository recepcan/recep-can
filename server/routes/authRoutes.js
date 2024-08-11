import express from 'express'
import { forgotPassword, google, resetPassword, signIn,  signOut } from '../controllers/authController.js';
import { verifyToken } from '../utils/verifyUser.js';
import { verifyAdmin } from '../utils/verifyAdmin.js';

const router = express.Router();

// router.post('/sign-up', signUp)
router.post('/reset-password/:id/:token',resetPassword)
router.post('/forgot-password',forgotPassword)
router.post('/sign-in', signIn)
router.post('/google', google)
router.post('/sign-out',signOut )

export default router ;