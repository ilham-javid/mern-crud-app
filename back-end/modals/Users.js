const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.UserSchema({
    name: {
        type : String,
        required: true,
    },
    age: {
        type : Number,
        required: true,
    },
    course: {
        type : String,
        required: true,
    }
})

const UserModal = mongoose.model('users', UserSchema);
module.exports = UserModal;