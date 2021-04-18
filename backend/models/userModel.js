import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    id: {type:String, required:true, unique: true},
    name: {type: String, required: true},
    image: {type: String, required: true},
    bio: {type: String},
    description: {type: String},


}, {
    timestamps: false
});


const User = mongoose.model("User", userSchema);
export default User