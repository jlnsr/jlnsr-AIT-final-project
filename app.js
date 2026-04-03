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
app.use(express.urlencoded({ extended: true }));

// basic routes
app.use('/home', (req,res, next) => {
  next();
});

app.get('/home', (req, res) => {
  res.render('home', {atHome: true});
});

app.get('/cart', (req, res) => {
  res.render('cart', {
    atHome: false, 
    orderStatus: "Complete your order",
    processing: true,
  });
});

app.post('/cart', (req, res) => {
  console.log(req.body);
  res.render('cart', {
    atHome: false, 
    orderStatus: "Your order is on its way!",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});