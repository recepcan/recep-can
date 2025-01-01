import mongoose from 'mongoose';

const footerSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true, 

            content: {
                type: String,
                required: true,
            },
            linktitle:{
                type:String,
                required:true
            },

            userId: {
                type: String,
                required: true,
            },
            link: {
                type: String,
                required: true
            }
        }


    },
    { timestamps: true }
);

const Footer = mongoose.model('Footer', footerSchema);

export default Footer;