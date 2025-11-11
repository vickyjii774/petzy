const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./db/db')
const express = require("express");
const cors = require("cors");
const app = express();
const customerRouter = require('./routes/customer.router');
const esewaRouter = require('./routes/esewa.router');
const orderRouter = require('./routes/order.router');
const adminRouter = require('./routes/admin.router');
app.use(cors());


app.use(express.json());
connectDB();


app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use('/customers', customerRouter);

app.use('/orders', orderRouter)
app.use("/esewa", esewaRouter);
app.use('/admin', adminRouter);
module.exports = app;
// somewhere in backend/app.js (you showed this earlier)


