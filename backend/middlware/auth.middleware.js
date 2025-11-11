const jwt = require('jsonwebtoken');
const customerModel = require('../models/customer.model');
const blackListModel = require('../models/blacklist.model');

module.exports.authenticateCustomer=async(req,res,next)=>{
    const token = req.header('Authorization')?.replace('Bearer ', '') || req.cookies?.token;
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const blacklisted = await blackListModel.findOne({ token });
        if (blacklisted) {
          return res.status(401).json({ message: "Token has been invalidated" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const customer = await customerModel.findById(decoded._id);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found.' });
        }
        req.customer = customer; // Attach customer to request object
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid or expired token', error: err.message });
    }
}