import mongoose from 'mongoose';
import user from './userModel.js';

const resetPasswordSchema = mongoose.Schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref: user,
    },
    accessToken: {
        type: String,
    },
    isValid: {
        type: Boolean,
        default: false,
    },
});

const resetPassword = mongoose.model('ResetPassword', resetPasswordSchema);

export default resetPassword;
