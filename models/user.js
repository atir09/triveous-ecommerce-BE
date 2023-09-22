const mongoose = require('mongoose');


// Schema for User
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email:{
    type:String,
    required:true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = {User};
