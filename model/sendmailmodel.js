var mongoose = require('mongoose');

var userschema = new mongoose.Schema({
    email: {
        type: String
    } 
});

module.exports = mongoose.model('sendmail', userschema);