import Text from '../models/TextModels.js'
import { errorHandler } from '../utils/error.js';
import mongoose from 'mongoose';  // MongoDB ObjectId doğrulama için
export const create = async (req, res, next) => {
    if (!req.user && !req.user.isAdmin) {
        return next(errorHandler(403, 'You are not allowed to create a post'));
    }
    if (!req.body.title || !req.body.content) {
      return next(errorHandler(400, 'Please provide all required fields'));
    }
  
    const newText= new Text({
      ...req.body,
   userId:req.user.id
    })
  
    try {
      const savedText = await newText.save();
      res.status(201).json(savedText);
    } catch (error) {
      next( error);
    }
  };






export const getTexts=async(req, res, next)=>{
  try {
    const texts = await Text.find({
      ...(req.query.userId && { userId: req.query.userId }),
     ...(req.query.textId && { _id: req.query.textId }),
    }) 
   
    res.status(200).json({
       texts
    });
} catch (error) {
    next(error);
}
}



export const getTextById = async (req, res, next) => {
  const { textId } = req.params;

  try {
    // `textId`'nin geçerli bir ID olduğundan emin olun (örneğin, mongoose ID doğrulaması)
    if (!textId) {
      return res.status(400).json({ message: 'Text ID is required' });
    }

    // `findById` fonksiyonunu kullanarak belgeyi bulma
    const text = await Text.findById({ 
       ...(req.query.textId && { _id: req.query.textId })});

    if (!text) {
      return res.status(404).json({ message: 'Text not found' });
    }

    res.status(200).json(text);
  } catch (error) {
    // Hata durumunda daha bilgilendirici bir yanıt döndürme
    console.error('Error fetching text:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};;






export const updateText = async (req, res, next) => {
  if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    return next(errorHandler(403, 'You are not allowed to update this post'));
}
  try {
      const updatedText = await Text.findByIdAndUpdate(
          req.params.textId,
          
          req.body,
          
          { new: true }
      );
      res.status(200).json(updatedText);
  } catch (error) {
      next(error);
  }
};






// import mongoose from 'mongoose';  // MongoDB ObjectId doğrulama için

// export const updateText = async (req, res, next) => {
//   const { textId } = req.params;
//   const { title, content } = req.body;

//   // ObjectId geçerliliğini kontrol et
//   if (!mongoose.Types.ObjectId.isValid(textId)) {
//     return res.status(400).json({ message: 'Invalid text ID format' });
//   }

//   try {
//     const updatedPost = await Text.findByIdAndUpdate(
//       ...(req.query.textId && { _id: req.query.textId }),
//       { title, content },
//       { new: true, runValidators: true }  // Yeni veri ve doğrulamaları ekleyin
//     );

//     if (!updatedPost) {
//       return res.status(404).json({ message: 'Text not found' });
//     }

//     res.status(200).json(updatedPost);
//   } catch (error) {
//     console.error(error);  // Hata detaylarını kontrol et
//     next(error);  // Hata işleme
//   }
// };


// export const updateText=async(req, res, next)=>{
  
// }