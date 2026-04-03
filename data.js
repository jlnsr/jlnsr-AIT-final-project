import mongoose, { Schema } from 'mongoose';
mongoose.connect(process.env.DSN).
  then(() => console.log('connected to database')).
  catch(err => console.log('database connection error: ' + err));

// DB details
// Schema for restaurant items??
// customers = ANYONE who orders from this restaurant
const CustomerSchema = mongoose.Schema({
  firstName: {type: String},
  lastName: {type: String},
  email: {type: String},
  // no password needed
  address: {type: String},
});
// customer makes order
const OrderSchema = mongoose.Schema({
  // array of all items in order
  items: {type: [String]},
  itemCount: {type: Number},
  // personalized specifications for customer order
  notes: {type: String},
  // price prior to discounts (sum of items)
  /*basePrice: {type: Number},
  // percentage OR literal value?
  discount: {type: Number},
  // price after discounts, deals, fees, etc..*/
  totalPrice: {type: Number},
  //customer: {mongoose.Schema.Types.ObjdId, ref:'Customer'}
  time: {type: Date}
});

// ADDITIONAL
// schema for members
// members derive from customers??
// members = loyal customers who sign
// up for a special membership with a restaurant
const MemberSchema = mongoose.Schema({
  // derive data from 'Customer' document
  customer: {type: mongoose.Schema.Types.ObjectId, ref:'Customer'},
  // APPEND NEW fields (specific to Member)
  password: {type: String},
  //favorites: {type: [String]}
  // etc.
});
const Member = mongoose.model('Member', MemberSchema);
// restaurant for whom this app
// hosts the online menu
const BusinessSchema = mongoose.Schema({
  // restaurant name that appears on menu
  name: {type: String},
  // logo: {type: String} // URL for img <--?
  // for listing business location on
  // interactive, online menus
  address: {type: String},
  //etc..
});