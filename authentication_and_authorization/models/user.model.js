import mongoose  from 'mongoose';
mongoose.connect(`mongodb://localhost:27017/miniProject`);

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        index: true
    }
},{timestamps: true});

export const User = mongoose.model("User",  userSchema);