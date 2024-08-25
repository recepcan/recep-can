import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';
import { signOut } from '../controllers/authController.js';
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    
    return  next(errorHandler(401, 'Unauthorized'));
   
    
    
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, 'Bu yetkiye sahip değilsiniz!'));
    }
    req.user = user;
    next();
  });
};