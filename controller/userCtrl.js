const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });
    if(!findUser) {
       // create a new user 
       const newUser = await User.create(req.body);
       res.json(newUser);
    } else {
        throw new Error('User already exists');
    }
})
module.exports = createUser;