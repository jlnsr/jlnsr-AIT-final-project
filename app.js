import './config.js';
import Order from './data.js';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
// environment variable?
const PORT = process.env.PORT || 3000;

app.set('view engine', 'hbs');

// get path to 'public' directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// body-parser middleware(s)
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// basic routes
/*app.use('/cart', (req,res, next) => {
  next();
});*/

app.get('/menu', (req, res) => {
  res.render('menu', {otherPage: "cart"});
  // Working: YES
});

let cartItems = [];//<-- for now
app.post('/cart', (req, res) => {
  cartItems = req.body;
  res.sendStatus(200);
  // Working: YES
});
app.get('/cart', (req, res) => {
  res.render('cart', {
    cartItems,
    "numCartItems": cartItems.length,
    "otherPage": "menu",
    "totalPrice": Number.parseFloat(cartItems.length * 5),//<-- for now
  })
  // WORKING: YES
})
// linked from form in cart.hbs, action
app.post('/orderUpdates', async (req, res) => {
  console.log(req.body, typeof(req.body))
  // this data should be saved to db
  const newOrder = new Order({
    name: req.body.name,
    contact: req.body.contact,
    items: req.body.orderItems,
    itemCount: req.body.orderItems.length,
    notes: req.body.notes,
    totalPrice: req.body.orderItems.length * 5,//<-- for now
  })
  await newOrder.save()
  // show results of saved order
  res.render('orderUpdates', {
    "orderStatus": "Your order is on its way!",
    "orderedItems": req.body.orderItems
  })
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});