import Text from '../models/TextModels.js'
import { errorHandler } from '../utils/error.js';

export const create = async (req, res, next) => {
    // if (!req.user.isAdmin) {
    //     return next(errorHandler(403, 'You are not allowed to create a post'));
    // }
    if (!req.body.title || !req.body.content) {
      return next(errorHandler(400, 'Please provide all required fields'));
    }
  
    const newText = new Text({
      ...req.body,
    });
  
    try {
      const savedText = await newText.save();
      res.status(201).json(savedText);
    } catch (error) {
      next( error);
    }
  };
export const getTexts=async(req, res, next)=>{
  try {
    const texts = await Text.find({}) 
   
    res.status(200).json({
       texts
    });
} catch (error) {
    next(error);
}
}


export const getTextById = async (req, res, next) => {
    // const { id } = req.params; // ID'yi URL parametresinden alıyoruz
  
    try {
      const text = await Text.findById("66b124be8e2076ecbe826a24");
      if (!text) {
        return next(errorHandler(404, 'Text not found'));
      }
      res.status(200).json(text);
    } catch (error) {
      next(errorHandler(500, 'Something went wrong while fetching the text', error));
    }
  };

  export const updateText = async (req, res, next) => {
    // if (!req.user.isAdmin || req.user.id !== req.params.userId) {
    //     return next(errorHandler(403, 'You are not allowed to update this post'));
    // }
    const { id } = req.params;
    const { title, content } = req.body;
  
    try {
      const updatedText = await Text.findByIdAndUpdate(
        id,
        { title, content },
        { new: true, runValidators: true }
      );
  
      if (!updatedText) {
        return next(errorHandler(500,"something went wrong"))
      }
  
      res.status(200).json(updatedText);
    } catch (error) {
      next(errorHandler(500,error.message))
    }
};


// export const updateText=async(req, res, next)=>{
  
// }