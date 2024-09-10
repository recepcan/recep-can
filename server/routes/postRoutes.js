import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, deletepost, getposts, updatepost } from '../controllers/postController.js';
import { verifyAdmin } from '../utils/verifyAdmin.js';

const router = express.Router();

router.post('/create', [verifyToken,verifyAdmin], create)
router.get('/getposts', getposts)
router.delete('/deletepost/:postId/:userId',  deletepost)
router.patch('/updatepost/:postId/:userId', [verifyToken,verifyAdmin], updatepost)


export default router;