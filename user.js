const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const passportLocalMongoose = require('passport-local-mongoose');
mongoose.connect('mongodb://localhost/instru_db_main', { useNewUrlParser: true, useUnifiedTopology: true });


//for signup_login
const User = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true }
});


User.plugin(passportLocalMongoose);
module.exports = mongoose.model('userData', User, 'userData');
