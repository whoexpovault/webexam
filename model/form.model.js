const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        }
        ,
        email: {
            type: String,
            required: true,
            trim: true,
        },
        subject: {
            type: String,
            required: true,
            trim: true,
        },
        message: {
            type: String,
            required: true,
            trim: true,
        }
    }, 
    {timestamps: true}
);

const Form = mongoose.model('Form', FormSchema);
module.exports = Form;