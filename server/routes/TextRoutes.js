import  express from 'express';
import  { create,  getTextById,  getTexts, updateText,  } from '../controllers/TextController.js';
const router = express.Router();
router.post('/texts/create',create)
router.get('/getTexts', getTexts);
router.get('/texts/:id', getTextById);
router.put('/texts/update/:id', updateText);


export default  router;