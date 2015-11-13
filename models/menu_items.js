var mongoose = require('mongoose')

//create menu items schema
var menuItemSchema = new mongoose.Schema({
	item_name: {type: String, require: true},
	price: {type: Number, require: true},
	calories: Number,
	ingredients: []
})

//methods to display menuItem info
menuItemSchema.methods.info = function() {
	console.log('Item is: ' + this.item_name + ', ' + this.price + '.')
}

//sets variable for schema
var MenuItem = mongoose.model('MenuItem', menuSchema)

//exports module
module.exports = MenuItem