const customerModel = require('../models/customer.model');

module.exports.createCustomer=async({firstname,lastname,email,password,phone})=>{
    if (!firstname || !lastname || !email || !password|| !phone) {
      throw new Error("All fields are required");
    }
    // hash password before saving
    const hashedPassword = await customerModel.hashPassword(password);
    const customer = new customerModel({
        firstname,
        lastname,
        email,
        phone,
        password: hashedPassword
    });
    await customer.save();
    // Do not return password
    const obj = customer.toObject();
    delete obj.password;
    return obj;

}
