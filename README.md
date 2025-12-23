# petzy

A backend for the **petzy** project, built with **Node.js**, **Express**, and **MongoDB**.  
The backend powers a **frontend application** built with React and Tailwind CSS for ordering.

---

## Features

- Customer authentication (register/login)
- Place new orders
- JWT-based secure authentication
- Modular backend structure for easy maintenance
- Admin login integration pending
- Works with a React frontend for UI

---

## Folder Structure

```
resturant/
├── backend/
│   ├── controllers/
│   │   ├── customer.controller.js
│   │   └── order.controller.js
│   ├── services/
│   │   └── order.service.js
│   ├── routes/
│   │   ├── customer.router.js
│   │   └── order.router.js
│   ├── middleware/
│   │   └── auth.middleware.js
│   ├── models/
│   │   ├── customer.model.js
│   │   └── order.model.js
│   ├── db/
│   │   └── connection.js
│   ├── app.js
│   ├── server.js
│   └── .env
└── frontend/ (React + Tailwind CSS)
```

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB (local or Atlas)

### 1. Clone the repository

```bash
git clone https://github.com/vickyjii774/Petzy
cd backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in `/backend` with placeholders:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/resturant
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

> **Do not commit real credentials to GitHub.**

### 4. Run the Server

```bash
npm run dev   # if "dev": "nodemon server.js" exists in package.json
# or
node server.js
```

---

## API Endpoints

### Orders
| Method | Endpoint           | Description                         |
|--------|------------------|------------------------------------|
| POST   | /order/place      | Place a new order                   |
| GET    | /order/history    | Get all orders    |

### Customers
| Method | Endpoint            | Description                   |
|--------|-------------------|-------------------------------|
| POST   | /customer/register | Register a new customer       |
| POST   | /customer/login    | Customer login                |

### Admin
- Admin login integration is **pending**.

---

## Frontend

- Built with **React** and **Tailwind CSS**.
- Sends requests to the backend API for:
  - Placing orders
  - Viewing order status (customers)
  - Admin-only order history
- Frontend folder: `/frontend`
- For local development, run the backend first (`npm run dev`) and then the frontend (`npm run dev` in `/frontend`).

---

## Database (MongoDB)

Example `order.model.js` fields:

```js
const orderSchema = new mongoose.Schema({
  items: [{ foodid: Number, name: String, price: Number, quantity: Number }],
  address: String,
  deliveryNotes: String,
  totalAmount: Number,
  paymentMethod: String,
  paymentStatus: { type: String, default: 'pending' },
  orderStatus: { type: String, default: 'pending' }
});
```

---

## Testing Tips

- Use **Postman** or curl to test endpoints.  
- Make sure MongoDB is running locally or your `MONGO_URI` points to a cluster.  
- Only admin users can fetch order history.

---

## Commands

```bash
cd backend
npm install
npm run dev
```

Frontend:

```bash
cd frontend
npm install
npm run dev
```

---


