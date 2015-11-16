var User = require('../models/user.js')

function index(req,res){
  User.find({}, function(err,users){
    if(err) console.log(err)
    res.json(users)
  })
}

function create(req,res){
  console.log('Created a user')
  var user        = new User()
  user.user_name  = user.body.user_name
  user.email      = user.body.email
  user.age        = user.body.age

  user.save(function(err){
		if(err){
			if(err.code == 11000){
				return res.json({success: false, message: "Username already exists" })
			} else {
				res.send(err)
			}
		}
		res.json({success: true, message: "User created!"})
	})
}
}

function show(req,res){
  User.findById({req.params.user_id}, function(err,user){
    if (err) console.log(err)
    res.json(user)
  })
}

function update(req,res){
  User.findById({req.params.user_id}, function(err,user){
    if(err) console.log(err)

    if(req.body.user_name)
      user.user_name  = req.body.user_name
    if(req.body.email)
      user.email      = req.body.email
    if(req.body.age)
      user.age        = req.body.age

    user.save(function(err){
    if(err) res.send(err)
    res.json({success:true, message:"User has been updated!"})
    })
  })
}

function destroy(req,res){
  User.findById({req.params.user_id}, function(err){
    if(err) console.log(err)
    res.json({success:true, message:"User has been destroyed"})
  })
}

module.exports = {
  index:        index,
  createUser:   create,
  showUser:     show,
  updateUser:   update,
  destroyUser:  destroy
}
