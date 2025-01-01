import Footer from '../models/footerModel.js'
import { errorHandler } from '../utils/error.js';
import mongoose from 'mongoose';  // MongoDB ObjectId doğrulama için

export const create = async (req, res, next) => {
    if (!req.user && !req.user.isAdmin) {
        return next(errorHandler(403, 'You are not allowed to create a post'));
    }
    if (!req.body.title || !req.body.content) {
      return next(errorHandler(400, 'Please provide all required fields'));
    }
  
    const newFooterItem= new Footer({
      ...req.body,
   userId:req.user.id
    })
  
    try {
      const savedItem = await newFooterItem.save();
      res.status(201).json(savedItem);
    } catch (error) {
      next( error);
    }
  };






export const getItems=async(req, res, next)=>{
  try {
    const Items = await Footer.find({
      ...(req.query.userId && { userId: req.query.userId }),
     ...(req.query.itemId && { _id: req.query.itemId }),
    }) 
   
    res.status(200).json({
        Items
    });
} catch (error) {
    next(error);
}
}



// export const getTextById = async (req, res, next) => {
//   const { textId } = req.params;

//   try {
//     // `textId`'nin geçerli bir ID olduğundan emin olun (örneğin, mongoose ID doğrulaması)
//     if (!textId) {
//       return res.status(400).json({ message: 'Text ID is required' });
//     }

//     // `findById` fonksiyonunu kullanarak belgeyi bulma
//     const text = await Text.findById({ 
//        ...(req.query.textId && { _id: req.query.textId })});

//     if (!text) {
//       return res.status(404).json({ message: 'Text not found' });
//     }

//     res.status(200).json(text);
//   } catch (error) {
//     // Hata durumunda daha bilgilendirici bir yanıt döndürme
//     console.error('Error fetching text:', error);
//     res.status(500).json({ message: 'Internal server error', error: error.message });
//   }
// };;






export const updateItem = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to update this post'));
}
  try {
      const updatedItem = await Footer.findByIdAndUpdate(
          req.params.itemId,
          
          req.body,
          
          { new: true }
      );
      res.status(200).json(updatedItem);
  } catch (error) {
      next(error);
  }
};

export const deleteItem = async (req, res, next) => {
    if (!req.user.isAdmin || req.user.id !== req.params.userId) {
        return next(errorHandler(403, 'You are not allowed to delete this post'));
    }
    try {
        await Footer.findByIdAndDelete(req.params.itemId);
        res.status(200).json('The post has been deleted');
    } catch (error) {
        next(error);
    }
};


