import './config.js';
import Order from './data.js';
import express from 'express';
import path from 'path';
/* 
Parses req.headers.cookie (string of key-val pairs).
Attaches a new property, 'cookies', on req object.
'cookies' is a valid object of all key-val pairs in req.headers.cookie.
*/
import cookieParser from 'cookie-parser'
/*
server-side library for connecting to and directly writing queries (in SQL) to sqlite databases.
'better-sqlite3' is preferable over 'sqlite3' because it abstracts less, AND is synchronous.
'sqlite3' is an older version of this library that is callback-based.
*/
import sqlite from 'better-sqlite3';
import session from 'express-session';
/*
By default, session (from 'express-session') uses an 
in-memory store for session data. I use connectSqlite3
from 'better-sqlite3-session-store' to store session data
in a simple, light-weight relational database.
*/
import connectSqlite3 from 'better-sqlite3-session-store';
import { fileURLToPath } from 'url';

const app = express();
// environment variable?
const PORT = process.env.PORT || 3000;

// set up session store (sqlite db)
const SqliteStore = connectSqlite3(session);
const db2 = new sqlite("sessions.db",) //{ verbose: console.log });

// create 'cookies' object on req object
app.use(cookieParser())
// expression-session manages session id cookie
// and the connection to session store
app.use(
  session({
    store: new SqliteStore({
      client: db2, 
      expired: {
        clear: true,
        intervalMs: 900000 //ms = 15min
      }
    }),
    cookie: { //<-- set security options for connect.sid cookie
      httpOnly: true,
      secure: false
    },
    secret: "keyboard cat",
    resave: false,
    // configure cookie?
  })
)

app.set('view engine', 'hbs');

// get path to 'public' directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// body-parser middleware(s)
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/menu', (req, res) => {
  // TESTING custom cookies
  if(Object.hasOwn(req.cookies, 'cartItems')){
    console.log("You previously chose "+req.cookies['cartItems'])
  }else {
    console.log("You haven't browsed the menu yet")
  }
  res.render('menu', {otherPage: "cart"});
  // Working: YES
});

/*
User selects items in the /menu which get saved to a (client-side) array.
Client makes POST req via Fetch, passing this array to server.
Server updates session store, and sends cookie back to client. 
*/
app.post('/cart', (req, res) => {
  // get payload
  //req.body is object (array?)
  const cartItems = req.body;
  // save data into sess store
  req.session.cartItems = cartItems;
  // pass data back to client to configure UI
  res.cookie('cartItems',cartItems);
  
  res.sendStatus(200);
  // Working: YES
});
app.get('/cart', (req, res) => {
  // get data from sess store
  const cartItems = req.session.cartItems;
  res.render('cart', {
    cartItems,
    "numCartItems": cartItems.length,
    "otherPage": "menu",//<-- change this
    "totalPrice": Number.parseFloat(cartItems.length * 5),//<-- for now
  })
  // WORKING: YES
})
// linked from form in cart.hbs, action
app.post('/orderUpdates', async (req, res) => {
  console.log(req.body, typeof(req.body))
  const orderItems = req.body.orderItems;
  // this data should be saved to Orders db
  const newOrder = new Order({
    name: req.body.name,
    contact: req.body.contact,
    items: orderItems,
    itemCount: orderItems.length,
    notes: req.body.notes,
    totalPrice: orderItems.length * 5,//<-- for now
  })
  await newOrder.save()
  // update sess store
  session.numItemsPurchased += orderItems.length;
  // show results of saved order
  res.render('orderUpdates', {
    "orderStatus": "Your order is on its way!",
    "orderedItems": orderItems
  })
})
// TEST DB (*requires AUTHENTICATION)
app.get('/orders', async (req, res) => {
  const orders = await Order.find({})
  for (const o of orders){
    console.log(o.name, o.items, o.createdAt)
  }
  res.render('ordersLog', {orders})
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});