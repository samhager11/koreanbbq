var mongoose = require('mongoose')

//create user schema
var userSchema = new mongoose.Schema({
	user_name: String,
	email: {type: String, require: true, unique: true},
	friends: [],
	age: Number
})

//creates a method to display user's info
userSchema.methods.info = function() {
	console.log('My user_name is: ' + this.user_name + '. I am ' + this.age + ' years old.')
}

//sets variable for schema
var User = mongoose.model('User', userSchema)

//exports module
module.exports = User