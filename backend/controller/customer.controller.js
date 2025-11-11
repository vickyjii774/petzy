const {validationResult} = require('express-validator');
const customerModel = require('../models/customer.model');
const customerService = require('../services/customer.service');
const blacklistModel = require('../models/blacklist.model');

module.exports.registerCustomer = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { firstname, lastname, email, phone, password } = req.body;
    // check existing phone or email
    const existing = await customerModel.findOne({ $or: [{ phone }, { email }] });
    if (existing) {
      return res.status(400).json({ message: 'User with given phone or email already exists' });
    }
    const customer = await customerService.createCustomer({ firstname, lastname, email, password, phone });
    // generate token
    const token = (await customerModel.findById(customer._id)).generateAuthToken();
    // set in cookie (optional) and return
    res.cookie('token', token, { httpOnly: true });
    res.status(201).json({ message: 'Registration successful', customer, token });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports.loginCustomer = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { phone, password } = req.body;
    const customer = await customerModel.findOne({ phone: phone });
    if (!customer) {
      return res.status(400).json({ message: 'Invalid phone or password' });
    }
    const valid = await customer.comparePassword(password);
    if (!valid) {
      return res.status(400).json({ message: 'Invalid phone or password' });
    }
    const token = customer.generateAuthToken();
    res.cookie('token', token, { httpOnly: true });
    res.status(200).json({ message: 'Login successful', token, customer: { _id: customer._id, firstname: customer.firstname, lastname: customer.lastname, phone: customer.phone, email: customer.email } });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports.getProfile=async(req,res)=>{
    const customer=req.customer;
    res.status(200).json({customer});
}

module.exports.logoutCustomer=async(req,res)=>{
    res.clearCookie("token");
    const token=req.header('Authorization')?.replace('Bearer ', '')||req.cookies?.token;
    if(token){
     await blacklistModel.create({token});
    }
    res.status(200).json({message:"Logout successful"});
}
