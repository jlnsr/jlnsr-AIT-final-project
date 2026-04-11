import './config.js';
import './data.js';
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

// body-parser middleware
//app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// basic routes
app.use('/menu', (req,res, next) => {
  next();
});

app.get('/menu', (req, res) => {
  res.render('menu', {otherPage: "cart"});
  // Working: YES
});

// BEGINNING OF OVERHAUL
/*app.get('/cart', (req, res) => {
  
});*/

let cartItems = [];//<-- for now
app.post('/cart', (req, res) => {
  //console.log(req.body, Array.isArray(req.body));
  cartItems = req.body;
  res.sendStatus(200);
  // Working: 
});
app.get('/cart', (req, res) => {
  res.render('cart', {
    cartItems,
    "otherPage": "menu",
    "orderStatus": "Complete your order"
  })
})
// END OF OVERHAUL

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});