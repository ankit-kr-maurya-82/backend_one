import mongoose  from 'mongoose';
mongoose.connect(`mongodb://localhost:27017/miniProject`);

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number
});

const  User  = mongoose.model("User",  userSchema);
export default User