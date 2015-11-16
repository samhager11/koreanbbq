var menuItems = require('../models/menuitem.js')

function index(req,res){
  menuItem.find({}, function(err,menuItems){
    if(err) console.log(err)
    res.json(menuItems)
  })
}

function create(req,res){
  var menuItem = new Menuitem()
  menuItem.item_name  = menuItem.body.item_name
  menuItem.price      = menuItem.body.price
  menuItem.calories   = menuItem.body.calories

  menuItem.save(function(err){
    if(err){
      if(err.code == 11000){
        return res.json({success: false, message:"Menu item already exists"})
      } else {
        console.log(err)
      }
    }
    res.json({sucess: true, message:"New menu item has been created!"})
  })
}

function show(req,res){
  menuItem.findById({req.params.menuItem_id}, function(err,menuItem){
    if(err) console.log(err)
    res.json(menuItem)
  })
}
