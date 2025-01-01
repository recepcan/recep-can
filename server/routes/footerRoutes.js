import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { create, deleteItem, getItems, updateItem,  } from '../controllers/footerController.js';
import { verifyAdmin } from '../utils/verifyAdmin.js';

const router = express.Router();

router.post('/create', [verifyToken,verifyAdmin],create)
router.get('/getItems', getItems)
router.delete('/deleteItem/:itemId/:userId', [verifyToken,verifyAdmin], deleteItem)
router.patch('/updateItem/:itemId/:userId', [verifyToken,verifyAdmin], updateItem)


export default router;